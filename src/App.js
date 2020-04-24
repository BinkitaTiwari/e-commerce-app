import React from 'react';
import {Switch,Route} from'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInSignUp from './Pages/Sign-In&Sign-Up/Sign-In&Sign-Up';


function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path ='/' component={Homepage}/>
        <Route path ='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUp} />
        
      </Switch>
    </div>
  );
}

export default App;
