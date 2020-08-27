import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {createStream} from '../../actions'
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    

    onSubmit = (formEle) => {
        this.props.createStream(formEle);
    }


    render() {
        //console.log(this.props);
        
        return <div>
            <h2>Create Stream</h2>
            <StreamForm onSubmit = {this.onSubmit}/>
        </div>
    }
}


export default connect(null, {createStream} )(StreamCreate);