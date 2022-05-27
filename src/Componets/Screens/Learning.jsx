import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import ClipConiner from "react-spinners/ClipLoader";
import videoimage from "../../assests/Img/04_-_creating_service_file.jpg";
import axios from "axios";
import Spotlight from "./Spotlight";
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ui from "../../assests/Img/UI_Engineer.jpg";
import dev from "../../assests/Img/DevOps_Engineer.jpg";
import backend from "../../assests/Img/Backend_Developer_ACsVD3G.jpg";
import { learnConfig } from "../../axiosConfig";

export default function Learning() {
    const [isclicked, setClicked] = useState(false);
    const [selectedId, setSelectedId] = useState([1, 2]);
    const [subject, setSubject] = useState([]);
    const [loading, setLoading] = useState(false);
    const access = "r7aHyPh69GLonqSdk3pFfkiDrtVJ0I";
    // useEffect(()=>{
    // //     setLoading(true)
    // //     setTimeout(()=>{
    // //       setLoading(false)
    // //     },1000)
    // //   },[])
    useEffect(() => {
        learnConfig
            .get("/learn/designations/tech-schooling/", {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            })
            .then((res) => {
                setSubject(res.data.data);
                console.log("albin###", res);
                setLoading(true);
            });
    }, []);

    return (
        <Learningcontainer id="globals">
            <Learningwrapper>
                <Head>Professions</Head>
                <Subjectlist>
                    {loading ? (
                        subject.map((item) => (
                            <Listitem
                                onClick={() => {
                                    // setClicked(true)
                                    // console.log(isclicked,"testttttt");
                                    // if (selectedid===item.id){
                                    // 	setselectedid("")
                                    // }
                                    // else{
                                    // 	setselectedid(item.id)
                                    // }array filter in react mala

                                    selectedId.includes(item.id)
                                        ? setSelectedId(
                                              selectedId.filter(
                                                  (id) => item.id !== id
                                              )
                                          )
                                        : setSelectedId([
                                              ...selectedId,
                                              item.id,
                                          ]);
                                }}
                                className={
                                    item.status === "completed" ? "change" : ""
                                }
                            >
                                <Leftcontianer>
                                    <Subjectimage src={item.image} />
                                </Leftcontianer>
                                <Rightcontainer>
                                    <Position>
                                        #<Num>1</Num>
                                    </Position>
                                    <Name>{item.name}</Name>
                                    <Bottomdiv>
                                        <Skilldiv>
                                            <Skillicon
                                                src={require("../../assests/Img/books.png")}
                                            />
                                            <Skillcount>9 skills</Skillcount>
                                        </Skilldiv>
                                        <Timediv>
                                            <Timeicon
                                                src={require("../../assests/Img/wall-clock.png")}
                                                alt="clock"
                                            />
                                            <Time>56 hrs,5 mins</Time>
                                        </Timediv>
                                    </Bottomdiv>
                                </Rightcontainer>
                            </Listitem>
                        ))
                    ) : (
                        <ClipConiner>
                            <HashLoader
                                color={"#446692"}
                                loading={loading}
                                size={50}
                            />
                        </ClipConiner>
                    )}
                </Subjectlist>
            </Learningwrapper>
        </Learningcontainer>
    );
}
const Learningcontainer = styled.div``;
const Title = styled.div``;
const Learningwrapper = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const Head = styled.h3`
    font-size: 22px;
    color: rgb(24, 72, 76);
    margin-bottom: 13px;
`;
const Subjectlist = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 13px;
    width: 100%;
`;
const Listitem = styled.div`
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-filter: grayscale(1);
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 19px;
    border-radius: 7px;
    background: rgb(249, 249, 249);
    position: relative;
    width: 100%;
    margin-top: 10px;
    &.change {
        filter: grayscale(0);
    }
`;
const Leftcontianer = styled.div`
    width: 51%;
    max-width: 160px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 14px;
    max-width: 160px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 14px;
`;
const Subjectimage = styled.img`
    display: block;
    width: 100%;
`;
const Rightcontainer = styled.div`
    width: 50%;
`;
const Position = styled.span`
    color: rgb(153, 153, 153);
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 22px;
`;
const Name = styled.span`
    color: rgb(66, 66, 66);
    margin: 10px 0px;
    font-size: 14px;
`;
const Bottomdiv = styled.div`
    display: flex;
    justify-content: space-between;

    width: 54%;

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
const Num = styled.span`
    display: block;
    color: rgb(63, 81, 181);
    font-size: 16px;
    margin-left: 4px;
`;
