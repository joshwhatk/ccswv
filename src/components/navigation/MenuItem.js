import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const MenuItem = ({ item }) => {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: 'is-active' } : null
  }

  if (!item.url) {
    return null
  }

  const pageIsRoot = item.url === '/'
  const hasExternalLink = item.urlType === 'externalUrl' && !pageIsRoot

  return (
    <li role="menuitem">
      {hasExternalLink ? (
        <a href={item.url} rel="noopener noreferer">
          {item.title}
        </a>
      ) : (
        <Link to={item.url} getProps={isActive}>
          {item.title}
        </Link>
      )}
    </li>
  )
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pageUrl: PropTypes.string,
    externalUrl: PropTypes.string,
    openInNewTab: PropTypes.bool,
    url: PropTypes.string,
    urlType: PropTypes.string,
  }).isRequired,
}

export default MenuItem
