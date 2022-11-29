import React from "react";
// import { useRoutes } from "react-router-dom";
import styled from "styled-components"
// import bg  from "../assets/herobg.webp"
import heroImg  from "../asset/homeRight.webp"


const Possible = () => {

    return (
        <div>

            <Pos>

                <PosHold>

                    <PosLeft>
                        <With>It's possible</With>

                        <Work>with teamwork</Work>

                    </PosLeft>

                    <PosRight>
                        <PosRightImg src={heroImg} /> 
                    </PosRight>

                </PosHold>

            </Pos>

            
        </div>
    )
}

export default Possible

const Pos = styled.div`
width: 100%;
height: 70vh;
background-image: url(/asset/herobg.webp);
background-size: contain;
background-position: left;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`;

const PosHold = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const PosLeft = styled.div`
width: 40%;
height: 32%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

const With = styled.div`
font-size: 60px;
color: #253858;
font-weight: 600;
margin-left: -70px;
`;

const Work = styled.div`
font-weight: 600;
font-size: 60px;
color: #253858;
text-align: right;
margin-left: 120px;
`;

// const Pro = styled.div``;

const PosRight = styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;`;

const PosRightImg = styled.img`
width: 100%;
height: 90%;
`;