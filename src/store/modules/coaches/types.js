const MODULE_NAME = 'coaches';

export const GET_COACHES = `${MODULE_NAME}/getters/getCoaches`;
export const HAS_COACHES = `${MODULE_NAME}/getters/hasCoaches`;
export const IS_USER_ON_COACH_LIST = `${MODULE_NAME}/getters/isUserOnCoachList`;
export const GET_SELECTED_COACH = `${MODULE_NAME}/getters/getSelectedCoach`;
export const MUTATE_SELECT_COACH_ID = `${MODULE_NAME}/mutations/mutateSetSelectedCoachId`;
export const MUTATE_ADD_COACH = `${MODULE_NAME}/mutations/mutateAddCoach`;
export const SELECT_COACH_ID = `${MODULE_NAME}/actions/selectCoachId`;
export const ADD_COACH = `${MODULE_NAME}/actions/addCoach`;