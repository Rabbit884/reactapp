import React from 'react'
import { Link } from 'react-router';

export default class AppError extends React.Component {
  render () {
    return (
      <div>
        <h1>System Error</h1>
        <br />
        <br />
        <Link to={'/'} >Home</Link>
      </div>
    )
  }
}
