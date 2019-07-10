import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'

const Navigation = ({ navigation }) => {
  console.log(navigation)
  return navigation.map(menu => <Menu menu={menu} />)
}

Navigation.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        pageUrl: PropTypes.string,
        externalUrl: PropTypes.string,
        openInNewTab: PropTypes.bool,
      }).isRequired
    ).isRequired
  ).isRequired,
}

export default Navigation
