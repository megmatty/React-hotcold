import React from 'react';

import TopNav from './top-nav';



export default class Header extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <TopNav onNewGame={this.props.onNewGame} />
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};
