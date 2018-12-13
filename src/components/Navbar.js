import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import DropdownMenu from './navigation/DropdownMenu'
import classnames from 'classnames'

export default class Navbar extends React.Component {
  state = {
    isMobile: true,
    isMobileMenuClosed: true,
  }
  mobileWidth = 768

  header = React.createRef()

  render() {
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
            onClick={this.toggleMenu}
          />
          <div className="title-bar-title">Menu</div>
        </div>
        <QuickLinks className="show-for-mediumlarge" />

        <nav
          className={classnames('Navigation', 'top-bar', 'grid-container', {
            'is-open': this.state.isMobile && !this.state.isMobileMenuClosed,
            'is-closed': this.state.isMobile && this.state.isMobileMenuClosed,
          })}
          id="main-menu"
          ref={this.header}
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
                <Link to="/">Home</Link>
              </li>
              <DropdownMenu
                className="Navigation-submenuWrapper"
                link="/about"
                name="About Us"
                isMobile={this.state.isMobile}
                resetHeight={this.setNavHeight}
              >
                <ul className="menu Navigation-submenu">
                  <li role="menuitem">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/statement-of-beliefs">Statement Of Beliefs</Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/preschool">Preschool</Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/kindergarten">Kindergarten</Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/elementary">Elementary</Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/middle">Middle</Link>
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
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <DropdownMenu
                className="Navigation-submenuWrapper"
                link="/"
                name="More..."
                isMobile={this.state.isMobile}
                resetHeight={this.setNavHeight}
              >
                <ul className="menu Navigation-submenu">
                  <li role="menuitem">
                    <Link to="/local-supporters">Local Supporters</Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/in-memory">In Memory</Link>
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

  componentDidMount() {
    window.addEventListener('mousemove', this.setDesktop, { once: true })
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.setDesktop)
  }

  setDesktop = () => {
    this.setState({ isMobile: false })
  }

  toggleMenu = () => {
    let isMobileMenuClosed = !this.state.isMobileMenuClosed
    this.setState({ isMobileMenuClosed })
    this.setNavHeight()
  }

  setNavHeight = () => {
    let header = this.header.current
    header.style.setProperty('--mobile-nav-height', `${header.scrollHeight}px`)
  }
}

//-- QuickLinks Component
const QuickLinks = ({ className }) => (
  <nav className={classnames('QuickLinks', className)}>
    <ul className="menu">
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/">GradeLink</Link>
      </li>
    </ul>
  </nav>
)
