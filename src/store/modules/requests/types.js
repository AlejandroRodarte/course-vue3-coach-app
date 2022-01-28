const MODULE_NAME = 'requests/';

export const GET_REQUESTS = `${MODULE_NAME}/getters/getRequests`;
export const HAS_REQUESTS = `${MODULE_NAME}/getters/hasRequests`;
export const GET_LOADING_FLAG = `${MODULE_NAME}/getters/getLoadingFlag`;
export const GET_ERROR = `${MODULE_NAME}/getters/getError`;
export const SHOULD_UPDATE = `${MODULE_NAME}/getters/shouldUpdate`;
export const MUTATE_ADD_REQUEST = `${MODULE_NAME}/mutations/mutateAddRequest`;
export const MUTATE_SET_LOADING_FLAG = `${MODULE_NAME}/mutations/mutateSetLoadingFlag`;
export const MUTATE_SET_ERROR = `${MODULE_NAME}/mutations/mutateSetError`;
export const MUTATE_CLEAR_ERROR = `${MODULE_NAME}/mutations/mutateClearError`;
export const MUTATE_SET_REQUESTS = `${MODULE_NAME}/mutations/mutateSetRequests`;
export const MUTATE_SET_FETCH_TIMESTAMP = `${MODULE_NAME}/mutations/mutateSetFetchTimestamp`;
export const ADD_REQUEST = `${MODULE_NAME}/actions/addRequest`;
export const CLEAR_ERROR = `${MODULE_NAME}/actions/clearError`;
export const SET_REQUESTS = `${MODULE_NAME}/actions/setRequests`;