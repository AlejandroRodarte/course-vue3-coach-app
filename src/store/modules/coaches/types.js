const MODULE_NAME = 'coaches';

export const GET_COACHES = `${MODULE_NAME}/getters/getCoaches`;
export const HAS_COACHES = `${MODULE_NAME}/getters/hasCoaches`;
export const IS_USER_ON_COACH_LIST = `${MODULE_NAME}/getters/isUserOnCoachList`;
export const GET_SELECTED_COACH = `${MODULE_NAME}/getters/getSelectedCoach`;
export const GET_LOADING_FLAG = `${MODULE_NAME}/getters/getLoadingFlag`;
export const GET_ERROR = `${MODULE_NAME}/getters/getError`;
export const MUTATE_SELECT_COACH_ID = `${MODULE_NAME}/mutations/mutateSetSelectedCoachId`;
export const MUTATE_ADD_COACH = `${MODULE_NAME}/mutations/mutateAddCoach`;
export const MUTATE_SET_COACHES = `${MODULE_NAME}/mutations/mutateSetCoaches`;
export const MUTATE_SET_LOADING_FLAG = `${MODULE_NAME}/mutations/mutateSetLoadingFlag`;
export const MUTATE_SET_ERROR = `${MODULE_NAME}/mutations/mutateSetError`;
export const MUTATE_CLEAR_ERROR = `${MODULE_NAME}/mutations/mutateClearError`;
export const SELECT_COACH_ID = `${MODULE_NAME}/actions/selectCoachId`;
export const ADD_COACH = `${MODULE_NAME}/actions/addCoach`;
export const SET_COACHES = `${MODULE_NAME}/actions/setCoaches`;
export const CLEAR_ERROR = `${MODULE_NAME}/actions/clearError`;