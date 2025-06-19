import React from 'react';

function Pricing() {
    return (  
        <div className='container p-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 my-auto'>
                    <div className='row text-center'>
                        <div className='col border p-2'>
                            <h1>&#8377;0</h1>
                            <p >Free equity delivery and direct mutual fund</p>
                        </div>
                        <div className='col border p-2'>
                            <h1>&#8377;20</h1>
                            <p>Free equity delivery and direct mutual fund</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;