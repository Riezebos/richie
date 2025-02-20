import {
  act,
  findByRole,
  getByRole,
  getByText,
  queryByRole,
  render,
  screen,
  within,
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import { createIntl, IntlProvider } from 'react-intl';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import fetchMock from 'fetch-mock';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import {
  CourseLightFactory,
  CourseRunFactoryFromPriority,
  RichieContextFactory as mockRichieContextFactory,
} from 'utils/test/factories/richie';
import SyllabusCourseRunsList from 'widgets/SyllabusCourseRunsList/index';
import { createTestQueryClient } from 'utils/test/createTestQueryClient';
import { CourseRun, Priority } from 'types';
import JoanieApiProvider from 'contexts/JoanieApiContext';
import { Product } from 'types/Joanie';
import { ProductFactory } from 'utils/test/factories/joanie';
import { DEFAULT_DATE_FORMAT } from 'hooks/useDateFormat';
import { joinAnd } from 'utils/JoinAnd';
import { StringHelper } from 'utils/StringHelper';
import { computeStates } from 'utils/CourseRuns';

jest.mock('utils/context', () => {
  const mock = mockRichieContextFactory().one();
  mock.lms_backends = [
    {
      backend: 'joanie',
      course_regexp: '^.*/api/v1.0/(course-runs|products)/([^/]*)/?$',
      endpoint: 'https://joanie.test',
    },
    {
      backend: 'openedx-hawthorn',
      course_regexp: '(https://openedx.endpoint.*)',
      endpoint: 'https://demo.endpoint',
    },
  ];
  mock.authentication = { backend: 'fonzie', endpoint: 'https://auth.test' };
  mock.joanie_backend = { endpoint: 'https://joanie.test' };
  return {
    __esModule: true,
    default: mock,
  };
});

const MAX_ARCHIVED_COURSE_RUNS = 5;

describe('<SyllabusCourseRunsList/>', () => {
  beforeAll(() => {
    // @ts-ignore
    ReactDOM.createPortal = jest.fn((element) => {
      return <div data-testid="portal">{element}</div>;
    });
  });

  afterEach(() => {
    // @ts-ignore
    ReactDOM.createPortal.mockClear();
  });

  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <QueryClientProvider client={createTestQueryClient()}>
        <IntlProvider locale="en">
          <JoanieApiProvider>{children}</JoanieApiProvider>
        </IntlProvider>
      </QueryClientProvider>
    );
  };

  const getHeaderContainer = (): HTMLElement => {
    return document.querySelector('.course-detail__row')!;
  };

  const getPortalContainer = () => {
    return screen.getByTestId('portal');
  };

  const expectCourseRunInList = (container: HTMLElement, courseRun: CourseRun) => {
    const intl = createIntl({ locale: 'en' });
    const start = courseRun.start
      ? intl.formatDate(new Date(courseRun.start), DEFAULT_DATE_FORMAT)
      : '...';
    const end = intl.formatDate(new Date(courseRun.end), DEFAULT_DATE_FORMAT);
    getByText(container, `${courseRun.title}, from ${start} to ${end}`);
  };

  const expectCourseRunOpened = (container: HTMLElement, courseRun: CourseRun) => {
    [courseRun] = computeStates([courseRun]);
    const intl = createIntl({ locale: 'en' });
    const heading = getByRole(container, 'heading', {
      name: courseRun.title,
    });
    const runContainer = heading.parentNode! as HTMLElement;

    const enrollmentNode = getByText(runContainer, 'Enrollment');

    const enrollmentDatesContainer = enrollmentNode.nextSibling!;
    const enrollmentStart = intl.formatDate(
      new Date(courseRun.enrollment_start),
      DEFAULT_DATE_FORMAT,
    );
    const enrollmentEnd = intl.formatDate(new Date(courseRun.enrollment_end), DEFAULT_DATE_FORMAT);
    expect(enrollmentDatesContainer.textContent).toEqual(
      `From ${enrollmentStart} to ${enrollmentEnd}`,
    );

    const courseNode = enrollmentDatesContainer.nextSibling!;
    expect(courseNode.textContent).toEqual('Course');

    const start = intl.formatDate(new Date(courseRun.start), DEFAULT_DATE_FORMAT);
    const end = intl.formatDate(new Date(courseRun.end), DEFAULT_DATE_FORMAT);

    const datesContainer = courseNode.nextSibling!;
    expect(datesContainer.textContent).toEqual(`From ${start} to ${end}`);

    const languagesNode = datesContainer.nextSibling!;
    expect(languagesNode.textContent).toEqual('Languages');

    const languagesContainer = languagesNode.nextSibling! as HTMLElement;
    getByText(
      languagesContainer,
      joinAnd(
        courseRun.languages.map(
          (language) => intl.formatDisplayName(language, { type: 'language' })!,
        ),
        intl,
      ),
    );

    expect(languagesContainer.nextSibling).toBeNull();
    getByRole(runContainer, 'link', {
      name: StringHelper.capitalizeFirst(courseRun.state.call_to_action)!,
    });
  };

  const expectProduct = async (container: HTMLElement, product: Product) => {
    const heading = await findByRole(container, 'heading', {
      name: product.title,
    });
    expect(Array.from(heading.classList)).toContain('product-widget__title');
  };

  const expectEmptyPortalContainer = () => {
    // This way of testing is a bit hard but we are SURE that there is no other content. This way
    // we are also testing the absence of other elements.
    expect(getPortalContainer().textContent).toEqual('Other course runsNo other course runs');
  };

  it('has no opened course run', async () => {
    const course = CourseLightFactory().one();
    const courseRuns = [
      CourseRunFactoryFromPriority(Priority.FUTURE_NOT_YET_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.FUTURE_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ONGOING_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.TO_BE_SCHEDULED)().one(),
    ];

    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    // Header.
    screen.getByText('No opened course runs');
    expect(getHeaderContainer().querySelectorAll('.course-detail__run-descriptions').length).toBe(
      0,
    );

    // Portal.
    // Expect that all other course runs all present.
    const portalContainer = getPortalContainer();
    courseRuns.forEach((run) => expectCourseRunInList(portalContainer, run));
  });

  it('has one opened course run', async () => {
    const course = CourseLightFactory().one();
    const courseRuns = [
      CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.FUTURE_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ONGOING_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.TO_BE_SCHEDULED)().one(),
    ];

    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    // Header.
    expect(getHeaderContainer().querySelectorAll('.course-detail__run-descriptions').length).toBe(
      1,
    );
    getByRole(getHeaderContainer(), 'heading', {
      name: courseRuns[0].title,
    });

    // Portal.
    // Expect that all other course runs all present.
    const portalContainer = getPortalContainer();
    courseRuns.slice(1).forEach((run) => expectCourseRunInList(portalContainer, run));
  });

  it('has multiple opened course run', async () => {
    const course = CourseLightFactory().one();
    const courseRuns = [
      CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.FUTURE_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.FUTURE_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ONGOING_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.TO_BE_SCHEDULED)().one(),
    ];

    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    // Header.
    expect(getHeaderContainer().querySelectorAll('.course-detail__run-descriptions').length).toBe(
      0,
    );
    screen.getByText('2 course runs are currently open for this course');

    // Portal.
    // Expect that all course runs to be present.
    const portalContainer = getPortalContainer();
    courseRuns.slice(0, 2).forEach((run) => expectCourseRunOpened(portalContainer, run));
    courseRuns.slice(2).forEach((run) => expectCourseRunInList(portalContainer, run));
  });

  it('has one opened product', async () => {
    const course = CourseLightFactory().one();
    const product: Product = ProductFactory().one();
    fetchMock.get(
      `https://joanie.test/api/v1.0/products/${product.id}/?course=${course.code}`,
      product,
    );

    const courseRun = CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one();
    courseRun.resource_link = 'https://joanie.test/api/v1.0/products/' + product.id + '/';

    render(
      <SyllabusCourseRunsList
        courseRuns={[courseRun]}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    // Header.
    expect(getHeaderContainer().querySelectorAll('.course-detail__run-descriptions').length).toBe(
      1,
    );
    await expectProduct(getHeaderContainer(), product);

    // Portal.
    expectEmptyPortalContainer();
  });

  it('renders a specific title in portal when there is one opened course run', () => {
    const course = CourseLightFactory().one();

    render(
      <SyllabusCourseRunsList
        courseRuns={[CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one()]}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );
    getByRole(getPortalContainer(), 'heading', {
      name: 'Other course runs',
    });
    expect(
      queryByRole(getPortalContainer(), 'heading', {
        name: 'Course runs',
      }),
    ).not.toBeInTheDocument();
  });

  it('renders a specific title in portal when there are multiple opened course run', () => {
    const course = CourseLightFactory().one();
    render(
      <SyllabusCourseRunsList
        courseRuns={[
          CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one(),
          CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one(),
        ]}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );
    getByRole(getPortalContainer(), 'heading', {
      name: 'Course runs',
    });
    expect(
      queryByRole(getPortalContainer(), 'heading', {
        name: 'Other course runs',
      }),
    ).not.toBeInTheDocument();
  });

  it('renders different categories correctly', () => {
    const course = CourseLightFactory().one();
    const courseRuns = [
      CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.FUTURE_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.ARCHIVED_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.FUTURE_NOT_YET_OPEN)().one(),
      CourseRunFactoryFromPriority(Priority.FUTURE_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ONGOING_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one(),
      CourseRunFactoryFromPriority(Priority.TO_BE_SCHEDULED)().one(),
    ];
    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    getByRole(getPortalContainer(), 'heading', {
      name: 'Course runs',
    });
    expect(
      queryByRole(getPortalContainer(), 'heading', {
        name: 'Other course runs',
      }),
    ).not.toBeInTheDocument();

    const portalContainer = getPortalContainer();
    expectCourseRunOpened(portalContainer, courseRuns[0]);
    expectCourseRunOpened(portalContainer, courseRuns[1]);
    expectCourseRunOpened(portalContainer, courseRuns[2]);

    const toBeScheduledContainer = getByRole(portalContainer, 'heading', {
      name: 'To be scheduled',
    }).parentNode! as HTMLElement;
    expectCourseRunInList(toBeScheduledContainer, courseRuns[7]);

    const upcomingContainer = getByRole(portalContainer, 'heading', {
      name: 'Upcoming',
    }).parentNode! as HTMLElement;
    expectCourseRunInList(upcomingContainer, courseRuns[3]);

    const ongoingContainer = getByRole(portalContainer, 'heading', {
      name: 'Ongoing',
    }).parentNode! as HTMLElement;
    expectCourseRunInList(ongoingContainer, courseRuns[4]);
    expectCourseRunInList(ongoingContainer, courseRuns[5]);

    const archivedContainer = getByRole(portalContainer, 'heading', {
      name: 'Archived',
    }).parentNode! as HTMLElement;
    expectCourseRunInList(archivedContainer, courseRuns[6]);
  });

  it('renders an opened course run with an existing LMS Backend', () => {
    const course = CourseLightFactory().one();
    const courseRun = CourseRunFactoryFromPriority(Priority.ONGOING_OPEN)().one();
    courseRun.resource_link = 'https://openedx.endpoint' + courseRun.resource_link;

    render(
      <SyllabusCourseRunsList
        courseRuns={[courseRun]}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    // Header.
    expect(getHeaderContainer().querySelectorAll('.course-detail__run-descriptions').length).toBe(
      1,
    );
    getByRole(getHeaderContainer(), 'heading', {
      name: courseRun.title,
    });
    // Make sure that CourseRunEnrollment is well rendered.
    getByRole(getHeaderContainer(), 'button', { name: 'Log in to enroll' });
  });

  it('limits the amount of archived course runs displayed', async () => {
    const course = CourseLightFactory().one();
    const courseRuns = [...Array(MAX_ARCHIVED_COURSE_RUNS * 2)]
      .map(() => CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one())
      .sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    const portalContainer = getPortalContainer();

    // Expect that "is-hidden" class is set only to course runs in (MAX_ARCHIVED_COURSE_RUNS)nth-plus position.
    expect(portalContainer.querySelectorAll('li').length).toBe(MAX_ARCHIVED_COURSE_RUNS * 2);
    portalContainer.querySelectorAll('li').forEach((listElement, i) => {
      expectCourseRunInList(listElement, courseRuns[i]);
      if (i >= MAX_ARCHIVED_COURSE_RUNS) {
        expect(listElement.classList).toContain('is-hidden');
      } else {
        expect(listElement.classList).not.toContain('is-hidden');
      }
    });

    const button = screen.getByRole('button', { name: 'View more' });
    const user = userEvent.setup();

    // click on view more.
    await act(async () => user.click(button));

    // expect that "is-hidden" are removed.
    portalContainer.querySelectorAll('li').forEach((listElement, i) => {
      expectCourseRunInList(listElement, courseRuns[i]);
      expect(listElement.classList).not.toContain('is-hidden');
    });

    expect(screen.queryByRole('button', { name: 'View more' })).not.toBeInTheDocument();
  });

  it('does not limit the amount of archived course runs displayed', async () => {
    const course = CourseLightFactory().one();

    const courseRuns = [...Array(MAX_ARCHIVED_COURSE_RUNS - 1)]
      .map(() => CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one())
      .sort((a, b) => Date.parse(a.start) - Date.parse(b.start));

    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    const portalContainer = getPortalContainer();
    expect(screen.queryByRole('button', { name: 'View more' })).not.toBeInTheDocument();

    // expect that "is-hidden" is not set.
    expect(portalContainer.querySelectorAll('li').length).toBe(MAX_ARCHIVED_COURSE_RUNS - 1);
    portalContainer.querySelectorAll('li').forEach((listElement, i) => {
      expectCourseRunInList(listElement, courseRuns[i]);
      expect(listElement.classList).not.toContain('is-hidden');
    });
  });

  it('renders opened runs with the same locale as the user above', async () => {
    const course = CourseLightFactory().one();

    const refDate = faker.date.future();
    const futureDate = (days: number) => {
      const date = new Date(refDate.getTime());
      date.setDate(date.getDate() + days);
      return date;
    };

    const courseRuns: CourseRun[] = [
      {
        ...CourseRunFactoryFromPriority(Priority.FUTURE_OPEN)().one(),
        languages: ['fr'],
        start: futureDate(1).toISOString(),
      },
      {
        ...CourseRunFactoryFromPriority(Priority.FUTURE_OPEN)().one(),
        languages: ['en'],
        start: futureDate(2).toISOString(),
      },
      {
        ...CourseRunFactoryFromPriority(Priority.FUTURE_OPEN)().one(),
        languages: ['mf'],
        start: futureDate(3).toISOString(),
      },
      {
        ...CourseRunFactoryFromPriority(Priority.FUTURE_OPEN)().one(),
        languages: ['en', 'fr'],
        start: futureDate(4).toISOString(),
      },
      {
        ...CourseRunFactoryFromPriority(Priority.FUTURE_OPEN)().one(),
        languages: ['it'],
        start: futureDate(5).toISOString(),
      },
    ];

    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    const portalContainer = getPortalContainer();
    // Assert that they are all displayed.
    courseRuns.forEach((run) => expectCourseRunOpened(portalContainer, run));
    // Assert the order.
    // Order should be:
    // EN
    // EN, FR
    // FR
    // MF
    // IT
    const elements: NodeListOf<HTMLDivElement> = portalContainer.querySelectorAll(
      '.course-detail__run-descriptions',
    );
    expect(elements.length).toBe(courseRuns.length);
    expectCourseRunOpened(elements[0], courseRuns[1]);
    expectCourseRunOpened(elements[1], courseRuns[3]);
    expectCourseRunOpened(elements[2], courseRuns[0]);
    expectCourseRunOpened(elements[3], courseRuns[2]);
    expectCourseRunOpened(elements[4], courseRuns[4]);
  });

  it('renders course runs with snapshot link if needed', async () => {
    const course = CourseLightFactory().one();
    const refDate = faker.date.future();
    const futureDate = (days: number) => {
      const date = new Date(refDate.getTime());
      date.setDate(date.getDate() + days);
      return date;
    };
    const courseRuns: CourseRun[] = [
      {
        ...CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one(),
        snapshot: faker.internet.url(),
        start: futureDate(1).toISOString(),
      },
      {
        ...CourseRunFactoryFromPriority(Priority.ARCHIVED_CLOSED)().one(),
        start: futureDate(2).toISOString(),
      },
    ];

    render(
      <SyllabusCourseRunsList
        courseRuns={courseRuns}
        course={course}
        maxArchivedCourseRuns={MAX_ARCHIVED_COURSE_RUNS}
      />,
      {
        wrapper: Wrapper,
      },
    );

    const portalContainer = getPortalContainer();
    expectCourseRunInList(portalContainer, courseRuns[0]);
    expectCourseRunInList(portalContainer, courseRuns[1]);

    const listElements = document.querySelectorAll('li');
    expect(listElements.length).toBe(2);

    // Assert the first course run is wrapped in a link.
    const link = within(listElements[0]).getByRole('link');
    expect(link.getAttribute('href')).toBe(courseRuns[0].snapshot);

    // Assert the second course run to not be wrapped in a link.
    expect(within(listElements[1]).queryByRole('link')).not.toBeInTheDocument();
  });
});
