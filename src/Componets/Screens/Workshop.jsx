import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import MainImage from "../../assests/Img/practiceImage.svg";
import SideImage from "../../assests/Img/practiceSideImage.jpg";
import Books from "../../assests/Img/books.png";
import Locks from "../../assests/Img/lock.svg";
import LessonImage from "../../assests/Img/lessonImage.jpg";
import StarImages from "../../assests/Img/starimage.png";
import topicimage from "../../assests/Img/caching_post_page.png";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import ClipConiner from "react-spinners/ClipLoader";

function Workshop() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const access = "r7aHyPh69GLonqSdk3pFfkiDrtVJ0I";
    useEffect(() => {
        axios
            .get(
                "https://learn.steyp.com/api/v1/workshops/completed-workshops/tech-schooling/?response_length=3",
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                }
            )
            .then((res) => {
                setData(res.data.data);
                console.log("hi", res);
                setLoading(true);
            });
    }, []);
    const [newData, setnewData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://learn.steyp.com/api/v1/workshops/upcoming-workshops/tech-schooling/",
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                }
            )
            .then((res) => {
                setnewData(res.data.data[0]);
                console.log("qwerrdfgdfgdfgtt res", res);
            });
    }, []);

    return (
        <Practicecontainer id="main">
            <Wrapper>
                <LeftContainer>
                    <Top>
                        <Title>Your Next Workshop</Title>
                        <ContentDiv>
                            <ContentImgDiv>
                                <img
                                    src={
                                        require("../../assests/Img/practiceImage.svg")
                                            .default
                                    }
                                    alt="practiceImage"
                                />
                            </ContentImgDiv>
                            <ContentSubDiv>
                                <Heading>There are no Workshops active</Heading>
                                <Paragraph>
                                    Currently, you have no Workshops to attend.
                                    Please go to your next activity to unlock
                                    more practices.
                                </Paragraph>
                                <Button to="/dashboard">
                                    Go to learn dashboard
                                </Button>
                            </ContentSubDiv>
                        </ContentDiv>
                    </Top>

                    <LeftBottom>
                        <SubTitle>Upcoming Workshops</SubTitle>
                        <Cover>
                            <Card>
                                <CardLeft>
                                    <img src={newData.image} alt="SideImage" />
                                </CardLeft>
                                <CardRight>
                                    <CardUpper>
                                        <Number># 1</Number> |{newData.title}
                                    </CardUpper>
                                    <CardBottom>
                                        <Book>
                                            <img
                                                src={newData.image}
                                                alt="Side"
                                            />
                                        </Book>
                                        <Description></Description>
                                    </CardBottom>
                                </CardRight>
                                <Lock>
                                    <img src={Locks} alt="" />
                                </Lock>
                            </Card>
                        </Cover>
                    </LeftBottom>
                </LeftContainer>

                <Rightsession>
                    <RightSub>
                        <RightTop>
                            <Headings>Attended Workshops</Headings>
                            <View>View All</View>
                        </RightTop>
                        {loading ? (
                            <Covers>
                                {data.map((item) => (
                                    <Cards key={item.id}>
                                        <CardsLeft>
                                            <CardsImage>
                                                <img
                                                    src={item.image}
                                                    alt="LessonImage"
                                                />
                                            </CardsImage>
                                        </CardsLeft>
                                        <CardsRight>
                                            <ContentsDiv>
                                                <NumberDiv>#1</NumberDiv>
                                                <Lessons>{item.title}</Lessons>
                                            </ContentsDiv>
                                            <Bottomdiv>
                                                <Skilldiv>
                                                    <Skillicon
                                                        src={require("../../assests/Img/books.png")}
                                                    />
                                                    <Skillcount>
                                                        {item.designation}
                                                    </Skillcount>
                                                </Skilldiv>
                                                <Timediv>
                                                    <Timeicon
                                                        src={require("../../assests/Img/wall-clock.png")}
                                                        alt="clock"
                                                    />
                                                    <Time>56 hrs,5 mins</Time>
                                                </Timediv>
                                            </Bottomdiv>
                                        </CardsRight>
                                    </Cards>
                                ))}
                            </Covers>
                        ) : (
                            <ClipConiner>
                                <HashLoader
                                    color={"#446692"}
                                    loading={loading}
                                    size={50}
                                />
                            </ClipConiner>
                        )}
                    </RightSub>
                </Rightsession>
            </Wrapper>
        </Practicecontainer>
    );
}

export default Workshop;

