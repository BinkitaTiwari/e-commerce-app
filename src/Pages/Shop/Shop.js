import React,{Component} from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../Components/Collection-Preview/Collection-Preview'

class ShopPage extends Component{

    state={
        collection: SHOP_DATA
    }
    render(){
        const {collection}=this.state;
        return(
            <div className="shop-page">
                {collection.map(({id,...otherSelectedProps })=>(
                    <CollectionPreview key={id} {...otherSelectedProps} />
        ))}
                
            </div>


        )
    }
}

export default ShopPage;