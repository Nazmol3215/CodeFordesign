import React, { useState } from "react";
import "./ProductCard.css"; // কাস্টম CSS
import denimBlueImage from "../Images/goda.png";
import burgundyImage from "../Images/hoda.png";
import blackImage from "../Images/hoda.png";
import grayImage from "../Images/kfdhgdb.png";
import oliveImage from "../Images/klgnh.png";
import navyImage from "../Images/uirgredg.png";


const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("Denim Blue");

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <img
              src={
                selectedColor === "Denim Blue"
                  ? denimBlueImage
                  : selectedColor === "Burgundy"
                  ? burgundyImage
                  : selectedColor === "Black"
                  ? blackImage
                  : selectedColor === "Gray"
                  ? grayImage
                  : selectedColor === "Olive"
                  ? oliveImage
                  : navyImage
              }
              alt={selectedColor}
              className="card-img-top"
            />
            <div className="card-body text-center">
              <div className="d-flex justify-content-center mb-3">
                <div
                  className={`color-circle1  ${
                    selectedColor === "Denim Blue" ? "active" : ""
                  } bg-primary mx-2`}
                  onClick={() => setSelectedColor("Denim Blue")}
                  title="Denim Blue"
                ></div>
                <div
                  className={`color-circle2 ${
                    selectedColor === "Burgundy" ? "active" : ""
                  } bg-danger mx-2`}
                  onClick={() => setSelectedColor("Burgundy")}
                  title="Burgundy"
                ></div>
                <div
                  className={`color-circle3 ${
                    selectedColor === "Black" ? "active" : ""
                  } bg-dark mx-2`}
                  onClick={() => setSelectedColor("Black")}
                  title="Black"
                ></div>
                <div
                  className={`color-circle4 ${
                    selectedColor === "Gray" ? "active" : ""
                  } bg-secondary mx-2`}
                  onClick={() => setSelectedColor("Gray")}
                  title="Gray"
                ></div>
                <div
                  className={`color-circle5 ${
                    selectedColor === "Olive" ? "active" : ""
                  } bg-success mx-2`}
                  onClick={() => setSelectedColor("Olive")}
                  title="Olive"
                ></div>
                <div
                  className={`color-circle6 ${
                    selectedColor === "Navy" ? "active" : ""
                  } bg-info mx-2`}
                  onClick={() => setSelectedColor("Navy")}
                  title="Navy"
                ></div>
              </div>
              <p className="card-text text-muted">$165.00</p>

              <h5 className="card-title">Garment Washed Pullover Hoodie</h5>
              <p>
                Selected Color: <strong>{selectedColor}</strong>
              </p>
              <a href="#" className="btn btn-outline-primary">
                View Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
