import React,{Component} from 'react';
import {Switch,Route} from'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInSignUp from './Pages/Sign-In&Sign-Up/Sign-In&Sign-Up';
import {auth} from './Firebase/Firebase';


class App extends Component {
  state={
    currentUser:null
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){

    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path ='/' component={Homepage}/>
          <Route path ='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUp} />
          
        </Switch>
      </div>
    );
  }
  
}

export default App;
