import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import LinearProgress from 'material-ui/LinearProgress';
import { cyanA200 } from 'material-ui/styles/colors'

import { Link } from 'react-router';

const titleName = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Table',
    link: '/table'
  },
  {
    title: 'Card',
    link: '/card'
  }
];

export default class AppBar_ extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleTouchTap = () => {this.setState({open: !this.state.open})}

  closeDrawer = (x) => {
    this.setState({open: false})
    this.props.setDisplay(x)
  }

  render() {

      const menuItems = titleName.map((item, i) => {
        return (
            <MenuItem
            key={i}
            onTouchTap={this.closeDrawer.bind(this, i)} 
            containerElement={<Link to={item.link} />}
            primaryText={item.title}
            />
        )
      })

      return (
          <div>
            <AppBar
              title={titleName[this.props.home.display].title}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleTouchTap}
            />
            
            <LinearProgress style={this.props.progress} mode="indeterminate" color={cyanA200} />

            <Drawer open={this.state.open}>
              { menuItems }
            </Drawer>

            { this.props.children }
          </div>
          )
      }
  }