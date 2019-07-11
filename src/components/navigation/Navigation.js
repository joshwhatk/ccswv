import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import logo from '../../img/logo.png'
import Menu from './Menu'

const Navigation = ({ navigation, isMobile, setNavHeight }) => {
  const getPages = () => {
    let {
      allMarkdownRemark: { edges: pages },
    } = useStaticQuery(graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    const reducePagesToTitleAndSlug = page => ({
      title: page.node.frontmatter.title,
      slug: page.node.fields.slug,
    })
    return pages.map(reducePagesToTitleAndSlug)
  }

  const determineMenuItemUrl = menuItem => {
    menuItem.url = null
    menuItem.urlType = null
    if (menuItem.pageUrl) {
      menuItem.url = menuItem.pageUrl
      menuItem.urlType = 'pageUrl'
    }

    if (menuItem.externalUrl) {
      menuItem.url = menuItem.externalUrl
      menuItem.urlType = 'externalUrl'
    }
    return menuItem
  }

  const addSlugToMenuItems = menu => {
    const pages = getPages()
    menu = menu.map(determineMenuItemUrl).map(menuItem => {
      const matchedPage = pages.find(page => menuItem.title === page.title)
      if (!matchedPage) {
        return menuItem
      }

      menuItem.url = matchedPage.slug
      return menuItem
    })

    return menu
  }

  navigation = navigation.map(addSlugToMenuItems)

  return (
    <ul className="Navigation-menu dropdown menu align-middle">
      <li className="Navigation-logo Navigation-logo--desktop">
        <Link to="/">
          <figure className="Navigation-logo-image">
            <img src={logo} alt="Covenant Christian School" />
          </figure>
        </Link>
      </li>
      {navigation.map((menu, key) => (
        <Menu
          menu={menu}
          isMobile={isMobile}
          setNavHeight={setNavHeight}
          key={key}
        />
      ))}
    </ul>
  )
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
  isMobile: PropTypes.bool.isRequired,
  setNavHeight: PropTypes.func.isRequired,
}

export default Navigation
