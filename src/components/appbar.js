import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const titleName = [
  'Home',
  'Table',
  'Card'
];

class AppBarSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
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
            onTouchTap={this.closeDrawer.bind(this, i)} 
            primaryText={item}
            />
        )
      })

      return (
          <div>
            <AppBar
              title={titleName[this.props.display]}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleTouchTap}
            />

            <Drawer open={this.state.open}>
              {menuItems}
            </Drawer>
          </div>
          )
      }
  }

  export { AppBarSimple }