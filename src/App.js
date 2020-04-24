import React from 'react';
import {Switch,Route} from'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';
import ShopPage from './Pages/Shop/Shop';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path ='/' component={Homepage}/>
        <Route path ='/shop' component={ShopPage}/>
        
      </Switch>
    </div>
  );
}

export default App;