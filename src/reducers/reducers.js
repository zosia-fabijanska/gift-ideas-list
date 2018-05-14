import { v1 } from 'uuid'
//
import {
  ADD_GIFT,
  REMOVE_GIFT,
} from '../actions/actions'

const gifts = (state = [], action) => {
  switch (action.type) {
    case ADD_GIFT:
      return [
        ...state,
        {
          id: v1(),
          text: action.text,
        }
      ]
    case REMOVE_GIFT:
      return [
        ...state.filter(gift => (gift.text !== action.text))
      ]
    default:
      return state
  }
}

export default gifts

