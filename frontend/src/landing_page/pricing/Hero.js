import React from "react";

function Hero() {
  return (
    
      <div className="text-center m-5 mt-5 text-muted mb-5">
        <h1 className="mt-3 pt-5">Charges</h1>
        <p className="mt-3 mb-2 fs-5">List of all charges and taxes.</p>

        <div className="row text-center text-muted " style={{marginTop: "8rem"}}>
          <div className="col p-0">
            <img src="media\images\pricing0.svg" style={{ width: "40%" }} />
            <h2 className="mb-4">Free equity delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE), <br /> are absolutely
              free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col p-0">
            <img
              src="media\images\intradayTrades.svg"
              style={{ width: "40%" }}
            />
            <h2 className="mb-4">Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col p-0">
            <img src="media\images\pricing0.svg" style={{ width: "40%" }} />
            <h2 className="mb-4">Free direct MF</h2>
            <p>
              All direct mutual fund investments are <br /> absolutely free — ₹
              0 commissions & DP <br />
              charges.
            </p>
          </div>
        </div>
      </div>
    
  );
}

export default Hero;
