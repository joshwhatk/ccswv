import React from 'react'
import Layout from '../components/Layout'

export default class CalendarPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="grid-container">
            <div className="content">
              <h1>Our Calendar</h1>
              <div className="responsive-embed">
                <iframe
                  style={{ border: 0 }}
                  title="calendar-of-events"
                  width="800"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  src="https://secure-mvc.gradelink.com:443/Calendar/PublicCalendar?SchoolID=612&CalendarId=E2ED69AF-D3BE-4F7A-AA08-4BAD6C73DB69"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
