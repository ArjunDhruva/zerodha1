import React from 'react';

function Footer() {
    return (
        <footer className='border-top bg-light'>
            <div className='container '>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/images/logo.svg' style={{ width: "50%" }} />
                        <p>&#169; 2010 - 2025, not Zerodha Broking Ltd. <br /> All rights reserved.</p>
                        <div className='row fs-5 mb-2 opacity-75'>
                            <div className='col-2 nav-icons'><i class="fa-brands fa-x-twitter"></i></div>
                            <div className='col-2 nav-icons'><i class="fa-brands fa-square-facebook"></i></div>
                            <div className='col-2 nav-icons'><i class="fa-brands fa-instagram"></i></div>
                            <div className='col-2 nav-icons'><i class="fa-brands fa-linkedin"></i></div>
                        </div>
                        <div className='row fs-5 border-top opacity-75'>
                            <div className='col-2 nav-icons mt-2'><i class="fa-brands fa-youtube"></i></div>
                            <div className='col-2 nav-icons mt-2'><i class="fa-brands fa-whatsapp"></i></div>
                            <div className='col-2 nav-icons mt-2'><i class="fa-brands fa-telegram"></i></div>
                        </div>
                    </div>
                    <div className='col'>
                        <p className='fs-5 fw-medium '>Company</p>
                        <a className='text-decoration-none text-reset foot-text' href='/About'>About</a><br />
                        <a className='text-decoration-none text-reset foot-text' href='/Product'>Products</a><br />
                        <a className='text-decoration-none text-reset foot-text' href='/Pricing'>Pricing</a><br />
                        <a className='text-decoration-none text-reset foot-text' href=''>Referral programm</a><br/>
                        <a className='text-decoration-none text-reset foot-text' href=''>Zerodha Cares (CSR)</a><br />
                    </div>
                    <div className='col'>
                        <p className='fs-5 fw-medium '>Support</p>
                        <a className="text-decoration-none text-reset foot-text" href=''>Contact us</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>Support portal</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>Z-Connect blog</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>List of charges</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>Downloads & resources</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>Videos</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>Market overview</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>How to file a complaint?</a><br />
                        <a className="text-decoration-none text-reset foot-text" href=''>Status of your complaints</a><br />
                    </div>
                    <div className='col'>
                        <p className='fs-5 fw-medium'>Account</p>
                        <a className='text-decoration-none text-reset foot-text' href='/Signup'>Open an account</a><br />
                        <a className='text-decoration-none text-reset foot-text' href=''>Fund transfer</a><br />
                    </div>
                </div>
                <div className='text-muted mt-5' style={{ fontSize: "14px" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &#x26;​ MCX &#8208; SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. &#8208; SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 &#8208; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <a>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                        Attention investors: 1&#10099; Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2&#10099; Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3&#10099; Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary &#40;broker, DP, Mutual Fund etc.&#10099;, you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;