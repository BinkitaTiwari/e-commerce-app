import React from 'react';
import{Link} from 'react-router-dom';
//import FormInput from '../Form-input/Form-Input';
import CustomButton from '../Custom-button/Custom-button';
import TextField from '@material-ui/core/TextField';


import {auth,signInWithGoogle} from '../../Firebase/Firebase';
import './Sign-in.scss';




class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit =async event => {
    event.preventDefault();
    const{email,password}=this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: '', password: '' });
    } catch(error){
      console.log(error);
    }
    
    
    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn><span className='fa fa-google logo'>&nbsp;&nbsp;SIGNIN WITH GOOGLE </span>
         </CustomButton>
          <br/>
      
    
        <span>Sign in with your email and password</span>
        <br/>

        <form onSubmit={this.handleSubmit}>
          <TextField
            
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            label='email'
            
            variant="outlined"
            required
            style={{width:'300px'}}
          /><br/><br/>
          <TextField
            id="pass"
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='password'
           
            variant="outlined"
            minLength='6'
            maxLength='8'
            pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number"
            style={{width:'300px'}}
            required
          /><br/><br/>
          <div className="buttons">
          <CustomButton type='submit' style={{width:'380px'}}> Sign in </CustomButton>
          </div>
          
          <div>
            <h4>Don't have an account?
              <Link to='/signup' > SignUp </Link>
            </h4>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;