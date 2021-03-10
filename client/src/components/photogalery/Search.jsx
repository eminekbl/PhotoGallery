import React from 'react'
import { useParams } from "react-router-dom";
import FetchImage from './FetchImage'

function Search(props) {
    
    const params = useParams();
    const { query } = params;
    
    return (
        <div>
          <FetchImage value={query}/>
          <a id='license' href="https://unsplash.com/license">Read More About Unsplash License</a>
        </div>
    )
}

export default Search
