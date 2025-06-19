import React from 'react';

function RightSection({
        imageURL,
        productName,
        productDescription ,
        learnMore ,
        
    }) {
    return ( 
        <div className='container text-muted lh-lg'>
        <div className='row p-1' style={{marginBottom: "2rem", marginTop:"2rem"}}>
            
            <div className='col-6 ps-5' style={{paddingTop: "7rem"}}>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <div  className='pt-1 mb-4'>
                    <a className='text-decoration-none' href={learnMore}>Learn more &nbsp; 
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                
            </div>

            <div className='col-6 text-center'>
                <img src={imageURL} style={{width:"90%"}} />
            </div>
        </div>
    </div>
     );
}

export default RightSection;