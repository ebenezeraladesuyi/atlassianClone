import React from "react";
// import { useRoutes } from "react-router-dom";
import styled from "styled-components"
import logo from "../asset/logo.webp"
import {  BsSearch } from "react-icons/bs";
import {  RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg"

const Header = () => {

    return (
        <div>

            <Head>

                <HeadHold>

                    <HeadLeft>
                        <Logo src={logo} alt="" />

                        <Pro>Products <RiArrowDropDownLine style={{fontSize:"25px"}}/> </Pro>

                        <Pro>For teams <RiArrowDropDownLine style={{fontSize:"25px"}}/> </Pro>

                        <Pro>Support <RiArrowDropDownLine style={{fontSize:"25px"}}/> </Pro>

                    </HeadLeft>

                    <HeadRight>
                        <Try>Try now</Try>
                        <Buy>Buy now</Buy>
                        <BsSearch style={{fontSize:"17px", color:"#918080"}}/>
                        |
                        <Acc>
                            <CgProfile style={{fontSize:"19px", color:"#918080"}}/>
                            <My>My account <RiArrowDropDownLine style={{fontSize:"25px"}}/> </My>
                        </Acc>
                    </HeadRight>

                </HeadHold>

            </Head>

            
        </div>
    )
}

export default Header

const Head = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;

const HeadHold = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const HeadLeft = styled.div`
width: 48%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.img`
width: 40%;
display: flex;
align-items: center;
margin-bottom: 5px;
`;

const Pro = styled.div`
font-size: 15px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
display: flex;
justify-content: center;
align-items: center;
color: #6f6a6a;
cursor: pointer;
// width: 20%;

:hover{
    background-color: #ddcfcfbc;
    height: 35px;
    // width: 95px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const HeadRight = styled.div`
width: 30%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Try = styled.div`
width: 90px;
height: 34px;
display: flex;
justify-content: center;
align-items: center;
background-color: blue;
border-radius: 4px;
border: none;
color: white;
cursor: pointer;
`;

const Buy = styled.div`
color: blue;
cursor: pointer;
`;

const Acc = styled.div`
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
width: 35%;

:hover{
    background-color: #ddcfcfbc;
    height: 35px;
    border: none;
}
`;

const My = styled.div`
color: blue;
font-weight: 600;
display: flex;
justify-content: space-between;
align-items: center;
`;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;
