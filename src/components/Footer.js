import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="grid-container Footer-copyright">
          &copy; Covenant Christian School {new Date().getFullYear()}.
        </div>
      </footer>
    )
  }
}
