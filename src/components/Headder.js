import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleApi from './GoogleApi';
import '../css/GoogleApi.css';

class Headder extends Component {
    render() {
        return <div className = "full-width">
            <GoogleApi/>
            <Link to="/stream/list"> Streamer </Link> &nbsp;
            <Link to="/"> Home </Link> &nbsp;
            <Link to="/"> Login </Link> &nbsp;
            
        </div>
    }
}

export default Headder;