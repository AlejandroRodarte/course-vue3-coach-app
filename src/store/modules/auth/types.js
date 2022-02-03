const MODULE_NAME = 'auth';

export const GET_USER_ID = `${MODULE_NAME}/getters/getUserId`;
export const GET_LOADING_FLAG = `${MODULE_NAME}/getters/getLoadingFlag`;
export const GET_ERROR = `${MODULE_NAME}/getters/getError`;
export const GET_TOKEN = `${MODULE_NAME}/getters/getToken`;
export const IS_AUTHENTICATED = `${MODULE_NAME}/getters/isAuthenticated`;
export const MUTATE_SET_LOADING_FLAG = `${MODULE_NAME}/mutations/mutateSetLoadingFlag`;
export const MUTATE_SET_ERROR = `${MODULE_NAME}/mutations/mutateSetError`;
export const MUTATE_CLEAR_ERROR = `${MODULE_NAME}/mutations/mutateClearError`;
export const MUTATE_SET_CREDENTIALS = `${MODULE_NAME}/mutations/mutateSetCredentials`;
export const LOGIN = `${MODULE_NAME}/actions/login`;
export const SIGNUP = `${MODULE_NAME}/actions/signup`;
export const AUTHENTICATE = `${MODULE_NAME}/actions/authenticate`;
export const CLEAR_ERROR = `${MODULE_NAME}/actions/clearError`;