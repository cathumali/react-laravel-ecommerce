import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/_index.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Shop from './components/pages/Shop';
import Featured from './components/pages/Featured';
import Recommended from './components/pages/Recommended';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/index"; 

function Index() {
    return (<>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
          <Switch>
              <Route name="home" exact path="/" render={(props)=>(<DefaultLayout ><Home {...props}/></DefaultLayout>)} />
              <Route name="home" exact path="/shop" render={(props)=>(<DefaultLayout ><Shop {...props}/></DefaultLayout>)} />
              <Route name="home" exact path="/featured" render={(props)=>(<DefaultLayout ><Featured {...props}/></DefaultLayout>)} />
              <Route name="home" exact path="/recommended" render={(props)=>(<DefaultLayout ><Recommended {...props}/></DefaultLayout>)} />
              <Route name="cart" exact path="/cart" render={(props)=>(<DefaultLayout ><Cart {...props}/></DefaultLayout>)} />
              <Route name="cart" exact path="/checkout" render={(props)=>(<DefaultLayout ><Checkout {...props}/></DefaultLayout>)} />
          </Switch>
      </Router>
    </>);
}

export default Index;


const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(rootReducer, enhancer);

if (document.getElementById('index')) {
    ReactDOM.render(
        <>
          <Provider store={store}>
            <BrowserRouter> 
                <Index />
            </BrowserRouter>
          </Provider>
        </>,
        document.getElementById('index')
      );
}
