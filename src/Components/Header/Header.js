import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import { auth } from '../../Firebase/Firebase';
import {connect} from 'react-redux';
import CartIcon from '../Cart-components/Cart-components';
import CartDropdown from '../cart-dropdown/Cart-dropdown';

import './Header.scss';

const Header =({currentUser,hidden}) =>{

    return(
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo"/>
            </Link>
            <div className="options">
                    <Link className="option" to='/shop'>SHOP</Link>
                    <Link className ="option" to='/shop'>CONTACT</Link>
                    {currentUser ? (
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                            ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon/>
            </div>
                   {hidden ? null:
                    <CartDropdown/>  
                   }
                    

        </div>
    )
}

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser,
    hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);