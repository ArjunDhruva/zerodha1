import React from 'react';
import { useNavigate } from "react-router-dom";

function Universe() {
    const navigate = useNavigate();
    
      const handleSignup = () => {
        navigate("/signup");
      };
    
    return (
        <div className='container text-center text-muted mt-5'>
            <h2>The Zerodha Universe</h2>
            <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            <br/> <br/>
            <div className='row mb-5' style={{fontSize: "14px"}}>
                <div className='col text-center'>
                    <img src='media\images\zerodhaFundhouse.png' alt="Zerodha logo" style={{ width: "50%", marginBottom: "1rem" }} />
                    <p className=''>
                        Our asset management venture <br />
                        that is creating simple and transparent index<br />
                        funds to help you save for your goals.<br />
                    </p>
                </div>

                <div className='col'>
                    <img src='media\images\sensibullLogo.svg' alt="sensibull logo" style={{ width: "50%", marginBottom: "1.5rem" }} />
                    <p className='mt-1'>
                        Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more. <br />
                    </p>
                </div>

                <div className='col'>
                    <img src='media\images\goldenpiLogo.png' alt="golden logo" style={{ width: "50%", marginBottom: "1rem" }} />
                    <p>
                        Investment research platform <br />
                        that offers detailed insights on stocks, <br />
                        sectors, supply chains, and more. <br />

                    </p>
                </div>
            </div>

            <div className='row ' style={{fontSize: "14px"}}>
                <div className='col'>
                    <img src='media\images\streakLogo.png' alt="streak logo"style={{ width: "50%", marginBottom: "1rem" }} />
                    <p>
                        Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding. <br />
                    </p>
                </div>

                <div className='col'>
                    <img src='media\images\smallcaseLogo.png' alt="smallcase logo" style={{ width: "50%", marginBottom: "1.25rem" }} />
                    <p>
                        Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs. <br />
                    </p>
                </div>

                <div className='col'>
                    <img src='media\images\dittoLogo.png' alt="ditto logo" style={{ width: "38%", marginBottom: "1rem" }} />
                    <p>
                        Personalized advice on life <br />
                        and health insurance. No spam <br />
                        and no mis-selling. <br />
                    </p>
                </div>


            </div>
            <button onClick={handleSignup}
                className='mx-auto mt-3 w-25 p-2 btn  fs-5 cta-btn' 
                style={{backgroundColor:"#387ED8", color:"white", marginBottom:"4rem"}}
                >Sign up for free
            </button>
        </div>
    );
};


export default Universe;