const Practicecontainer = styled.section``;
const Wrapper = styled.section`
    width: 95%;
    margin: 0 auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
`;
const LeftContainer = styled.div`
    width: 48%;
`;
const Top = styled.div``;
const Title = styled.h2`
    font-size: 20px;
    color: rgb(24, 72, 76);
    margin-top: 30px;
`;
const ContentDiv = styled.div`
    text-align: center;
    padding: 30px 0px;
    border-radius: 5px;
`;
const ContentImgDiv = styled.div`
    margin: 0 auto;
    img {
        display: block;
        width: 100%;
    }
`;
const ContentSubDiv = styled.div``;
const Heading = styled.h3`
    font-size: 20px;
    font-family: "gordita_medium";
    margin-bottom: 8px;
`;
const Paragraph = styled.p`
    margin: 0px auto 15px;
    max-width: 80%;
    color: rgb(116, 116, 116);
    font-size: 14px;
`;
const Button = styled(Link)`
    display: inline-block;
    background-color: rgb(10, 129, 251);
    padding: 15px 25px;
    color: rgb(255, 255, 255);
    border-radius: 10px;
    font-size: 14px;
`;

const LeftBottom = styled.div`
    margin-top: 30px;
    width: 100%;
`;
const SubTitle = styled.h2`
    font-size: 20px;
    color: rgb(24, 72, 76);
`;
const Cover = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Card = styled.div`
    position: relative;
    background-color: rgb(247, 247, 247);
    padding: 20px 10px 20px 20px;
    border-radius: 10px;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    margin-top: 14px;
    opacity: 0.5;
    cursor: not-allowed;
`;
const CardLeft = styled.div`
    margin-right: 20px;
    width: 40%;
    min-width: 200px;
    border-radius: 5px;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
    }
`;
const CardRight = styled.div`
    width: 60%;
`;
const CardUpper = styled.h3`
    font-size: 14px;
    max-width: 100%;
`;
const Number = styled.span`
    display: inline-block;
    color: rgb(65, 174, 118);
`;
const CardBottom = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 20px;
`;
const Book = styled.div`
    display: inline-block;
    color: rgb(168, 168, 168);
    margin-right: 5px;
    max-width: 15px;
    img {
        display: block;
        width: 100%;
    }
`;
const Description = styled.div`
    display: block;
    color: rgb(168, 168, 168);
    font-size: 13px;
`;
const Lock = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 22px;
    img {
        display: block;
        width: 100%;
    }
`;

const Rightsession = styled.div`
    width: 50%;
`;
const RightSub = styled.div`
    background-color: rgb(250, 250, 250);
    padding: 23px 20px;
    margin-top: 20px;
`;
const RightTop = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 10px;
`;
const Headings = styled.div`
    color: rgb(30, 78, 82);
    font-size: 20px;
`;
const View = styled.div`
    color: rgb(33, 150, 243);
    font-size: 16px;
`;
const Covers = styled.div`
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 7px;
`;
const Cards = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px 10px 20px 20px;
    border-radius: 7px;
    background-color: rgb(255, 255, 255);
`;
const CardsLeft = styled.div`
    position: relative;
    width: 40%;
    border-radius: 6px;
    overflow: hidden;
`;
const CardsImage = styled.div`
    width: 100%;
    img {
        display: block;
        width: 100%;
    }
`;
const Spans = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    padding: 5px 15px 3px;
    background-color: rgb(219, 201, 0);
    color: rgb(255, 255, 255);
    font-size: 12px;
    border-radius: 30px;
    -webkit-box-align: center;
    align-items: center;
`;
const StarImage = styled.div`
    display: inline-block;
    margin-right: 2px;
    transform: translateY(-3px);
    max-width: 15px;
    img {
        display: block;
        width: 100%;
    }
`;
const CardsRight = styled.div`
    width: 68%;
    margin-left: 10px;
`;
const ContentsDiv = styled.div`
    font-size: 14px;
    max-width: 100%;
    line-height: 20px;
    display: flex;
`;
const NumberDiv = styled.div`
    display: block;
    color: rgb(65, 174, 118);
    font-size: 20px;
    margin-bottom: 5px;
`;
const Lessons = styled.div`
    line-height: 20px;
    font-size: 20px;
    margin-left: 10px;
`;
const Bottomdiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 66%;

    margin-top: 10px;
`;
const Skilldiv = styled.div`
    display: flex;
    align-items: center;
`;
const Skillicon = styled.img`
    width: 100px;
    display: block;
    display: block;
    width: 13px;
    height: 13px;
    color: green;
    color: rgb(76, 175, 80);
    font-size: 20px;
    margin-right: 6px;
`;
const Skillcount = styled.span`
    color: rgb(153, 153, 153);
    font-size: 12px;
`;
const Timediv = styled.div`
    display: flex;
    align-items: center;
`;
const Timeicon = styled.img`
    display: block;
    width: 13px;
    height: 13px;
    color: green;
    color: rgb(76, 175, 80);
    font-size: 20px;
    margin-right: 6px;
`;
const Time = styled.span`
    display: block;
    color: rgb(153, 153, 153);
    font-size: 12px;
`;
