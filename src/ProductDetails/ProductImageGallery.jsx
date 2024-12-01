import React, { useState } from "react";
import jkfhd from "../Images/kfdhgdb.png";
import jkfhd1 from "../Images/goda.png";
import jkfhd2 from "../Images/hoda.png";

const ProductImageGallery = () => {
  const images = [
    jkfhd,
    jkfhd1 ,
    jkfhd2,
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div>
      <img
        src={currentImage}
        alt="Current Product"
        style={{ width: "400px", height: "300px", marginBottom: "10px" }}
      />
      <div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImage(img)}
            style={{
              width: "100px",
              height: "75px",
              marginRight: "10px",
              cursor: "pointer",
              border: currentImage === img ? "2px solid blue" : "1px solid gray",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
