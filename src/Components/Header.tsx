import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import logo from "./Assets/Atlassian-logo.webp";
import ProductsNav from "./ProductsNav";
import Team from "./Team";

const Headers = () => {
  const [show, noSHow] = useState<boolean>(false);
  const [show1, noSHow1] = useState<boolean>(false);
  const [show2, noSHow2] = useState<boolean>(false);

  const toogle = () => {
    noSHow(!show);
    noSHow1(false);
    noSHow2(false);
  };
  const toogle1 = () => {
    noSHow1(!show1);
    noSHow(false);
    noSHow2(false);
  };
  const toogle2 = () => {
    noSHow2(!show2);
    noSHow(false);
    noSHow1(false);
  };

  return (
    <Container>
      <Wrapper>
        <LogoNav>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <Nav>
            <p onClick={toogle}>Products</p>
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Nav>
          {show ? <ProductsNav /> : null}
          <Nav>
            <p onClick={toogle1}>For teams</p>
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Nav>
          {show1 ? (
            <Team Titletext="BY TEAM FUNCTION" products="View all products" />
          ) : null}
          <Nav>
            <p onClick={toogle2}>Support</p>
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Nav>
          {show2 ? <Team Titletext="SUPPORT SERVICES" products="" /> : null}
        </LogoNav>
        <AuthNav>
          <Buttons>
            <Btn bg="#3157d6" color="#fff">
              Try now
            </Btn>
            <Btn bg="#fff" color="#3157d6">
              Buy now
            </Btn>
            <Circle>
              <BsSearch />
            </Circle>
          </Buttons>
          <Auth>
            <Profilerr>
              <Profile>
                <FaUser />
              </Profile>
              <p> My account</p>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </Profilerr>
          </Auth>
        </AuthNav>
      </Wrapper>
    </Container>
  );
};

export default Headers;

const Profilerr = styled.div`
  padding: 0px 10px;
  /* background-color: red; */
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-left: 10px;
    color: #3157d6;
    font-weight: 500;
  }
  span {
    margin-top: 5px;
    margin-left: 5px;
    color: #3157d6;
    font-size: 20px;
  }
`;

const Profile = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c5c9;
  border-radius: 50%;
  color: #fff;
`;

const Container = styled.div`
  width: 100%;
  height: 10vh;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button<{ bg: string; color: string }>`
  padding: 12px 25px;
  background-color: ${(props) => props.bg};
  border-radius: 5px;
  color: ${(props) => props.color};
  border: none;
  font-size: 17x;
  margin-right: 2px;
`;
const LogoNav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const AuthNav = styled.div`
  width: 32vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 10px;
  transition: all ease-in 0.2s;

  font-size: 23px;

  :hover {
    cursor: pointer;
    background-color: #d7d7e030;
  }
`;

const Buttons = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  border-right: 1px solid #0000007b;
`;
const Auth = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  img {
    width: 13vw;
  }
`;
const Nav = styled.div`
  height: 2vh;
  color: #000000b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  font-weight: 500;
  transition: all ease-in 0.2s;

  :hover {
    background-color: #d7d7e030;
    cursor: pointer;
  }
  span {
    margin-top: 5px;
    margin-left: 5px;
  }
`;
