import React from "react";
import styled from "styled-components";


const Career = () => {

    return(
        <div>

            <Alone>

                <Alonee>
                    <AloneImg src="/asset/careersLeft.png" />
                </Alonee>

                <AloneMid>
                    <Look>CAREERS</Look>

                    <Look1>We can't do it alone</Look1>

                    <Look2>We have an ambitious road ahead, and we're looking for people to join our global team to help shape the future of Atlassian</Look2>

                    <Look3>Join the team</Look3>
                </AloneMid>

                <Alonee>
                    <AloneImg src="/asset/careerRight.png" />
                </Alonee>
                
            </Alone>

        </div>
    )
}

export default Career;

const Alone = styled.div`
width: 100%;
height: 50vh;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Alonee = styled.div`
width: 35%;
height: 100%;
`;

const AloneImg = styled.img`
width: 100%;
height: 100%;
`;

const AloneMid = styled.div`
width: 30%;
height: 65%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Look = styled.div`
font-size: 17px;
color: #253858;
font-weight: 600;
`;

const Look1 = styled.div`
font-size: 42px;
color: #008da6;
font-weight: 600;
`;

const Look2 = styled.div`
font-size: 19px;
color: #253858;
width: 80%;
text-align: center;
line-height: 24px;
`;

const Look3 = styled.div`
cursor: pointer;
color: white;
font-size: 15px;
font-weight: 600;
width: 130px;
height: 40px;
background-color: #0052cc;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;

:hover{
    background-color: #0303b8;
}
`;

// const Alone = styled.div``;
