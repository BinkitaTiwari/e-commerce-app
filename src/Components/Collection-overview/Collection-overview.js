import React from 'react';
import {connect} from 'react-redux';
import CollectionPreview from '../../Components/Collection-Preview/Collection-Preview';
import {selectCollections} from '../../Redux/Shop/Shop-selector';

import './Collection-overview.scss';

const collectionOverview=({collection})=>(
    <div className="collections-overview">
        {collection.map(({id,...otherSelectedProps })=>(
            <CollectionPreview key={id} {...otherSelectedProps} />
        ))}
    </div>
)

const mapStateToProps=(state)=>({
    collection:selectCollections(state)
})

export default connect(mapStateToProps)(collectionOverview);