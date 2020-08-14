import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';

const MenuBar = () => (
  <div className='menuBar'>
    <Menu attached='top'>
      <Dropdown item icon='bars' simple>
        <Dropdown.Menu>
          <Link to='/'><Dropdown.Item>Home</Dropdown.Item></Link>
          <Link to='dashboard'><Dropdown.Item>My Dashboard</Dropdown.Item></Link>
          <Link to='resources'><Dropdown.Item>Resources</Dropdown.Item></Link>
          {/* <Dropdown.Item>About</Dropdown.Item> */}
          {/* <Dropdown.Divider />
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item>Share</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
)

export default MenuBar;