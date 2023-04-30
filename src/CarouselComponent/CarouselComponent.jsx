import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.css";
function CarouselComponent() {
  return (
    <div>
      <Carousel
        style={{
          height: "50vh",
        }}
      >
        <Carousel.Item
          style={{
            height: "50vh",
          }}
        >
          <img
            className="d-block w-100 img_carousel"
            src="https://static.businessworld.in/article/article_extra_large_image/1471440005_glhpvv_Cleaning_Bhopal_PTI.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Clean India</h3>
            <p>Do your duty; clean your society and make India pretty.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "50vh",
          }}
        >
          <img
            className="d-block w-100 img_carousel"
            src="https://www.firstpost.com/wp-content/uploads/2014/10/01_Swachh-Bharat-Abhiyan1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Green India</h3>
            <p>
              If you dream for developed nation, clean India should be your
              mission.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "50vh",
          }}
        >
          <img
            className="d-block w-100 img_carousel"
            src="https://voiceofguides.com/wp-content/uploads/2020/09/Clean-India_Ramakrishna-Math-and-Ramakrishna-Mission-Belur-Math.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Disease Free India</h3>
            <p>
              Put cleanliness in your priorities, it will keep you away from
              disease.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
