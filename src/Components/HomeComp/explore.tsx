import React from "react";
import styled  from "styled-components";
import comm from "../asset/Community.webp"

const Community = () => {


    return(
        <div>

            <Exp>

                <ExpHold>
                    <ExpLeft>
                        <Unl>TEAM ESSENTIALS</Unl>

                        <Pot>Explore resources to <br/> unleash the potential<br/>of your team</Pot>
                    </ExpLeft>

                    <ExpRight>

                        {/* <RightBox> */}
                            <RightUp  src={comm} />

                            <RightBott>
                                <Atl>Atlassian Community</Atl>
                                <Glo>Connect globally and meet locally to get more out of our products.</Glo>

                                <Forum>
                                    <Join>Search the forum</Join>
                                    <Join>Join our community</Join>
                                </Forum>
                            </RightBott>
                        {/* </RightBox> */}

                    </ExpRight>

                </ExpHold>

            </Exp>

        </div>
    )
}

export default Community

const Exp = styled.div`
width: 100%;
height: 69vh;
display: flex;
justify-content: center;
align-items: center;
`;

const ExpHold = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const ExpLeft = styled.div`
width: 30%;
height: 35%;
display: flex;
flex-direction: column;
justify-content: space-between;
/* align-items: center; */
`;

const Unl = styled.div`
font-size: 20px;
color: #008da7;
font-weight: 600;
`;

const Pot = styled.div`
color: #253858;
font-size: 30px;
font-weight: 600;
`;

const ExpRight = styled.div`
width: 67%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #ffebe5;
border-radius: 10px;
box-shadow: 0 0 4px black;

:hover{
    box-shadow: 0 0 7px black;
}
`;

// const RightBox = styled.div``;

const RightUp = styled.img`
height: 60%;
width: 100%;
`;

const RightBott = styled.div`
height: 40%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin-bottom: 10px;
`;

const Atl = styled.div`
font-size: 25px;
color: #253858;
font-weight: 600;
`;

const Glo = styled.div`
font-size: 16px;
color: #253858;
`;

const Forum = styled.div`
width: 57%;
display: flex;
justify-content: space-between;
`;

const Join = styled.div`
font-size: 16px;
color: blue;
cursor: pointer;
`;



