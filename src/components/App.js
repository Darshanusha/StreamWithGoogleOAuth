import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Headder from './Headder';
import history from '../Histoty';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return <div>
            <Router history = {history}>
                <div className = "container">
                    <div className = "navbar">
                        <Headder />
                    </div>
                    <div>
                        <Route exact path="/stream/create" component={StreamCreate} />
                        <Route exact path="/stream/delete/:id" component={StreamDelete} />
                        <Route exact path="/stream/edit/:id" component={StreamEdit} />
                        <Route exact path="/stream/list" component={StreamList} />
                        <Route exact path="/stream/:id" component={StreamShow} />
                    </div>
                </div>
            </Router>
        </div>
    }
}

export default App;