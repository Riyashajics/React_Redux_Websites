import React from 'react';
import {Link} from "react-router-dom";

const Imagelist=({images})=>{
    return(

        <div>
        {images.map(image => {

            return(
                <div key={image.id}>
                <img src={image.largeImageURL} 
                alt={image.tags}/>
                <Link to={{
                    pathname: `/image/${image.id}`,
                    state:{image}
                }}>
                <button>VIEW</button>
                </Link>
                </div>
            )
        })}
        
        
        </div>

    )
}


export default Imagelist