import React from 'react'

export class List extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-medium" id="listBugs"><div className="card">
          <header className="card-header">
            <p className="card-header-title">
              BugId: 634c37bf-9e7f-5630-a7f6-e15e583d350a
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              Radit Gilax
              <span className="tag is-info">low</span>
              <p>Assigned To: qblol</p>
            </div>
            <br/>
              <small className="tag is-primary">Open</small>
            </div>
            <footer className="card-footer">
              <a className="is-warning card-footer-item">Close</a>
              <a className="card-footer-item">Delete</a>
            </footer>
          </div>
          <br/></div>
        </div>
      )}
    }
