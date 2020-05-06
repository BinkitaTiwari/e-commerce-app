import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './Cart-components.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/Cart-action';
import { selectCartItemsCount } from '../../Redux/Cart/Cart-selectors';


const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
<span className='item-count'>{itemCount}</span>
    </div>
  );

  const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

  const mapStateToProps=(state)=>({
    itemCount:selectCartItemsCount(state)
    /*state.cart.cartItems.reduce((accumulatedQuantity,cartItem) =>
      accumulatedQuantity+cartItem.quantity,0
    )*/

  })

  export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);