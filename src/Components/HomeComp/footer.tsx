import React from "react";
import styled from "styled-components";
import logoo from "../asset/logo.webp";
import { FaRegDotCircle } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {

    return(
        <div>

            <Foot>

                <FootHold1>

                    {/* <FootTop> */}

                        <Prod>
                            <FootImg src={logoo} />
                        </Prod>

                        <Prod>
                            <Soft>PRODUCTS</Soft>

                            <Trello>
                                <Trello1>Jira Software</Trello1>
                                <Trello1>Jira Align</Trello1>
                                <Trello1>Jira Service Management</Trello1>
                                <Trello1>Confluence</Trello1>
                                <Trello1>Trello</Trello1>
                                <Trello1>Bitbucket</Trello1>
                            </Trello>

                            <View>View all products</View>
                        </Prod>

                        <Prod>
                            <Soft>RESOURCES</Soft>

                            <Trello>
                                <Trello1>Technical Support</Trello1>
                                <Trello1>Purchasing & Licensing</Trello1>
                                <Trello1>Atlassian Community</Trello1>
                                <Trello1>Knowledge base</Trello1>
                                <Trello1>Marketplace</Trello1>
                                <Trello1>My Account</Trello1>
                            </Trello>

                            <View>Create support ticket</View>
                        </Prod>

                        <Prod>
                            <Soft>EXPAND & LEARN</Soft>

                            <Trello>
                                <Trello1>Partners</Trello1>
                                <Trello1>Training & Certification</Trello1>
                                <Trello1>Documentation</Trello1>
                                <Trello1>Developer Resources</Trello1>
                                <Trello1>Enterprise Services</Trello1>
                            </Trello>

                            <View>View all resources</View>
                        </Prod>

                        <Prod>
                            <Soft>ABOUT ATLASSIAN</Soft>

                            <Trello>
                                <Trello1>Company</Trello1>
                                <Trello1>Careers</Trello1>
                                <Trello1>Events</Trello1>
                                <Trello1>Blogs</Trello1>
                                <Trello1>Investor Relations</Trello1>
                                <Trello1>Trust & Security</Trello1>
                            </Trello>

                            <View>Contact us</View>
                        </Prod>
                    {/* </FootTop> */}
                   
                </FootHold1>

                    <hr style={{width:"99.5%", border:"1px solid #7484a08a"}} />
                
                
                <FootHold2>

                    <Right>

                        <FootEng style={{width:"12%"}}>
                            <FaRegDotCircle style={{fontSize:"20px"}} />
                            <Word>English</Word>
                            <IoMdArrowDropdown style={{fontSize:"24px"}}  />
                        </FootEng>

                        <FootEng>Privacy policy</FootEng>

                        <FootEng>Terms</FootEng>

                        <FootEng>Modern Slavery Act</FootEng>

                        <FootEng>Impressum</FootEng>

                        <FootEng style={{marginLeft:"30px"}}>Copyright C. 2022 Atlassian</FootEng>

                    </Right>

                    <Socials>
                        <AiFillFacebook />
                        <BsTwitter />
                        <BsLinkedin />
                        <BsYoutube />
                    </Socials>


                </FootHold2>
                
                
            </Foot>

        </div>
    )
}

export default Footer;

const Foot = styled.div`
width: 100%;
height: 55vh;
background-color: #f4f5f7;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const FootHold1 = styled.div`
width: 80%;
height: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Prod = styled.div`
width: 20%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const FootImg = styled.img`
width: 150px;
`;

// const Prod = styled.div``;

const Soft = styled.div`
font-size: 18px;
font-weight: 600;
color: #46536e;
height: 10%;
`;

const Trello = styled.div`
/* width: 20%; */
height: 60%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Trello1 = styled.div`
font-size: 17px;
color: #46536e;
cursor: pointer;
`;

const View = styled.div`
font-size: 17px;
color: blue;
height: 10%;
cursor: pointer;
`;

const FootHold2 = styled.div`
width: 80%;
height: 12%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Right = styled.div`
width: 65%;
display: flex;
justify-content: space-between;
align-items: center;
color: #46536ece;
`;

const FootEng = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

// const Circle = styled.div``;

const Word = styled.div``;

const Socials = styled.div`
width: 11%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 30px;
`;

// const Foot = styled.div``;

// const Foot = styled.div``;

// const Foot = styled.div``;
