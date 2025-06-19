import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col p-5'>
                    <img src='/media/images/largestBroker.svg'/>
                </div>
                <div className='col p-5 mt-5'>
                    <h1>Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ milliom Zerodha clients contribute over 15% of all retail order volume in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Community derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col'>
                        <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Govt. security</li>
                            </ul>
                        </div>
                        <img src='\media\images\pressLogos.png' style={{width: "95%"}}/>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default Awards;