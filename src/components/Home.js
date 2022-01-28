import React from "react";
import styled from "styled-components";
// import style from "style-component";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftButtonText="custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftButtonText="custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftButtonText="custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model x"
        description="Order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftButtonText="custom order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest cost soler panels in america"
        description="Money back guarantee"
        backgroundImg="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar for new roops"
        description="Solar Roof costs less then a new room"
        backgroundImg="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description="Solar Roof costs less then a new room"
        backgroundImg="accessories.jpg"
        leftButtonText="shop now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
