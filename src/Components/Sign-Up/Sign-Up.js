import React from 'react';

//import FormInput from '../Form-input/Form-Input';
import CustomButton from '../Custom-button/Custom-button';
import{Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase';

import './Sign-Up.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    

    return (
      <div className='sign-up'>
        
        
        <span>Sign up with your email and password</span><br/>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <TextField
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            variant="outlined"
            required
            style={{width:'280px'}}
          /><br/><br/>
          <TextField
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            variant="outlined"
            required
            style={{width:'280px'}}
          /><br/><br/>
          <TextField
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            minLength='6'
            maxLength='8'
            pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number"
            variant="outlined"
            required
            style={{width:'280px'}}
          /><br/><br/>
          <TextField
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            minLength='6'
            maxLength='8'
            pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number"
            variant="outlined"
            required
            style={{width:'280px'}}
          /><br/><br/>
          <CustomButton type='submit' style={{width:'280px'}}>SIGN UP</CustomButton>
          <div>
            <h4>Already have an account?
              <Link to='/signin' > SignIn </Link>
            </h4>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;