import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dfgd1  from '../Images/goda.png';
import dfgd2  from '../Images/uirgredg.png';
import dfgd3  from '../Images/kfdhgdb.png';









// ব্যানার সেকশন কম্পোনেন্ট
const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-content text-center">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover our exclusive products just for you!</p>
        <Button variant="primary" size="lg">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

// প্রোডাক্ট গ্রিড সেকশন
const ProductGrid = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={4}>
        <img src="dfgd1"/>
          <div className="product-card">
            <img src="{dfgd1}" />
            <h5>Product 1</h5>
            <p>$20.00</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="product-card">
            {/* <img src="https://via.placeholder.com/300" alt="product 2" /> */}
            <h5>Product 2</h5>
            <p>$25.00</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="product-card">
            {/* <img src="https://via.placeholder.com/300" alt="product 3" /> */}
            <h5>Product 3</h5>
            <p>$30.00</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// স্লাইডার সেকশন
const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider my-4">
      <Slider {...settings}>
        <div>
          {/* <img src="https://via.placeholder.com/400x300" alt="slider 1" /> */}
        </div>
        <div>
          {/* <img src="https://via.placeholder.com/400x300" alt="slider 2" /> */}
        </div>
        <div>
          {/* <img src="https://via.placeholder.com/400x300" alt="slider 3" /> */}
        </div>
        <div>
          {/* <img src="https://via.placeholder.com/400x300" alt="slider 4" /> */}
        </div>
      </Slider>
    </div>
  );
};

// মূল অ্যাপ কম্পোনেন্ট
const   MainCom = () => {
  return (
    <div>
      {/* রেসপন্সিভ ব্যানার */}
      <BannerSection />

      {/* প্রোডাক্ট গ্রিড */}
      <ProductGrid />

      {/* প্রোডাক্ট স্লাইডার */}
      <ProductSlider />
    </div>
  );
};

export default MainCom;
