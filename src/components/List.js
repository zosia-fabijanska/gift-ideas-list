import React from 'react'
import PropTypes from 'prop-types'

const List = ({ giftList }) => {
  const list = giftList.map(item => (
    <div key={item.id}>{item.text}</div>
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

