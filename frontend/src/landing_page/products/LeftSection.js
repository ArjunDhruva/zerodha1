import React from 'react';

function LeftSection({
    imageURL ,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay ,
    appStore 
}){
return (
    <div className='container text-muted lh-lg'>
        <div className='row p-1' style={{marginBottom: "2rem", marginTop:"2rem"}}>
            <div className='col-6 text-center'>
                <img src={imageURL} className='w-75' />
            </div>
            <div className='col-6 ps-5'>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <div  className='pt-1 mb-4'>
                    <a className='text-decoration-none me-5' href={tryDemo}>Try Demo &nbsp;
                         <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a className='text-decoration-none' href={learnMore}>Learn more &nbsp; 
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                
                <a href={googlePlay} className='me-2'>
                    <img src='media\images\googlePlayBadge.svg' />
                </a>
                <a href={appStore}>
                    <img src='media\images\appstoreBadge.svg' />
                </a>

            </div>
        </div>
    </div>
);
}

export default LeftSection;