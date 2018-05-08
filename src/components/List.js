import React from 'react'

const List = ({ giftListItems }) => {
  const list = giftListItems.map((item, index) => (
    <div key={index}>{item.label}</div>
  ))

  return (
    <div>
      {list}
    </div>
  )
}

export default List

