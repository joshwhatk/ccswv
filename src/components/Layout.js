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
      <meta name="google-site-verification" content="JVgsBPiCrPxli8eNle1dXs_H34mIS0k9CKi6C33WFCY" />
    </Helmet>
    <Navbar />
    <main className="Main">{children}</main>
    <Footer />
  </div>
)

export default TemplateWrapper
