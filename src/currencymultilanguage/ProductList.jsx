import React from "react";

const ProductList = ({ currency, language, exchangeRates, translations }) => {
  // Static product data
  const products = [
    { id: 1, name: { en: "Chair", bn: "চেয়ার", fr: "Chaise" }, priceUSD: 50 },
    { id: 2, name: { en: "Table", bn: "টেবিল", fr: "Table" }, priceUSD: 100 },
    { id: 3, name: { en: "Lamp", bn: "ল্যাম্প", fr: "Lampe" }, priceUSD: 30 },
    { id: 1, name: { en: "Chair", bn: "চেয়ার", fr: "Chaise" }, priceUSD: 50 },
    { id: 2, name: { en: "Table", bn: "টেবিল", fr: "Table" }, priceUSD: 100 },
    { id: 3, name: { en: "Lamp", bn: "ল্যাম্প", fr: "Lampe" }, priceUSD: 30 },
  ];

  const exchangeRate = exchangeRates[currency];
  const translation = translations[language];

  return (
    <div>
      <h2>{translation.title}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <strong>
              {product.name[language]} -{" "}
              {translation.price}: {(product.priceUSD * exchangeRate).toFixed(2)}{" "}
              {currency}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
