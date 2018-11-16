import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer-copyright">
          &copy; Copyright Covenant Christian School {new Date().getFullYear()}.
        </div>
      </footer>
    );
  }
}
