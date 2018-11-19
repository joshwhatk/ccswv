import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import '../scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet titleTemplate="%s | Covenant Christian School" title="Home">
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <main className="Main">{children}</main>
    <Footer />
  </div>
)

export default TemplateWrapper
