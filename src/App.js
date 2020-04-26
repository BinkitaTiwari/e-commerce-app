import React,{Component} from 'react';
import {Switch,Route} from'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInSignUp from './Pages/Sign-In&Sign-Up/Sign-In&Sign-Up';
import {auth,createUserProfileDocument} from './Firebase/Firebase';


class App extends Component {
  state={
    currentUser:null
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
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
