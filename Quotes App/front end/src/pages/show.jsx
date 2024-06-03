import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

    export default function Show({closeQuotes,tagName}) {

        const [tagList,setTaglist] = useState([])
        async function getQuotes () {
        const apiResponse = await axios.get('http://localhost:4000/getQuotes/'+tagName);
        console.log(apiResponse)
        setTaglist(apiResponse.data.data);
        }

        useEffect(()=>{
          getQuotes();
        },[tagName])
    
    return (
        <>
            <div  className='view1'>
            <button className="button-86" role="button" onClick={closeQuotes}>Back</button>
             <ul class="button-64" role="ul"><span class="text">{tagName}</span></ul>
            {tagList.length > 0 && tagList.map(data => <ul className='view'>{data.Quote}</ul>)}
            </div>

            <ul  className='tags'>
                    <li  className="button-64"><Link to="https://twitter.com/twitter">Twitter</Link></li>
                    <li className="button-64"><Link to="https://www.instagram.com/_joshuaward/">Instagram</Link></li>
                    <li className="button-64"><Link to="https://www.facebook.com/login/">Facebook</Link></li>
                </ul>
                 </>
        
    
        
    );
}


