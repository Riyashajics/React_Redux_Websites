import React from 'react';
import {Switch,Route} from "react-router-dom"
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ImageView from './ImageView/ImageView';

const Router=()=>{
return(
    <BrowserRouter>
    <Switch>
    <Route path="/" component={App} exact/>
    <Route path="/image/:id" component={ImageView} />
    </Switch>
    </BrowserRouter>
)
}
export default Router;
