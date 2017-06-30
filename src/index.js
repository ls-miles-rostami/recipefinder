import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoriteRecipeList from './components/FavoriteRecipeList';
import rootReducer from './reducers';

import App from './components/App'



const store = createStore(rootReducer)
//One way to simply check what out store looks like just subscribe to it
// store.subscribe(() => console.log('store', store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favorites' component={FavoriteRecipeList} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
