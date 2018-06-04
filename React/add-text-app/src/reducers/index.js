import { combineReducers } from 'redux'
import { ADD_TEXT, GET_TAGS } from '../actions/index'

const initialState = [
  {
    id: 0,
    text: '一番最初の状態'
  }
]

const text = (state = initialState, action) => {
  switch(action.type){
    case ADD_TEXT:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case GET_TAGS:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
};

export const store = combineReducers(
  {
    storedText: text
  }
)
