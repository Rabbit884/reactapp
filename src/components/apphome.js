import React from 'react';

export default class AppHome extends React.Component {
    render(){

        const style = {
            textAlign: 'center'
        }

        return (
            <div style={style}>
                <h1>React.js Trial</h1>
                <p>
                    JavaScriptの勉強のために作成しています。
                </p>
            </div>
        );
    }
}