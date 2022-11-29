import React from "react";
import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import blog from "../asset/Blog.jpg";
import play from "../assets/playbook.png";


const Worklife = () => {

    return(
        <div>

            <Work>
                <WorkHold>

                    {/* <WorkCards> */}

                        <WorkCard>

                            <CardImg src={blog} />
                            <Life>Work Life</Life>
                            <Real>Real-life advice, inspiration, and stories from the  working world today.</Real>
                            <Read href="">Read our blog</Read>
                        </WorkCard>

                        <WorkCard>

                            <CardImg src="/asset/playbook.png" />
                            <Life>Atlassian Team Playbook</Life>
                            <Real>Solve common team challenge with these group exercises.</Real>
                            <Read href="">Check team health</Read>
                        </WorkCard>

                        <WorkCard>

                            <CardImg src="/asset/agile.png" />
                            <Life>The Agile Coach</Life>
                            <Real>Atlassian's no-nonsense guide to  agile development.</Real>
                            <Read href="">Visit our resources</Read>
                        </WorkCard>
                        
                    {/* </WorkCards> */}


                </WorkHold>
            </Work>

        </div>
    )
}

export default Worklife;

const Work = styled.div`
width: 100%;
height: 64vh;
display: flex;
justify-content: center;
align-items: center;
`;

const WorkHold = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

// const WorkCards = styled.div``;

const WorkCard = styled.div`
width: 31%;
height: 87%;
background-color: #eae6ff;
border-radius: 7px;
box-shadow: 0 0 3px black;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

:hover{
    box-shadow: 0 0 6px black;
}
`;

const CardImg = styled.img`
width: 100%;
height: 60%;
`;

const Life = styled.div`
font-size: 25px;
font-weight: 600;
color: #253858;
`;

const Real = styled.div`
font-size: 17x;
text-align: center;
line-height: 22px;
width: 80%;
color: #253858;
font-weight: 600;
`;

const Read = styled.a`
font-size: 16px;
color: blue;
text-decoration: none;
margin-bottom: 30px;
font-weight: 600;
`;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;
