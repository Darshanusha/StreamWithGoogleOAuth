import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featchStream } from '../../actions';

class StreamShow extends Component {
    componentDidMount() {
        this.props.featchStream(this.props.match.params.id);
    }

    renderDetaails() {
        if(!this.props.stream){
            return <div>Loading..!!</div>
        }
        return (
            <div>
                <div><h1>{this.props.stream.name}</h1></div>
                <div><h4>{this.props.stream.description}</h4></div>
            </div>
        );
    }
    render() {
        return <div>
            <h2>StreamShow</h2>
            {this.renderDetaails()}
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    //return state;
    //console.log("state ", state);
    //console.log("ownProps ", ownProps);
    return { stream: state.streamReducer[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { featchStream })(StreamShow);