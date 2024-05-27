import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Show from './show';
export default function Tags({}){
    const [loading, setLoading] =useState(true); 
    const [tagList, setTaglist] = useState([]);
    const [showQuotes,setshowQuotes] = useState(false);
    const [viewQuotes,setviewQuotes]=useState([null]);
    

    async function getAllTags () {
         const apiResponse = await axios.get('http://localhost:4000/getAllTags');
         console.log(apiResponse);
         setTaglist(apiResponse?.data?.tag || []);
         setLoading(false)
    }

    useEffect(function() {
        getAllTags();
    }, [])

    function handleQuotes(tag){
      setviewQuotes(tag);
      setshowQuotes(true);
    }

    function closeQuotes(){
      setshowQuotes(false);
    }

    useEffect(()=>{
      console.log(viewQuotes);
    },[viewQuotes])
  
    return (
           <>
           <div className='tags'>
             {loading && <div>loading</div>}
             {tagList.length 
             >0 && tagList.map(tag => <button className='tagslist' onClick={() => handleQuotes(tag)} >{tag}</button>)}
            
            {showQuotes && < Show closeQuotes={closeQuotes} tagName={viewQuotes} />}
           </div>
           </>
    );
}




