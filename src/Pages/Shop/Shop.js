import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../Components/Collection-overview/Collection-overview';
import CategoryPage from '../Category/Category';

const ShopPage=({match})=> {
    console.log(match);
    return(
    <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path='/shop/:categoryId' component={CategoryPage} />
    
    </div>

    );
}

    

    

export default ShopPage;