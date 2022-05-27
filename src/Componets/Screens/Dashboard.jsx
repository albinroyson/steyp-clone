import styled from "styled-components";
import Spotlight from "./Spotlight";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import ClipConiner from "react-spinners/ClipLoader";
import img from "../../assests/Img/calendar.svg";
import videoimage from "../../assests/Img/04_-_creating_service_file.jpg";
import axios from "axios";

export default function Dashboard({ isClicked, setClicked }) {
    const [loading, setLoading] = useState(false);

    const [Items, setItems] = useState([
        {
            id: 1,
            image: img,
            name: "Professions",
            number: "1",
        },
        {
            id: 1,
            image: img,
            name: "Skills",
            number: "11",
        },
        {
            id: 1,
            image: img,
            name: "Practices",
            number: "38",
        },
        {
            id: 1,
            image: img,
            name: "Assessments",
            number: "20",
        },
        {
            id: 1,
            image: img,
            name: "Workshops",
            number: "38",
        },
        {
            id: 1,
            image: img,
            name: "Premium Assists",
            number: "0",
        },
    ]);
    const [topics, setTopics] = useState([]);

    const access = "r7aHyPh69GLonqSdk3pFfkiDrtVJ0I";
    useEffect(() => {
        axios
            .get(
                "https://learn.steyp.com/api/v1/learn/upcoming-activity/tech-schooling/",
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                }
            )
            .then((res) => {
                setTopics(res.data.data);
                console.log(topics);
            });
    }, []);

    const renderItems = () =>
        Items.map((item) => {
            return (
                <Divitem>
                    <Proicondiv>
                        <Proicon src={item.image} />
                    </Proicondiv>
                    <Procontentdiv>
                        <Proname>{item.name}</Proname>
                        <Pronum>{item.number}</Pronum>
                    </Procontentdiv>
                </Divitem>
            );
        });
    const [Videos, setVideos] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://learn.steyp.com/api/v1/learn/next-activity/tech-schooling/",
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                }
            )
            .then((res) => {
                setVideos(res.data.data);
                console.log("###################", res);
                setLoading(true);
            });
    }, []);

    return (
        <DAshcontainer id="main">
            <Leftmaincontainer>
                <Currentactivitydiv>
                    <Leftcontainer>
                        {loading ? (
                            <Videodiv>
                                <Videothumb src={Videos.image} />
                                <Playbutton
                                    src={
                                        require("../../assests/Img/play (2).svg")
                                            .default
                                    }
                                />
                            </Videodiv>
                        ) : (
                            <ClipConiner>
                                <HashLoader
                                    color={"#446692"}
                                    loading={loading}
                                    size={50}
                                />
                            </ClipConiner>
                        )}
                    </Leftcontainer>
                    <Rightconainer>
                        <Subhead>Current Activity</Subhead>
                        <Head>{Videos.name}</Head>
                        <Topicname>
                            Backend Developer / django Advanced
                        </Topicname>
                        <Arrowdiv>
                            <Arrow
                                src={
                                    require("../../assests/Img/arrow-right.svg")
                                        .default
                                }
                            />
                        </Arrowdiv>
                    </Rightconainer>
                </Currentactivitydiv>

                <Upcomingactivitydiv>
                    <Activityhead>Upcoming Activities</Activityhead>
                    <Videoboxdiv>
                        {topics.map((detail) => (
                            <Videobox>
                                <Videoimgdiv>
                                    <Videoimg src={detail.image} />
                                </Videoimgdiv>
                                <Bottomcontent>
                                    <Videoboxcontent>
                                        <TopicnameBottom>
                                            {detail.name}
                                        </TopicnameBottom>
                                        <Language>{detail.language}</Language>
                                        <Time>4 mins,42 secs</Time>
                                    </Videoboxcontent>
                                    <Lockcontainer>
                                        <Lock
                                            src={
                                                require("../../assests/Img/lock.svg")
                                                    .default
                                            }
                                        />
                                    </Lockcontainer>
                                </Bottomcontent>
                            </Videobox>
                        ))}
                    </Videoboxdiv>
                </Upcomingactivitydiv>
            </Leftmaincontainer>

            <Rightmaincontainer>
                <Performancebarcontainer>
                    <Perwrapper>
                        <Tittle>Overall Performance</Tittle>
                        <Fristdiv>
                            <Lessonsdiv>
                                <Name>Lessons</Name>
                                <Num>120</Num>
                            </Lessonsdiv>
                            <Lessonsdiv>
                                <Name>Topics</Name>
                                <Num>695</Num>
                            </Lessonsdiv>
                            <Professions>{renderItems()}</Professions>
                        </Fristdiv>
                    </Perwrapper>
                </Performancebarcontainer>
            </Rightmaincontainer>
        </DAshcontainer>
    );
}

