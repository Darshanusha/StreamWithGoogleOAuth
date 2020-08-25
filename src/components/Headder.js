import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleApi from './GoogleApi';

class Headder extends Component {
    render() {
        return <div>
            <Link to="/"> Streamer </Link> &nbsp;
            <Link to="/"> Home </Link> &nbsp;
            <Link to="/"> Login </Link> &nbsp;
            <GoogleApi/>
        </div>
    }
}

export default Headder;