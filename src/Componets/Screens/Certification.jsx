import React from 'react'
import styled from 'styled-components'

import StarImages from '../../assests/Img/starimage.png'

function Certification() {
    return (
    <Certificatecontainer id="main">
            <Wrapper>
                <Cover>
                    <CoverLeft>
                        <img src={require("../../assests/Img/UI_Engineer.jpg")} alt="UIEngineer" />
                    </CoverLeft>
                    <CoverRight>
                        <Card>
                            <CardLeft>
                                <LeftUpper>
                                    <Title>UI Engineer Certification</Title>
                                    <Paragraph>
                                        You have completed your course. Now you
                                        can apply for a certificate.
                                    </Paragraph>
                                    <Content>
                                        <LeftContent>
                                            You have completed your course. Now
                                            you can apply for a certificate.
                                        </LeftContent>
                                        <RightContent>
                                            <UpperContent>
                                                <NUmbers>
                                                    10
                                                    <img
                                                        src={require("../../assests/Img/starimage.png")}
                                                        alt="StarImages"
                                                    />
                                                </NUmbers>
                                            </UpperContent>
                                            <BottomContent>
                                                Total Score
                                            </BottomContent>
                                        </RightContent>
                                    </Content>
                                </LeftUpper>
                                <LeftBottom>
                                    <Left>
                                        <Start>Started</Start>
                                        <StartDate>16 sep 2021</StartDate>
                                    </Left>
                                    <Right>
                                        <End>Completed</End>
                                        <EndDate>1 jan 2022</EndDate>
                                    </Right>
                                </LeftBottom>
                                <BottomButtons>view certificate</BottomButtons>
                            </CardLeft>
                            <CardRight>
                                <RightUpper>
                                    <Star>
                                        <NUmber>
                                            10
                                            <img
                                                src={StarImages}
                                                alt="StarImages"
                                            />
                                        </NUmber>
                                    </Star>
                                    <Total>Total Score</Total>
                                </RightUpper>
                                <BottomButton>view certificate</BottomButton>
                            </CardRight>
                        </Card>
                    </CoverRight>
                </Cover>
            </Wrapper>
        </Certificatecontainer>
    );
}

export default Certification

const Certificatecontainer = styled.div`
    height: 100%;
    background-color: rgb(249, 249, 251);
    padding: 25px;
    transition: all 0.4s ease 0s;

`;
const Wrapper= styled.div`
    transition: all 0.4s ease 0s;


`;
const Cover = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 25px;
  
    border: 1px solid rgb(224, 224, 224);
    border-radius: 9px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 25px;
`;
const CoverLeft = styled.div`
    width: 300px;
    margin-right: 25px;
    border-radius: 5px;
    overflow: hidden;
    /* height: 100%; */
    img {
        display: block;
        width: 100%;
    }
`;
const CoverRight = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: calc(100% - 300px);
    height: 73%;
`;
const Card = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    /* height: 100%; */
    background-color: rgb(249, 249, 251);
    border: 1px solid rgb(224, 224, 224);
    padding: 25px;
    border-radius: 6px;
    position: relative;
`;
const CardLeft = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    /* height: 100%; */
`;
const LeftUpper = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 50px;
  
`;
const Title = styled.h5`
    margin-top: 0px;
    font-size: 15px;
    color: rgb(57, 56, 56);
    font-family: "gordita_medium";
    line-height: 1.3em;
    margin-bottom: 5px;
`;
const Paragraph = styled.div`
    margin-top: 10px;
    font-size: 13px;
    color: rgb(106, 106, 106);
    line-height: 1.3em;
    width: 85%;
`;
const Content = styled.span`
    display: none;

`;
const LeftContent = styled.span`
`;
const RightContent = styled.span`
 
`;
const UpperContent = styled.span`
`;
const NUmbers = styled.span`
  
`;
const BottomButtons = styled.div`
    display: none;
`;
const BottomContent = styled.span`

`;
const LeftBottom = styled.div`
    width: 80%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.3em;
    padding: 5px 10px;
    min-height: 15px;
    border: 2px dashed rgb(16, 167, 112);
    background-color: rgb(231, 255, 246);
    border-radius: 5px;
   
`;
const Left = styled.div`
    display: flex;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 20px;
    width: 50%;
`;
const Start = styled.div`
    font-size: 13px;
    color: rgb(106, 106, 106);
    margin-right: 5px;
    line-height: 1.3em;
`;
const StartDate = styled.div`
    font-size: 13px;
    font-family: "gordita_medium";
    color: rgb(16, 167, 112);
    font-style: italic;
    line-height: 1.3em;
  
`;
const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    -webkit-box-align: flex-end;
    align-items: center;
    width: 50%;
  
`;
const End = styled.div`
    font-size: 13px;
    color: rgb(106, 106, 106);
    margin-right: 5px;
    line-height: 1.3em;
`;
const EndDate = styled.div`
    font-size: 13px;
    font-family: "gordita_medium";
    color: rgb(16, 167, 112);
    font-style: italic;
    line-height: 1.3em;
  
`;
const CardRight = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    /* height: 100%; */
 
`;
const RightUpper = styled.div`
    text-align: center;
    margin-bottom: 15px;
`;
const Star = styled.span`
    width: 20px;
`;
const NUmber = styled.h5`
    font-weight: 700;
    font-size: 35px;
    margin: 8px;
    color: rgb(248, 193, 70);
    margin-right: 5px;
    display: inline-block;
    line-height: 1em;
    width: 30px;
    height: 30px;
    display: flex;
    margin: 20px 0px;
    align-items: center;
    img {
        display: block;
        width: 100%;
        margin-left: 3px;
    }
`;
const Total = styled.div`
    font-size: 13px;

    color: rgb(106, 106, 106);
`;
const BottomButton = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 12px;
    color: rgb(255, 255, 255);
    background-color: rgb(15, 167, 111);
    border-radius: 5px;
    width: 170px;
    height: 40px;
    text-align: center;
    cursor: pointer;
`;