import React from 'react';
import Quotes from "../component/quotes";
import Tags from './tags';


export default function Home() {
               

    return (
        <>
        <header className='defaultHero'>
            <div className='banner'>
            <h1>Discover Your Dreams</h1>
            <p>follow your heart's desire.</p>      
            <a className="btn-primary"  href="/Tags">
                Get Quotes.
            </a>
            </div>
        </header>
        <Quotes />
        <Tags />
        
        </>
    );
}


