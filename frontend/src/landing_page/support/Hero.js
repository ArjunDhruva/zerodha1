import React from 'react';

function Herom() {
    return ( 
        <div className=' text-light' style={{backgroundColor: "#387ED8", paddingBottom:"5rem"}}>
            <div className='row ps-5'>
                <div className='col-7 p-4'>
                    <h1 className='fs-4 p-4'>Support Portal</h1>
                    <h2 className='fs-4 p-4'>Search for an answer or browse help topics to create a ticket</h2>
                    
                    <div class="input-group  ps-4 pb-3">
                       <input
                           className='form-control'
                           style={{width:"38rem", height: "3.5rem", borderRadius: "0"}}
                           placeholder='Eg: How do I activate F&O, why is my order getting rejected ...'
                       />
                       <span class="input-group-text rounded-0"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>

                    <div className='row ps-4'>
                        <div className='col text-decoration-underline link-offset-3'>
                            <a href='' className='text-reset text-decoration-none '>Track account opening</a>
                        </div>
                         <div className='col text-decoration-underline link-offset-3'>
                            <a href='' className='text-reset text-decoration-none'> Track segment activation</a>
                        </div>
                        <div className='col text-decoration-underline link-offset-3'>
                            <a href='' className='text-reset text-decoration-none'>Intraday margins</a>
                        </div>
                    </div>
                    <div className='row ps-4 pt-3'>
                        <div className='col-4 text-decoration-underline link-offset-3'>
                            <a href='' className='text-reset text-decoration-none '>Kite user manual</a>
                        </div>
                    </div>

                </div>
                <div className='col-5' style={{paddingTop:"9rem"}}>
                    <h2 className='fs-4 p-4'>Featured</h2>
                    <ol className='text-decoration-underline  ' style={{paddingLeft:"4rem"}}>
                        <li className='mb-3'>
                            <a href='' className='text-decoration-none text-reset'>Suspension of trading - IDFC Limited</a>
                        </li>
                        <li>
                            <a href='' className='text-decoration-none text-reset'>Rights Entitlements listing in October 2024 </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Herom;