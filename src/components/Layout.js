import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet titleTemplate="%s | Covenant Christian School" title="Home" />
    <Navbar />
    <div className="Main">{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
