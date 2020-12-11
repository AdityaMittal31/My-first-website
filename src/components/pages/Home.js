import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 500, itemsToShow: 1 },
 
];

function Home() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
      <h1 style={{ textAlign: "center" }}>Welcome to my Website</h1>
     <br></br>
     <br></br>
     <br></br>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img className="Home"  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000&h=1000"/>
          </Item>
          <Item>
          <img src="https://expertphotography.com/wp-content/uploads/2018/07/nature-photography.jpg"/>
          </Item>
          <Item>
            <img src="https://wallpapercave.com/wp/wp2634222.jpg"/>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default Home