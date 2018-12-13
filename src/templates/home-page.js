import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import header from '../img/headers/home.jpg'
import mobileHeader from '../img/headers/home-mobile.jpg'

export const HomePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="Hero Hero--home">
        <h1 className="Hero-title">{title}</h1>
      </div>
      <div className="container">
        <div className="grid-x">
          <div className="mediumlarge-10 mediumlarge-offset-1">
            <div className="section">
              <header className="responsive-embed widescreen">
                <iframe
                  title="CCS Introduction"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Oyw-faxa4Nk?rel=0&iv_load_policy=3&playsinline=1&modestbranding=1&color=white&showinfo=0&origin=https%3A%2F%2Fwww.covenantchristianwv.com"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </header>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

HomePageTemplate.propTypes = HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
