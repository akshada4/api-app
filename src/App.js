import React from 'react';
import BodyAuthComponent from './components/BodyAuthComponent';
import { generateOptions } from './functions/generateOptions';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            method: localStorage.getItem('method') || 'GET',
            response: localStorage.getItem('response') || '',
            url: localStorage.getItem('url')  || '',
            authType: localStorage.getItem('authType') || "bearerToken",
            username: localStorage.getItem('username') || '',
            password: localStorage.getItem('password')  || '',
            token: localStorage.getItem('token') || '',
            body: localStorage.getItem('body')  || '',
            contentType: localStorage.getItem('contentType') || 'Application/json'
        }
    }

    setMethod = e => this.setState({ method: e.target.value })
    setURL = e => this.setState({ url: e.target.value })

    getResponse = (options) => {
        return fetch('http://localhost:3000', options)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err)
    }

    onSubmit = async () => {
        const options = generateOptions(this.state)
        const response = await this.getResponse(options)

        this.setState({ response: JSON.stringify(response) })
    }

    populateLocalStorage = () => {
        Object.keys(this.state).forEach(i => localStorage.setItem(i,this.state[i]))
    }

    render() {
        return (
            <>
                <h1>API</h1>
                <div
                    style={{
                        display: "flex",
                        height: "90%",
                        justifyContent: "space-between",
                    }}>

                    <div style={{ flex: "0 0 49%"}}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginBottom: "2rem",
                            }}
                        >
                            <select
                                onChange={this.setMethod}
                                style={{
                                    padding: "0.5rem",
                                    outline: "none",
                                }}
                            >
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                                <option value="PUT">PUT</option>
                                <option value="DELETE">DELETE</option>
                            </select>
                            <div
                                style={{
                                    display: "inline-block",
                                    borderBottom: "1px solid black",
                                    padding: "0.5rem 0 0.25rem 0",
                                }}
                            >
                                <label>URL:</label>
                                <input
                                    onChange={this.setURL}
                                    value={this.state.url}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: "40rem",
                                        fontSize: "1rem",
                                        marginLeft: "0.5rem",
                                    }}
                                />
                            </div>
                            <button
                                onClick={async () => {
                                    await this.onSubmit()
                                    this.populateLocalStorage() }}
                                style={{
                                    padding: "0.5rem"
                                }}
                            >
                                Submit
                            </button>
                        </div>
                        <BodyAuthComponent
                            setAuthType={e => this.setState({ authType: e.target.value })}
                            setToken={e => this.setState({ token: e.target.value })}
                            setUsername={e => this.setState({ username: e.target.value })}
                            setPassword={e => this.setState({ password: e.target.value })}
                            setContentType={e => this.setState({ contentType: e.target.value })}
                            setBody={e => this.setState({ body: e.target.value })}
                            contentType={this.state.contentType}
                            body={this.state.body}
                            username={this.state.username}
                            password={this.state.password}
                            token={this.state.token}
                            authType={this.state.authType}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "0 0 49%",
                        }}>
                            <label style={{ marginBottom: "0.5rem", marginTop: "5rem" }}>Response</label>
                            <textarea value={this.state.response} style={{ resize: "none", height: "100%"}} readOnly />
                    </div>
                </div>
            </>)
    }
}

export default App