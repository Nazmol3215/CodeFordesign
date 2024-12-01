import React, { useState } from "react";
import CurrencySelector from "./CurrencySelector";
import LanguageSelector from "./LanguageSelector";
import ProductList from "./ProductList";




const FirstFive = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("en");

  // Static exchange rates (for demo)
  const exchangeRates = {
    USD: 1,
    EUR: 0.9,
    BDT: 110,
  };

  // Static translations (for demo)
  const translations = {
    en: { title: "Product List", price: "Price" },
    bn: { title: "পণ্যের তালিকা", price: "মূল্য" },
    fr: { title: "Liste des produits", price: "Prix" },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Multi-Currency & Multi-Language Demo</h1>
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <ProductList
        currency={currency}
        language={language}
        exchangeRates={exchangeRates}
        translations={translations}
      />
    </div>
  );
};

export default FirstFive;
