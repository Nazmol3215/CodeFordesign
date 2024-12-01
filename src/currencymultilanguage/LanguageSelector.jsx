import React from "react";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Select Language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="bn">বাংলা (Bangla)</option>
        <option value="fr">Français (French)</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
