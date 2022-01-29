import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCar } from "../features/carSlice";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCar);
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            <a key={index} href="">
              {car}
            </a>;
          })}
        {/* <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p> */}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <i class="fas fa-bars"></i>
        </CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)}>
          <i class="fas fa-times"></i>
        </CustomClose>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-transform: uppercase;
    margin-right: 10px;

    font-weight: 600;
  }
`;

const CustomMenu = styled.div`
  display: inline-block;
  cursor-pointer
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 1000 !important;
  list-item: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled.div`
  display: inline-block;
  text-align: right;
  i {
    cursor: pointer;
    font-size: 30px;
    // border: 2px solid gray;
    // padding: 10px;
    // border-radius: 50%;
  }
`;
