import React from 'react';


export default class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

