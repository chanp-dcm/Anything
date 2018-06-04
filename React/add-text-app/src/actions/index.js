export const ADD_TEXT = 'ADD_TEXT'
export const GET_TAGS = 'GET_TAGS'
var textId = 1

export function addText(newText) {
  return {
    type: ADD_TEXT,
    id: textId++,
    text: newText
  };
}

export function getUserTags(tag){
  return {
    type: GET_TAGS,
    id: textId++,
    text: tag
  };
}
