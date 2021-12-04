import React from 'react';
import { generateFetchOptions } from '../functions/generateFetchOptions';

class GetRequest extends React.Component {
    getRequest = async () => {
        const options = {
            method: 'GET',
            authType: this.props.authType,
            token: this.props.token,
            username: this.props.username,
            password: this.props.password
        }

        // console.log(generateFetchOptions(options))
        // const response = await fetch(this.props.url, generateFetchOptions(options))
    }

    render() {
        return (
            <>
                <form>
                    <label>GET</label>
                    <input type="url" onChange={this.props.setURL} />
                </form>
                <button onClick={this.getRequest}>Send</button>
            </>
        );
    }
}

export default GetRequest;
