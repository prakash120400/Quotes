import React from 'react';
import Title from './Title';

export default function Quotes(){
    return (
        <section className='quotes'>
            <Title title='Quotes of the day'/>
            <div className='quotes-center'>
                <article className='quotes'>
                    <h6>Marilyn Monroe</h6>
                    <p>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</p>
                </article>
                <article className='quotes'>
                    <h6>Albert Camus</h6>
                    <p>“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”</p>
                </article>
                <article className='quotes'>
                    <h6>William W. Purkey</h6>
                    <p>“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”</p>
                </article>
            </div>
        </section>
    );
}


