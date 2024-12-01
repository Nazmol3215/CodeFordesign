import React from "react";

const CurrencySelector = ({ currency, setCurrency }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Select Currency: </label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD (US Dollar)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="BDT">BDT (Bangladeshi Taka)</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
