import React from 'react';
import AuthComponent from './AuthComponent';
import BodyComponent from './BodyComponent';

class BodyAuthComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            currentSelection: 'auth'
        }
    }

    setCurrentSelection = (selection) => this.setState({ currentSelection: selection })

    render() {
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "25%",

                    }}
                >
                    <button onClick={() => this.setCurrentSelection('auth')} style={{ padding: "0.5rem"}}>Authorization</button>
                    <button onClick={() => this.setCurrentSelection('body')} style={{ padding: "0.5rem"}}>body</button>
                </div>
                {this.state.currentSelection === 'auth' ?
                    <AuthComponent {...this.props} /> : <BodyComponent {...this.props} />}
            </>
        )

    }
}

export default BodyAuthComponent