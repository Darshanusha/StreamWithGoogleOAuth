import React, { Component } from 'react';
import Modal from '../../Modal';
import history from '../../Histoty';
import { connect } from 'react-redux';
import { deleteStream, featchStream } from '../../actions';

class StreamDelete extends Component {
    actions = (
        <div>
            <button className = "ui button negative" onClick ={()=>this.props.deleteStream(this.props.match.params.id)} >Delete</button>
            <button className = "ui button" onClick = {()=>history.push('/stream/list')} >Cancel</button>
        </div>
    );

    componentDidMount(){
        this.props.featchStream(this.props.match.params.id);
    }
    render() {
        // console.log("id",this.props.match.params.id);
        // console.log("state",this.props);

        return <div >
            Stream Delete
                <Modal title = "Delete" 
                description = {`Are you sure you want to delete ${this.props.stream && this.props.stream.name} ?`}
                actions = {this.actions}
                onDismiss = {()=>history.push('/stream/list')}
                onSuccess = {()=>this.props.deleteStream(this.props.match.params.id)}/>
                
        </div>
    }
}

const mapStateToProps =(state,ownProps)=>{
    return {stream: state.streamReducer[ownProps.match.params.id]};
    //return {id:state.match.params.id};
}


export default connect(mapStateToProps,{deleteStream,featchStream})(StreamDelete);