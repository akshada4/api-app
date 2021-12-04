import React from 'react';
import GetRequest from './components/GetRequest';
import RequestHoc from './components/RequestHoc';

const GetRequestComponent = RequestHoc(GetRequest)
class App extends React.Component {
    render() {
    return (
    <div>
        <h1>API</h1>
        <GetRequestComponent />
    </div>)
    }
}

export default App