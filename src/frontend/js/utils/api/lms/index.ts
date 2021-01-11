import { CommonDataProps } from 'types/commonDataProps';
import { handle } from 'utils/errors/handle';
import { ApiImplementation, ApiBackend } from 'types/api';
import BaseApiInterface from './base';
import OpenEdxDogwoodApiInterface from './openedx-dogwood';
import OpenEdxHawthornApiInterface from './openedx-hawthorn';

const context: CommonDataProps['context'] = (window as any).__richie_frontend_context__?.context;
if (!context) throw new Error('No context frontend context available');

const LMS_BACKENDS = context.lms_backends;

const selectAPIWithUrl = (url: string) => {
  const API = LMS_BACKENDS.find((lms) => new RegExp(lms.course_regexp).test(url));
  return API;
};

const LmsAPIHandler = (url: string): ApiImplementation => {
  const api = selectAPIWithUrl(url);

  switch (api?.backend) {
    case ApiBackend.BASE:
      return BaseApiInterface(api);
    case ApiBackend.OPENEDX_DOGWOOD:
      return OpenEdxDogwoodApiInterface(api);
    case ApiBackend.OPENEDX_HAWTHORN:
      return OpenEdxHawthornApiInterface(api);
  }

  const error = new Error(`No LMS Backend found for ${url}.`);
  handle(error);
  throw error;
};

export default LmsAPIHandler;
