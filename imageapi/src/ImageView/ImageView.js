import React from 'react';
import {Link} from 'react-router-dom';

const ImageView=(props)=>{
    const {largeImageURL:image,tags}=props.location.state.image
    return(
        <div>
        <img src={image}
        alt={tags} />
        <button><Link to="/">HOME</Link></button>
        </div>


    )
}

export default ImageView;