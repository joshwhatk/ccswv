import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

export default class HomePageTemplate {
  propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func
  };

  render({ title, content, contentComponent }) {
    const PageContent = contentComponent || Content;

    return (
      <section className="section section--gradient">
        <div className="grid-container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
