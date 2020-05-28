import React from 'react';
import{Link} from 'react-router-dom';
import FormInput from '../Form-input/Form-Input';
import CustomButton from '../Custom-button/Custom-button';
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
        <h2>I already have an account</h2>
        

        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            id="pass"
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            minlength='6'
            maxlength='8'
            pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
            title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number"
            required
          />
          <div className="buttons">
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google SignIn 
         </CustomButton>
        

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