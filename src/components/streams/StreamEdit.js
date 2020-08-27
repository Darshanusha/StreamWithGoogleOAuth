import React, { Component } from 'react';
import { connect } from 'react-redux';
import {featchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';
import { formValues } from 'redux-form';

class StreamEdit extends Component{

    componentDidMount(){
        this.props.featchStream(this.props.match.params.id);
    }

    onSubmit = (formVal)=>{
        //console.log(formVal)
        this.props.editStream(this.props.match.params.id,formVal);
    }

    renderEdit = ()=>{
        if(!this.props.stream){
            return <div>Loading..</div>
        }
        return <div><StreamForm initialValues = {{ name: this.props.stream.name, description: this.props.stream.description, userId: this.props.stream.userId }} onSubmit = {this.onSubmit}/></div>;
    }
    render(){
        return <div>
             <h2>Edit Stream</h2>
             {this.renderEdit()}
        </div>
    }
}

const mapStateToProps =(state,ownProps)=>{
    return {stream:state.streamReducer[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{featchStream, editStream})(StreamEdit);