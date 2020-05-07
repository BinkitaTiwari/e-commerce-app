import React from 'react';
import './Directory.scss';
import Menu from '../Menu-item/Menu-item';
import {connect} from 'react-redux';
import {selectDirectorySection} from '../../Redux/Directory/Directory-selector';

const Directory=({sections})=> {
    console.log(sections)
    return(
  <div className='directory-menu'>
    {sections.map(({ title, imageUrl, id, size,linkUrl}) => (
      <Menu key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        
      ))}
        
    </div>
    )

                
    }

const mapStateToProps= (state)=>({
  sections:selectDirectorySection(state)

})

export default connect(mapStateToProps)(Directory);