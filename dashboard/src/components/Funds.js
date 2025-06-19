import React, { useState } from 'react';
import './FundsPage.css';

function FundsPage() {
  const [funds, setFunds] = useState({
    availableBalance: 12500.00,
    marginUsed: 3500.00,
    totalBalance: 16000.00,
  });

  const handleAddFunds = () => {
    alert("Redirect to payment gateway (Not implemented)");
  };

  const handleWithdrawFunds = () => {
    alert("Redirect to withdrawal page (Not implemented)");
  };

  return (
    <div className="funds-container">
      <h2>Funds</h2>
      <div className="funds-summary">
        <div className="fund-box">
          <p>Available Balance</p>
          <h3>₹{funds.availableBalance.toFixed(2)}</h3>
        </div>
        <div className="fund-box">
          <p>Margin Used</p>
          <h3>₹{funds.marginUsed.toFixed(2)}</h3>
        </div>
        <div className="fund-box">
          <p>Total Balance</p>
          <h3>₹{funds.totalBalance.toFixed(2)}</h3>
        </div>
      </div>
      <div className="funds-actions">
        <button onClick={handleAddFunds}>Add Funds</button>
        <button onClick={handleWithdrawFunds}>Withdraw</button>
      </div>
    </div>
  );
}

export default FundsPage;
