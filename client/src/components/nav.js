import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu pointing vertical>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Add New Dream'
            active={activeItem === 'Add New Dream'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Past Dreams'
            active={activeItem === 'Past Dreams'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }