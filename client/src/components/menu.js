import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const MenuBar = () => (
  <div className='menuBar'>
      <Dropdown item icon='bars' simple>
        <Dropdown.Menu>
          <Dropdown.Item href='/'>Home</Dropdown.Item>
          <Dropdown.Item href='/dashboard'>My Dashboard</Dropdown.Item>
          <Dropdown.Item href='/resources'>Resources</Dropdown.Item>
          {/* <Dropdown.Item>About</Dropdown.Item> */}
          {/* <Dropdown.Divider />
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item>Share</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
  </div>
)

export default MenuBar;