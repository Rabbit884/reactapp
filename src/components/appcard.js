import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class AppCard extends React.Component {
    render(){
        return(
            <Card>
                <CardHeader
                title={this.props.square}
                />
                
                <CardActions>
                <FlatButton label="■" onClick={ () => this.props.handleAdd() } />
                <FlatButton label="減" onClick={ () => this.props.handleCut() } />
                </CardActions>
            </Card>
        );
    }
}
