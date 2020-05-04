import React from 'react';
import { connect } from "react-redux";
import CustomButton from '../Custom-button/Custom-button';
import CartItem from '../Cart-item/Cart-item';

import './Cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
    </div>
    
  
);

const mapStateToProps=(state)=>({
  cartItems:state.cart.cartItems

})

export default connect(mapStateToProps)(CartDropdown);