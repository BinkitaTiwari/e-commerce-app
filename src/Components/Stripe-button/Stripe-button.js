import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../Redux/User/User-selector';


const StripeCheckoutButton = ( props) => { //this function is connected so u have to props here ,sare props aa jeange
  const priceForStripe = props.price * 100;
  const publishableKey = 'pk_test_os77Rbf5AikCrw5cNgB3UQas006oPUYXh6';
  console.log(props)
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };
   
  const handleChange=async(e)=>{
    console.log(e)
    if(props.CurrentUser==null)
    {
      alert("Please SignIn")
      return;
    }
    return ;
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Shopping APP'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ₹${props.price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      //onClick={()=>handleChange()}
      triggerEvent={"onClick"}
    />
  );
};

const mapStateToProps=(state)=>({
  CurrentUser:selectCurrentUser(state)
})



export default connect(mapStateToProps,null)(StripeCheckoutButton);