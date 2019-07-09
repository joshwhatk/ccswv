import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export const UtilityTemplate = () => {
  return (
    <Helmet>
      <meta http-equiv="refresh" content="2;url=/" />
    </Helmet>
  )
}

const UtilityPage = () => {
  return (
    <Layout>
      <UtilityTemplate />
    </Layout>
  )
}

export default UtilityPage

export const utilityPageQuery = graphql`
  query Utility($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
