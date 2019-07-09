import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import DropdownMenu from './navigation/DropdownMenu'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true)
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true)
  const header = React.createRef()
  const setDesktop = event => {
    setIsMobile(event.sourceCapabilities.firesTouchEvents)
  }
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: 'is-active' } : null
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

  const data = useStaticQuery(graphql`
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
  console.log(data)

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
          <ul className="Navigation-menu dropdown menu align-middle">
            <li className="Navigation-logo Navigation-logo--desktop">
              <Link to="/">
                <figure className="Navigation-logo-image">
                  <img src={logo} alt="Covenant Christian School" />
                </figure>
              </Link>
            </li>
            <li>
              <Link to="/" getProps={isActive}>
                Home
              </Link>
            </li>
            <DropdownMenu
              className="Navigation-submenuWrapper"
              link="/about"
              name="About Us"
              isMobile={isMobile}
              resetHeight={setNavHeight}
            >
              <ul className="menu Navigation-submenu">
                <li role="menuitem">
                  <Link to="/about" getProps={isActive}>
                    About Us
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/statement-of-beliefs" getProps={isActive}>
                    Statement Of Beliefs
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/preschool" getProps={isActive}>
                    Preschool
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/kindergarten" getProps={isActive}>
                    Kindergarten
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/elementary" getProps={isActive}>
                    Elementary
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/middle" getProps={isActive}>
                    Middle
                  </Link>
                </li>
              </ul>
            </DropdownMenu>
            <li>
              <a
                href="https://www.egsnetwork.com/gift2?giftid=18AB29EC0A5449E"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
            <li>
              <Link to="/contact-us" getProps={isActive}>
                Contact Us
              </Link>
            </li>
            <DropdownMenu
              className="Navigation-submenuWrapper ignore-active"
              link="#"
              name="More..."
              isMobile={isMobile}
              resetHeight={setNavHeight}
            >
              <ul className="menu Navigation-submenu">
                <li role="menuitem">
                  <Link to="/local-supporters" getProps={isActive}>
                    Local Supporters
                  </Link>
                </li>
                <li role="menuitem">
                  <Link to="/in-memory" getProps={isActive}>
                    In Memory
                  </Link>
                </li>
                <li role="menuitem">
                  <a
                    href="https://online.factsmgt.com/signin/3D76J"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pay Tuition
                  </a>
                </li>
              </ul>
            </DropdownMenu>
          </ul>
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
