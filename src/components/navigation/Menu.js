import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import DropdownMenu from './DropdownMenu'

const Menu = ({ menu, isMobile, setNavHeight }) => {
  const getMenuItems = menu =>
    menu.map((menuItem, key) => <MenuItem item={menuItem} key={key} />)

  if (menu.length === 1) {
    return getMenuItems(menu)
  }

  const firstItem = menu[0]
  return (
    <DropdownMenu
      className="Navigation-submenuWrapper"
      link={firstItem.url}
      name={firstItem.title}
      isMobile={isMobile}
      resetHeight={setNavHeight}
    >
      <ul className="menu Navigation-submenu">{getMenuItems(menu)}</ul>
    </DropdownMenu>
  )
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
  isMobile: PropTypes.bool.isRequired,
  setNavHeight: PropTypes.func.isRequired,
}

export default Menu
