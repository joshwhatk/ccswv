import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const MenuItem = ({ item }) => {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: 'is-active' } : null
  }

  console.log(item)
  return <Link />
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pageUrl: PropTypes.string,
    externalUrl: PropTypes.string,
    openInNewTab: PropTypes.bool,
  }).isRequired,
}

export default MenuItem
