import React from 'react'
import PropTypes from 'prop-types'
//
import GiftItem from './GiftItem'

const List = ({ giftList }) => {
  const list = giftList.map(item => (
    <GiftItem
      key={item.id}
      itemText={item.text}
    />
  ))

  return (
    <div>
      {list}
    </div>
  )
}

List.propTypes = {
  giftList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}

export default List

