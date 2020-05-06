import React from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import CustomButton from '../Custom-button/Custom-button';
import CartItem from '../Cart-item/Cart-item';
import { selectCartItems } from '../../Redux/Cart/Cart-selectors';


import './Cart-dropdown.scss';
import { toggleCartHidden } from '../../Redux/Cart/Cart-action';

const CartDropdown = ({cartItems,history,dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
      { cartItems.length ?(
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      ):(
        <span className="empty-message">Your Cart is Empty</span>
      )}
    
      
    </div>
    <CustomButton onClick={()=>{history.push('/checkout');
                              dispatch(toggleCartHidden())
                              
                        }} >
       CHECKOUT</CustomButton>
    </div>
    
  
);

const mapStateToProps=(state)=>({
  cartItems:selectCartItems(state)

})
/*export const mapDispatchToProps=dispatch=>({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
})*/
export default withRouter(connect(mapStateToProps)(CartDropdown));