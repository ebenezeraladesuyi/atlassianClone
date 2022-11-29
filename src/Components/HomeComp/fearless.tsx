import React from "react";
import styled from "styled-components";


const Fearless = () => {

    return(
        <div>

            <Fear>
                <FearHold>

                   <Events>
                       <Event>EVENTS</Event>

                    <Hear>Hear from today's <br/> fearless builders and <br/> innovators</Hear>

                    <Learn>Learn more</Learn>

                   </Events>

                   <High>
                       <Vel src="/asset/HighVelocity.jpg"/>
                   </High>

                   <High>
                        <Vel src="/asset/worklifeDemand.png"/>
                   </High>




                </FearHold>
            </Fear>

        </div>
    )
}

export default Fearless;

const Fear = styled.div`
width: 100%;
height: 61vh;
display: flex;
justify-content: center;
align-items: center;
`;

const FearHold = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Events = styled.div`
width: 31%;
height:53%;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Event = styled.div`
font-size: 19px;
color: #027386;
font-weight: 600;
`;

const Hear = styled.div`
font-size: 36px;
color: #253858;
font-weight: 600;
line-height: 48px;
`;

const Learn = styled.div`
font-size: 17px;
color: blue;
cursor: pointer;
`;

const High = styled.div`
width: 31%;
height: 87%;
`;

const Vel = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
`;

// const Every = styled.div``;
