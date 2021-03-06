import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import '../css/GoogleApi.css';

class GoogleApi extends Component{
    state = {isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2',()=>window.gapi.client.init({
            clientId: '842189857123-tveuka9eiv1ilmich42hnpqokljrkhn2.apps.googleusercontent.com',
            scope: 'email'
        }).then(()=>{
            this.auth2 = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth2.isSignedIn.get());
            this.auth2.isSignedIn.listen(this.onAuthChange);
        }));
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth2.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }
    
    loadSigninValue=()=>{
        //console.log("GoogleApi props ",this.props);
        if(this.props.auth.isSignedIn === null){
            return null;
        }
        if(this.props.auth.isSignedIn){
            console.log(this.props);
            return <button onClick = {()=>this.auth2.signOut()} className = "btn btn-danger float-right">
                 Sign Out
            </button>
        }
        return <button onClick = {()=>this.auth2.signIn()} className = "btn btn-danger float-right">
                Sign In with Google
            </button>
    }

    render(){
        return <div className = "full-width">
            {this.loadSigninValue()}
        </div>
    }
}

const mapStateToProps = (state)=>{
    //console.log("state",state)
    return {auth: state.auth, userId: state.auth.userId}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleApi);