import React, { useState } from "react";
import styled from "styled-components";
import img from "../../assests/Img/calendar.svg";

export default function Performance() {
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
    return (
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
    );
}

const Performancebarcontainer = styled.div`
    position: absolute;
    right: 0;
    top: 180px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    width: 30%;
    @media all and (max-width: 1280px) {
        top: 200px;
    }

    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        position: absolute;
        top: 80%;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        width: 80%;
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 540px) {
        right: 17px;
    }
    @media all and (max-width: 480px) {
        right: 3px;
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
