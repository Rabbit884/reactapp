import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton'

export default class AppCard extends React.Component {
  render () {
    return (
      <Card>
        <CardHeader
          title={this.props.square}
        />

        <CardActions>
          <FloatingActionButton onClick={ () => this.props.handleAdd() } >増</FloatingActionButton>
          <FloatingActionButton onClick={ () => this.props.handleCut() } >減</FloatingActionButton>
          </CardActions>
      </Card>
    )
  }
}
