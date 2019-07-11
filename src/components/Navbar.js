import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation/Navigation'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true)
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true)
  const header = React.createRef()
  const setDesktop = event => {
    setIsMobile(event.sourceCapabilities.firesTouchEvents)
  }
  const setNavHeight = () => {
    let navHeader = header.current
    navHeader.style.setProperty(
      '--mobile-nav-height',
      `${navHeader.scrollHeight}px`
    )
  }
  const toggleMenu = () => {
    const toggledMenuValue = !isMobileMenuClosed
    setIsMobileMenuClosed(toggledMenuValue)
    setNavHeight()
  }

  useEffect(() => {
    window.addEventListener('mousemove', setDesktop, { once: true })

    return () => {
      window.removeEventListener('mousemove', setDesktop)
    }
  })

  const {
    markdownRemark: {
      frontmatter: { navigation },
    },
  } = useStaticQuery(graphql`
    query NavigationQuery {
      markdownRemark(frontmatter: { title: { eq: "navigation" } }) {
        id
        frontmatter {
          title
          navigation {
            menu {
              title
              pageUrl
              externalUrl
              openInNewTab
            }
          }
        }
      }
    }
  `)
  const menuItems = navigation.map(item => {
    return item.menu
  })

  return (
    <header className="HeaderNavigation">
      <div
        className="title-bar hide-for-mediumlarge"
        data-responsive-toggle="main-menu"
        data-hide-for="mediumlarge"
      >
        <button
          className="menu-icon"
          type="button"
          data-toggle="main-menu"
          onClick={toggleMenu}
        />
        <div className="title-bar-title">Menu</div>
      </div>
      <QuickLinks className="show-for-mediumlarge" />

      <nav
        className={classnames('Navigation', 'top-bar', 'grid-container', {
          'is-open': isMobile && !isMobileMenuClosed,
          'is-closed': isMobile && isMobileMenuClosed,
        })}
        id="main-menu"
        ref={header}
      >
        <div className="top-bar-left">
          <Navigation
            navigation={menuItems}
            isMobile={isMobile}
            setNavHeight={setNavHeight}
          />
        </div>
        <QuickLinks className="hide-for-mediumlarge" />
        <div className="top-bar-right">
          <a
            href="tel:304-292-6050"
            className="button primary hollow hide-for-mediumlarge"
          >
            Schedule a Tour
          </a>
          <a
            href="mailto:dcfriend@me.com?subject=I would like to schedule a tour of Covenant"
            className="button primary hollow show-for-mediumlarge"
          >
            Schedule a Tour
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

//-- QuickLinks Component
const QuickLinks = ({ className }) => (
  <nav className={classnames('QuickLinks', className)}>
    <ul className="menu">
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <a href="https://secure.gradelink.com/gradelink">GradeLink</a>
      </li>
    </ul>
  </nav>
)
