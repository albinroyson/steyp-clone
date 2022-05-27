import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Tittlebar({ isClicked, setClicked }) {
    return (
        <>
            <Barcontainer id="hello">
                <Barwrapper>
                    <Headdiv>
                        <Head>Tech Schooling</Head>
                        <Menubar>
                            <Menuitem
                                exact
                                activeClassName="active"
                                to="/dashboard"
                            >
                                Dashboard{" "}
                            </Menuitem>
                            <Menuitem
                                exact
                                activeClassName="active"
                                to="learning"
                            >
                                Learning{" "}
                            </Menuitem>
                            <Menuitem
                                exact
                                activeClassName="active"
                                to="/practice"
                            >
                                Practice
                            </Menuitem>
                            <Menuitem
                                exact
                                activeClassName="active"
                                to="/workshop"
                            >
                                Workshops
                            </Menuitem>
                            <Menuitem
                                exact
                                activeClassName="active"
                                to="/assessment"
                            >
                                Assessments{" "}
                            </Menuitem>
                            <Menuitem
                                exact
                                activeClassName="active"
                                to="/Certification"
                            >
                                Certification
                            </Menuitem>
                        </Menubar>
                    </Headdiv>
                </Barwrapper>
            </Barcontainer>
            <Outlet />
        </>
    );
}

const Barcontainer = styled.section`
    /* display: flex;
    box-shadow: rgb(0 0 0 / 10%) 0px 16px 24px;
    padding: 12px 25px;
    border-radius: 6px;
    margin-bottom: 35px; */
    width: 95%;
    @media all and (max-width: 1280px) {
      
    }
    @media all and (max-width: 1080px) {
       
    }
    @media all and (max-width: 980px) {
       
    }
    @media all and (max-width: 768px) {
       
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
const Barwrapper = styled.section`
    width: 98%;
`;
const Headdiv = styled.div``;
const Head = styled.h3`
    text-transform: capitalize;
    font-size: 23px;
    margin-bottom: 19px;
    font-weight: 500;
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
const Menubar = styled.div`
    width: 100%;
    display: flex;
    box-shadow: rgb(0 0 0 / 10%) 0px 16px 24px;
    padding: 15px 19px;
    border-radius: 6px;
    margin-bottom: 35px;

    padding: 20px 19px;

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
const Menuitem = styled(NavLink)`
    display: inline-block;
    color: hsl(0, 0%, 44.31372549019608%);
    font-size: 16px;
    margin-right: 60px;
    &:last-child {
        margin-right: 0;
    }
    &.active {
        color: green;
    }
`;
