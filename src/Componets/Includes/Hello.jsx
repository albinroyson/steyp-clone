import React, { useState } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

export default function Navbar({ isClicked, setClicked }) {
    const [expand, setExpand] = useState(false);
    console.log(expand, "00990909");
    return (
        <Navbarcontainer onMouseOver={() => setExpand(true)}>
            <Navbarwrapper>
                <Navitems>
                    <Navitemdashboard>
                        <Dash to="/dashboard">
                            <Logo>
                                <Logoicon
                                    src={
                                        require("../../assests/Img/dashboard (1).svg")
                                            .default
                                    }
                                />
                            </Logo>
                            <Item className={expand && "active"}>
                                Dashboard
                            </Item>
                        </Dash>
                    </Navitemdashboard>
                    <Navitemfree>
                        <Freeground>
                            <Logo>
                                <Logoicon
                                    src={
                                        require("../../assests/Img/free.svg")
                                            .default
                                    }
                                />
                            </Logo>
                            <Item className="active">Free ground</Item>
                        </Freeground>
                        <Challenges>
                            <Logo>
                                <Logoicon
                                    src={
                                        require("../../assests/Img/challenge.svg")
                                            .default
                                    }
                                />
                            </Logo>
                            <Item className="active">Challeges</Item>
                        </Challenges>
                    </Navitemfree>
                    <Navitemclub>
                        <Club>
                            <Logo>
                                <Logoicon
                                    src={
                                        require("../../assests/Img/my-club-.svg")
                                            .default
                                    }
                                />
                            </Logo>
                            <Item className="active">my Club</Item>
                        </Club>
                        <Talks>
                            <Logo>
                                <Logoicon
                                    src={
                                        require("../../assests/Img/ceotalk.svg")
                                            .default
                                    }
                                />
                            </Logo>
                            <Item className="active">Challeges</Item>
                        </Talks>
                    </Navitemclub>
                </Navitems>
                <Bottom>
                    <Socialmediacontainer className="active">
                        <Socialitems>
                            <Icondiv>
                                <Socialicon
                                    src={
                                        require("../../assests/Img/facebook.svg")
                                            .default
                                    }
                                    alt="fb"
                                />
                            </Icondiv>
                            <Icondiv>
                                <Socialicon
                                    src={
                                        require("../../assests/Img/linkedin.svg")
                                            .default
                                    }
                                    alt="fb"
                                />
                            </Icondiv>
                            <Icondiv>
                                <Socialicon
                                    src={
                                        require("../../assests/Img/instagram (1).svg")
                                            .default
                                    }
                                    alt="fb"
                                />
                            </Icondiv>
                            <Icondiv>
                                <Socialicon
                                    src={
                                        require("../../assests/Img/twitter.svg")
                                            .default
                                    }
                                    alt="fb"
                                />
                            </Icondiv>
                            <Icondiv>
                                <Socialicon
                                    src={
                                        require("../../assests/Img//instagram.svg")
                                            .default
                                    }
                                    alt="fb"
                                />
                            </Icondiv>
                        </Socialitems>
                    </Socialmediacontainer>
                    <Explorediv href="https://talrop.com/">
                        <Explorebutton className="active">
                            Explore Talrop
                        </Explorebutton>
                        <Rightarrowdiv>
                            <Rightarrow
                                src={
                                    require("../../assests/Img/explore-white-arrow.svg")
                                        .default
                                }
                            />
                        </Rightarrowdiv>
                    </Explorediv>
                </Bottom>
            </Navbarwrapper>
        </Navbarcontainer>
    );
}

const Navbarcontainer = styled.div`
    transition: all 0.4s ease;
    width: 60px;
    position: fixed;
    left: 0px;
    top: 70px;
    height: 100vh;
    z-index: 1000;

    &:hover {
        background: rgb(249, 249, 251);
        width: 200px;

        position: fixed;
        left: 0px;
        top: 70px;
        /* transition: all 0.2s ease-in-out 0s; */
        overflow-y: scroll;
        overscroll-behavior-y: contain;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        display: flex !important;
        height: 100vh;
        overflow: hidden;
        width: 193px;
    }
    &:hover .active {
        display: block;
    }
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
        width: 62px;
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Navbarwrapper = styled.div``;
const Navitems = styled.div``;
const Navitemdashboard = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    padding: 18px 0;
    /* width: 100%; */
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
const Navitem = styled.div`
    display: flex;
    border-bottom: 1px solid #efefef;
    padding: 10px 21px;
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
const Logo = styled.div`
    /* width:20px;  */
    /* margin-right: 20px; */
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
const Logoicon = styled.img`
    display: block;
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
const Item = styled.h2`
    font-size: 14px;
    cursor: pointer;
    color: #333;
    margin-left: 20px;
    min-width: 60px;
    /* margin-left: 1.125rem; */
    display: flex;
    align-items: center;
    /* transition: all .2s ease 0s;s */
    display: none;
    /* overflow: hidden; */
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
const Dash = styled(Link)`
    padding: 10px 21px;
    display: flex;
    &.active {
        color: green;
    }
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
const Navitemfree = styled.div`
    border-bottom: 1px solid #efefef;
    padding: 18px 0;
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
const Freeground = styled.div`
    display: flex;
    padding: 10px 21px;
    width: -webkit-fill-available;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        margin-bottom: 29px;
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
        margin-bottom: 29px;
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Challenges = styled.div`
    display: flex;
    padding: 10px 21px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        margin-bottom: 29px;
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
        margin-bottom: 29px;
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Navitemclub = styled.div`
    padding: 18px 0;
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
        margin-bottom: 29px;
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
        margin-bottom: 29px;
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Club = styled.div`
    display: flex;
    padding: 10px 21px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        margin-bottom: 29px;
    }
    @media all and (max-width: 540px) {
    }
    @media all and (max-width: 480px) {
        margin-bottom: 29px;
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Talks = styled.div`
    display: flex;
    padding: 10px 21px;
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
const Socialmediacontainer = styled.div`
    width: 100%;
    display: none;
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
const Socialitems = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
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
const Icondiv = styled.div`
    width: 100%;
    margin-left: 10px;
    cursor: pointer;
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
const Socialicon = styled.img`
    display: block;
    width: 20px;
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
const Explorediv = styled.a`
    background: #56c082;
    max-height: 46px;
    display: flex;
    align-items: center;
    min-width: 60px;
    justify-content: center;
    margin: 0 auto;
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
const Explorebutton = styled.div`
    padding: 20px;
    color: #fff;
    width: 100%;
    font-size: 14px;
    display: none;
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
const Bottom = styled.div`
    position: absolute;
    bottom: 70px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        position: absolute;
        bottom: 38px;
    }
    @media all and (max-width: 540px) {
        bottom: 70px;
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
    @media all and (max-width: 320px) {
    }
`;
const Rightarrowdiv = styled.div`
    width: 60px;
    padding: 20px;
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
    } ;
`;
const Rightarrow = styled.img`
    width: 100%;
    display: block;
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
