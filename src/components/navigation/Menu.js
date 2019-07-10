import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const Menu = ({ menu }) => {
  console.log(menu)
  return menu.map(menuItem => <MenuItem item={menuItem} />)
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      pageUrl: PropTypes.string,
      externalUrl: PropTypes.string,
      openInNewTab: PropTypes.bool,
    }).isRequired
  ).isRequired,
}

export default Menu
