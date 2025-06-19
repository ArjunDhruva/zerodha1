import React from 'react';

function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col'>
                    <img src='media\images\education.svg' style={{width: "70%"}}/>
                </div>
                <div className='col my-auto'>
                    <h1 className='fs-2 mb-5'>Free and open market education</h1>
                    <p>
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a className='mb-5' href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-5'>
                    TradingQ&#38;A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&#38;A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

        </div>
     );
}

export default Education;