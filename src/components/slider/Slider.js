import React from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Item = styled.img`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
margin-right: -50px;
`;

const H5 =  styled.h5``


const Slider = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];


  return (
    <div className="slider"> 
    <h2>Popular Deals Categories</h2>
    <div className="sliderContainer">
         <Carousel breakPoints={breakPoints} pagination={false} disableArrowsOnEnd={false} enableAutoPlay={true} itemPadding={["20px,30px,25px,50px"]}> 
        {SliderData.map((slide, key) => (
          <div className="slide" key={key}>
          <Item src={slide.image} alt=""/>
          <H5>{slide.name}</H5>
          </div>
        ))}
        </Carousel>
    </div>
        </div>
  );
};

export default Slider;
