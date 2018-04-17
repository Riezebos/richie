import { APIListCommonRequestParams, APIResponseListFacets, APIResponseListMeta } from '../../../types/api';
import Resource from '../../../types/Resource';
import { RootState } from '../../rootReducer';

export interface ResourceListGet {
  params?: APIListCommonRequestParams & { [key: string]: string | number | null | Array<string | number> };
  resourceName: keyof RootState['resources'];
  type: 'RESOURCE_LIST_GET';
}

export function getResourceList(
  resourceName: keyof RootState['resources'],
  params: ResourceListGet['params'],
): ResourceListGet {
  return {
    params,
    resourceName,
    type: 'RESOURCE_LIST_GET',
  };
}

export interface ResourceListGetFailure {
  error: Error | string;
  resourceName: keyof RootState['resources'];
  type: 'RESOURCE_LIST_GET_FAILURE';
}

export function failedToGetResourceList(
  resourceName: keyof RootState['resources'],
  error: ResourceListGetFailure['error'],
): ResourceListGetFailure {
  return {
    error,
    resourceName,
    type: 'RESOURCE_LIST_GET_FAILURE',
  };
}

export interface ResourceListGetSuccess<R extends Resource> {
  apiResponse: { facets?: APIResponseListFacets, meta: APIResponseListMeta, objects: R[] };
  params: APIListCommonRequestParams & { [key: string]: string | number | null | Array<string | number> };
  resourceName: keyof RootState['resources'];
  type: 'RESOURCE_LIST_GET_SUCCESS';
}

export function didGetResourceList(
  resourceName: keyof RootState['resources'],
  apiResponse: ResourceListGetSuccess<Resource>['apiResponse'],
  params: ResourceListGetSuccess<Resource>['params'],
): ResourceListGetSuccess<Resource> {
  return {
    apiResponse,
    params,
    resourceName,
    type: 'RESOURCE_LIST_GET_SUCCESS',
  };
}