const Rightmaincontainer = styled.div``;
const Leftmaincontainer = styled.div``;
const Videoboxdiv = styled.div`
    width: 90%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
`;
const TopicnameBottom = styled.span`
    display: block;
    font-size: 18px;
    line-height: 1.5rem;
    min-width: 90%;
`;
const Lockcontainer = styled.div`
    justify-content: center;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 10%) 0px 16px 24px;
`;
const Lock = styled.img``;
const Videoimg = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
`;
const DAshcontainer = styled.div`
    z-index: 30000;

    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Title = styled.h1``;
const Language = styled.span`
    display: block;
    display: block;
    font-size: 15px;
    color: rgb(144, 144, 144);
    margin-top: 6px;
`;
const Time = styled.span`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 15px;
    color: rgb(144, 144, 144);
    margin-top: 6px;
`;

const Currentactivitydiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 63%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 30px;
    background-color: rgb(232, 251, 243);
    border-radius: 10px;
    margin-bottom: 30px;
    position: relative;
`;
const Leftcontainer = styled.div`
    width: 61%;
`;
const Rightconainer = styled.div`
    width: 40%;
    /* padding-left: 30px; */
    z-index: 1;
`;
const Subhead = styled.div`
    font-size: 14px;
    line-height: 1.3em;
    color: rgb(90, 170, 141);
    margin-bottom: 12px;
`;
const Head = styled.div`
    font-size: 24px;
    line-height: 1.3em;
    margin-bottom: 12px;
`;
const Topicname = styled.div`
    font-size: 17px;
    line-height: 1.3em;
    margin-bottom: 13px;
    color: #868686;
`;
const Arrowdiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 50px;
    height: 40px;
    background-color: rgb(54, 166, 111);
    border-radius: 20px;
`;
const Arrow = styled.img``;
const Performancebarcontainer = styled.div`
    position: absolute;
    right: 0;
    top: 250px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    width: 32%;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Perwrapper = styled.div`
    width: 100%;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Tittle = styled.h3`
    display: block;
    font-size: 20px;
    margin-bottom: 8px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Fristdiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Lessonsdiv = styled.div`
    background: rgb(241, 238, 251);
    padding: 14px 15px;
    border-radius: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 93%;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Name = styled.span``;
const Num = styled.span``;
const Professions = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    padding-bottom: 18px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Proicondiv = styled.div`
    background: rgb(99, 231, 189);
    height: 44px;
    width: 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 11px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Proicon = styled.img`
    display: block;
`;
const Pronum = styled.small`
    display: block;
    font-size: 20px;
    line-height: 1rem;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Proname = styled.small`
    display: block;
    color: rgb(125, 132, 141);
    font-size: 13px;
    margin-bottom: 4px;
    line-height: 1rem;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Procontentdiv = styled.div``;
const Divitem = styled.div`
    display: flex;
    background: rgb(232, 243, 253);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 16px;
    border-radius: 5px;
    width: 93%;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Videodiv = styled.div`
    width: 90%;
    position: relative;
    color: "black";
    background-color: rgba(0, 0, 0, 0.7);
    &::after {
        position: absolute;
        content: "";
        inset: 0px;
        border-radius: 7px;
        background: rgba(0, 0, 0, 0.5);
    }
`;
const Videothumb = styled.img`
    width: 100%;
    display: block;
    display: block;
    width: 100%;
    border-radius: 7px;
`;
const Playbutton = styled.img`
    position: absolute;
    top: 40%;
    left: 40%;
    right: 50%;
    bottom: 50%;
    z-index: 2;
`;
const Upcomingactivitydiv = styled.div`
    width: 70%;
`;
const Activityhead = styled.div`
    display: block;
    font-size: 20px;
    margin-bottom: 8px;
`;
const Videobox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    background: rgb(248, 249, 248);
    border-radius: 11px;
    position: relative;
`;
const Videoimgdiv = styled.div`
    width: 100%;
    border-radius: 7px;
    margin-bottom: 20px;
    border-radius: 6px;
    overflow: hidden;
`;
const Bottomcontent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Videoboxcontent = styled.div``;
