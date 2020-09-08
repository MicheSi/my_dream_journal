import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const MenuBar = () => {
  const loggedIn = localStorage.getItem('token')

  // routes to dashboard or signin based on if user is logged
  const dashboard = () => {
    if (loggedIn) {
      window.location.href='/dashboard'
    }
    else {
      window.location.href='signin'
    }
  }

  // clear token and reroute to home page as sign out
  const signOut = () => {
    localStorage.clear();
    window.location.href='/'
  }

  return(
    <div className='menuBar'>
      <Dropdown item icon='bars' simple>
        <Dropdown.Menu>
          <Dropdown.Item href='/'>Home</Dropdown.Item>
          <Dropdown.Item href='/register'>Register</Dropdown.Item>
          <Dropdown.Item href='/signin'>Sign In</Dropdown.Item>
          <Dropdown.Item onClick={dashboard}>My Dashboard</Dropdown.Item>
          <Dropdown.Item href='/resources'>Resources</Dropdown.Item>
          <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default MenuBar;