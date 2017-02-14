import React from 'react';
import {AppBarSimple} from './appbar';
import AppCard from './appcard';
import TableSimple from './table';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <AppBarSimple {...this.props} /><br />
          <AppCard {...this.props} /><br />
          <TableSimple {...this.props} /><br />
        </div>
    );
  }
}
