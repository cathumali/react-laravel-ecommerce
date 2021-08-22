import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_index.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Main from './components/partials/Main';
import Cart from './components/pages/Cart';



function Index() {
    return (<>
        <Router>
            <Switch>
                <Route name="home" exact path="/" render={(props)=>(<DefaultLayout ><Main {...props}/></DefaultLayout>)} />
                <Route name="cart" exact path="/cart" render={(props)=>(<DefaultLayout ><Cart {...props}/></DefaultLayout>)} />
            </Switch>
        </Router>
    </>);
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}