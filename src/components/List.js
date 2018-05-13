import React from 'react'

const List = ({ giftList}) => {
  const list = giftList.map(item => (
    <div key={item.id}>{item.text}</div>
  ))

  return (
    <div>
      {list}
    </div>
  )
}

export default List

