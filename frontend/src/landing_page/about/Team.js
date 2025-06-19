import React from 'react';

function Team() {
  return (
    <>
      <div className='row p-3 text-muted lh-lg fs-6 m-0 mt-5'>
          <h1 className='text-center fs-2 mb-5'>People</h1>     
          <div className='col-5 text-center'>
          
              <img className='rounded-circle' style={{width:"60%", borderRadius:"100%"}} src='media\images\nithinKamath.jpg' />
              <br/>
              <h6 className='fs-4'>Nithin Kamath</h6>
              <p>Founder, CEO</p>
          </div>
          <div className='col-7 '>
             <p className=''>
                Nithin Kamath is the Founder of Zerodha in 2010 to overcome the hurdles he<br/>
                faced during his decade long stint as a trader. Today, Zerodha has changed<br/>
                the landscape of the Indian broking industry.<br/>
             </p>
             <p >
                 He is a member of the SEBI Secondary Market Advisory Committee (SMAC) <br/>
                 and the Market Data Advisory Committee (MDAC).
             </p>
             <p className=''>Playing basketball is his zen.</p>
             <p>Connect on &nbsp;
              <a className='text-decoration-none' href='https://yourstory.com/people/nithin-kamath'>Homepage</a> &#47; &nbsp;
              <a className='text-decoration-none' href='https://tradingqna.com/'>TradingQnA</a> &#47; &nbsp;
              <a className='text-decoration-none' href='https://x.com/Nithin0dha?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>Twitter</a></p>
          </div>
      </div>
    </>
  );
}

export default Team;