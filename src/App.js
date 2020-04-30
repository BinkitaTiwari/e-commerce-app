import React,{Component} from 'react';
import {Switch,Route} from'react-router-dom';
import {connect} from 'react-redux';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInSignUp from './Pages/Sign-In&Sign-Up/Sign-In&Sign-Up';
import {auth,createUserProfileDocument} from './Firebase/Firebase';
import {setCurrentUser} from './Redux/User/User.action';


class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
          
              id: snapShot.id,
              ...snapShot.data()
            
          });

          console.log(this.state);
        });
      }

      setCurrentUser({userAuth });
      console.log(setCurrentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){

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
  
}

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
