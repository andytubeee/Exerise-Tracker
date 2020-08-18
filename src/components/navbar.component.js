import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ fontFamily: 'Myriad Pro Regular' }}>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link to='/' className='navbar-brand'>
            Exercise Tracker App
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>
                  Exercise Log
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/create' className='nav-link'>
                  Create New Exercise
                </Link>
              </li>
              <li className='navbar-item'>
                <Link to='/user' className='nav-link'>
                  Create New User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
