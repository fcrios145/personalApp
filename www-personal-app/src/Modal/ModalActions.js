/*
* ACTION TYPES
* */

export const SET_VISIBILITY = 'SET_VISIBILITY'

/*
ACTION CREATORS
 */

export function setVisibility(visibility) {
  return { type: SET_VISIBILITY, visibility }
}