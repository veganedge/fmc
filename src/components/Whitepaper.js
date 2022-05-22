import React from 'react';

const Whitepaper = () => {
    return(
        <div id='whitepaper'>
            <h1 style={{textAlign: 'center'}}>Content: Whitepaper</h1>
            <p style={{textAlign: 'center', marginBottom: 25}}>Basics of whitepaper along with link to it</p>
            <button className='whitepaper-btn'>
                <a href="https://furusmintclub.gitbook.io/fmc-genesis-whitepaper/" target="_blank" rel="noreferrer noopener">Read the whitepaper</a>
            </button>
        </div>
    );
}

export default Whitepaper;