import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Headder from './Headder';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    render() {
        return <div>
            <BrowserRouter>
                <div className = "container">
                    <div className = "navbar">
                        <Headder />
                    </div>
                    <div>
                        <Route exact path="/stream/create" component={StreamCreate} />
                        <Route exact path="/stream/delete" component={StreamDelete} />
                        <Route exact path="/stream/edit" component={StreamEdit} />
                        <Route exact path="/stream/list" component={StreamList} />
                        <Route exact path="/stream/show" component={StreamShow} />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    }
}

export default App;