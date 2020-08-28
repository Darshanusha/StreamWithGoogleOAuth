import React, { Component } from 'react';
import { connect } from 'react-redux';
import { featchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {

    componentDidMount() {
        this.props.featchStreams();
    }

    renderAdmin(obj) {
        if (obj.userId !== null && obj.userId === this.props.currentUserId) {
            return <div>
                <div className="btn btn-danger float-right btn-sm py-0" ><Link to={`/stream/delete/${obj.id}`} className="btn float-right" ><b>Delete</b></Link></div>
                <div className="btn btn-primary float-right btn-sm py-0" ><Link to={`/stream/edit/${obj.id}`} className="btn float-right" ><b>Edit</b></Link></div>
            </div >;
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return <div className="btn float-right btn-outline-success">
                <Link to="/stream/create">Create Stream</Link>
            </div>
        }
    }

    renderStreams = () => {
        return this.props.list.map((obj) => {
            //console.log("Obj ",obj);
            return (
                <div key={obj.id} className="container border rounded">
                    <div>{this.renderAdmin(obj)}</div>
                    <div><b><Link to = {`/stream/${obj.id}`}>{obj.name}</Link></b></div>
                    <div>{obj.description}</div>
                </div>
            );
        })
    }

    render() {
        //console.log(this.props.list);
        return <div>
            {this.renderStreams()}
            {this.renderCreate()}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return { list: Object.values(state.streamReducer), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { featchStreams })(StreamList);