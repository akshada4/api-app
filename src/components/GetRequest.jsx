import React from 'react';
import { generateOptions } from '../functions/generateOptions';

class GetRequest extends React.Component {
    constructor() {
        super();
        this.state = {
            response: ''
        }
    }
    
    getRequest = async () => {
        const body = {
            method: 'GET',
            authType: this.props.authType,
            token: this.props.token,
            username: this.props.username,
            password: this.props.password,
            url: this.props.url
        }

        const options = generateOptions(body)

        const response = await fetch('http://localhost:3000', options)
            .then(res => res.json())
            .then(data => { return data })
        
        this.setState({
            response: JSON.stringify(response)
        })
        console.log(response)
    }

    render() {
        return (
            <>
                <form>
                    <label>GET</label>
                    <input type="url" onChange={this.props.setURL} />
                </form>
                <button onClick={this.getRequest}>Send</button>
                {this.state.response ? <div>{this.state.response}</div> : null}
            </>
        );
    }
}

export default GetRequest;
