import React,{Component} from 'react';
import {Switch,Route, Redirect} from'react-router-dom';
import {connect} from 'react-redux';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-In&Sign-Up/Sign-In&Sign-Up';
import Checkout from './Pages/Checkout/checkout';
import {auth,createUserProfileDocument} from './Firebase/Firebase';
import {setCurrentUser} from './Redux/User/User.action';
import {selectCurrentUser} from './Redux/User/User-selector';

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

      setCurrentUser(userAuth );
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
          <Route exact path ='/shop' component={ShopPage}/>
          <Route exact path ='/checkout' component={Checkout}/>
          <Route exact path='/signin' render={()=> this.props.CurrentUser? 
              (<Redirect to='/'/>):
              (<SignInAndSignUp/>)
            }/>
          
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps=(state)=>({
  CurrentUser:selectCurrentUser(state)
})




const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
