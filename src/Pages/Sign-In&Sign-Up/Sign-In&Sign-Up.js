import React from 'react';

import SignIn from '../../Components/Sign-in/Sign-in';
import SignUp from '../../Components/Sign-Up/Sign-Up';


import './Sign-In&Sign-Up.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp/>
  </div>
);

export default SignInAndSignUpPage;