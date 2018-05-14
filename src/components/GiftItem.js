import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListItemBox = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 300px;
  background-color: grey;
  color: white;
  margin-top: 5px;
`

const ListText = styled.p`
  font-weight: 300;
  height: 20px;
  margin-left: 5px;
`

const GiftItem = ({ itemText }) => (
  <ListItemBox>
    <ListText>{itemText}</ListText>
  </ListItemBox>
)

GiftItem.propTypes = {
  itemText: PropTypes.string.isRequired,
}

export default GiftItem

