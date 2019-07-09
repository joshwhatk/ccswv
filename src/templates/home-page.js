import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = ({
  title,
  youtubeId,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&iv_load_policy=3&playsinline=1&modestbranding=1&color=white&showinfo=0&origin=https%3A%2F%2Fwww.covenantchristianwv.com`

  return (
    <section className="section">
      <div className="Hero Hero--home">
        <h1 className="Hero-title">{title}</h1>
      </div>
      <div className="container">
        <div className="grid-x">
          <div className="mediumlarge-10 mediumlarge-offset-1">
            <div className="section">
              {youtubeId && (
                <header className="responsive-embed widescreen">
                  <iframe
                    title="CCS Introduction"
                    width="560"
                    height="315"
                    src={src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </header>
              )}
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
  youtubeId: PropTypes.string,
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
        youtubeId={post.frontmatter.youtubeId}
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
        youtubeId
      }
    }
  }
`
