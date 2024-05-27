import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



    export default function Show({closeQuotes,tagName}) {

        const [tagList,setTaglist] = useState([])
        async function getQuotes () {
        const apiResponse = await axios.get('http://localhost:4000/getQuotes'+tagName);
       setTaglist(apiResponse.data.Quotes)
        }

        useEffect(()=>{
        //   getQuotes();
        },[tagName])
    
    return (
        
        <div>
            <button  onClick={closeQuotes}>close</button>
             <h3>{tagName}</h3>
            {/* {tagList.length > 0 && tagList.map(Quotes => <h1>{Quotes.Quotes}</h1>)} */}
        </div>
      
        
    );
}


