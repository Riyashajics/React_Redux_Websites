import React from "react";
import Menu from './menu';
import About from './about';
import Contact from './contact';
import{BrowserRouter,Route,Switch} from 'react-router-dom';


const App=()=>{
  return(
    <BrowserRouter>
    <div>
      <Menu />
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
     
      </div>
      </BrowserRouter>
  );
}
const Home=()=>{
  return(
  <div className="ContactStyle">
    <h2> THIS IS THE HOME PAGE</h2>
    </div>
  )
}
export default App;

