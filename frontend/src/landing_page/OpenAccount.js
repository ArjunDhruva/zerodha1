import React from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
    const navigate = useNavigate();
        
          const handleSignup = () => {
            navigate("/signup");
          };
    return ( 
        <div className='container text-center mb-5'>
            <div className='row p-5'>
                <h1 className='fs-2 mb-3'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&#38;O trades.</p>
                <button onClick={handleSignup}
                    className='mx-auto mt-3 w-25 p-2 btn  fs-5 cta-btn' 
                    style={{backgroundColor:"#387ED8", color:"white", marginBottom:"4rem"}}>
                    Sign up for free
                </button>
            </div>

        </div>
     );
}

export default OpenAccount;