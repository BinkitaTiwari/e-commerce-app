import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './Cart-components.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/Cart-action';


const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
      <span className='item-count'>0</span>
    </div>
  );

  const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

  export default connect(null,mapDispatchToProps)(CartIcon);