import React from 'react';

function Hero() {
    return (  
        <div className='text-center m-5 mt-5 text-muted border-bottom'>
            <h1 className='mt-3 pt-5'>Zerodha Products</h1>
            <p className='mt-3 mb-2 fs-4'>Sleek, modern, and intuitive trading platforms</p>
            <p className='mt-3 pb-5'>
                Check out our &nbsp;
                <a href='' className='text-decoration-none pb-5'>
                    investment offerings &nbsp;
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
                
            </p>
        </div>
    );
}

export default Hero;
