import React from 'react';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'


import './App.css';
import{Provider} from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
    <div className='App'>
    <HooksCakeContainer />
    <CakeContainer />
    <IceCreamContainer />
   
     
    </div>
    </Provider>
  );
}

export default App;
