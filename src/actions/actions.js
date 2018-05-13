// actions
export const ADD_GIFT = 'ADD_GIFT'
export const REMOVE_GIFT = 'REMOVE_GIFT'

// action creators

export const addGift = text => ({ type: ADD_GIFT, text })
export const removeGift = text => ({ type: REMOVE_GIFT, text })
