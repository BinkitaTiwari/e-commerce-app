import React from 'react';
import { connect } from 'react-redux';
import './checkout.scss';
import {selectCartItems,selectCartTotal} from '../../Redux/Cart/Cart-selectors';
import CheckoutItem from '../../Components/Checkout-item/Checkout-item';
import StripeCheckoutButton from '../../Components/Stripe-button/Stripe-button';

const Checkout =({cartItems,total})=>{
    return(
        <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL:${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
    )
}

const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state),
    total:selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout);