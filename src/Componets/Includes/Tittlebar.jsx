import React, { useState } from 'react'
import styled from 'styled-components';
import {Link,NavLink, Outlet} from "react-router-dom"; 

export default function Tittlebar({isClicked,setClicked}) {
  return (
    <>
        <Barcontainer id="hello">
            <Barwrapper>
                <Headdiv>
                    <Head>
                        Tech Schooling
                    </Head>
                    <Menubar>
                        <Menuitem   exact activeClassName="active"  to="/dashboard">Dashboard </Menuitem>
                        <Menuitem   exact activeClassName="active" to="learning">Learning </Menuitem>
                        <Menuitem   exact activeClassName="active" to="/practice">Practice</Menuitem>
                        <Menuitem   exact activeClassName="active" to="/workshop">Workshops</Menuitem>
                        <Menuitem   exact activeClassName="active" to="/assessment">Assessments </Menuitem>
                        <Menuitem   exact activeClassName="active" to="/Certification">Certification</Menuitem>
                    </Menubar>
                </Headdiv>
            </Barwrapper>
        </Barcontainer>
        <Outlet />
    </>
  )
}

const Barcontainer=styled.section`
    /* display: flex;
    box-shadow: rgb(0 0 0 / 10%) 0px 16px 24px;
    padding: 12px 25px;
    border-radius: 6px;
    margin-bottom: 35px; */
    width:95%;
    @media all and (max-width: 1280px){
        position: absolute;
        top: 16%;
        left: 8%;
        width: 90%;
        z-index: 100;
    }
    @media all and (max-width: 1080px){
        top: 16%;
        left: 10%;
        width: 88%;
    }
    @media all and (max-width: 980px){
        top: 16%;
        left: 12%;
        width:84%;
    }
    @media all and (max-width: 768px){
        width:80%;
    
    }
    @media all and (max-width: 640px){
        top: 20%;
        left: 18%;
        width: 78%;
    }
    @media all and (max-width: 540px){
        width: 70%;
    }
    @media all and (max-width: 480px){
        left: 19%;
        width: 70%;
    }
    @media all and (max-width: 360px){
        left: 25%;
    }
    @media all and (max-width: 320px){}
  `
const Barwrapper=styled.section`
    width:98%;`
const Headdiv=styled.div``
const Head=styled.h3`
    text-transform: capitalize;
    font-size: 23px;
    margin-bottom: 19px;
    font-weight: 500;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
       
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){
        text-transform: capitalize;
        font-size: 18px;
        margin-bottom: 15px;
        font-weight: 500;
    }
    @media all and (max-width: 360px){
       
    }
    @media all and (max-width: 320px){}

    `
const Menubar=styled.div`
    width: 100%;
    display: flex;
    box-shadow: rgb(0 0 0 / 10%) 0px 16px 24px;
    padding: 15px 19px;
    border-radius: 6px;
    margin-bottom: 35px;
 
    padding: 20px 19px;
 
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){
        top: 16%;
        left: 12%;

        overflow-x: auto;

    }
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        padding: 16px 25px;
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Menuitem=styled(NavLink)`
        display: inline-block;
    color: hsl(0,0%,44.31372549019608%);
    font-size: 16px;
    margin-right: 60px;
    &:last-child{
        margin-right:0;
    }
    &.active{
        color:green;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
       
    }
    @media all and (max-width: 540px){
        margin-right: 60px;
        font-size: 16px;
    }
    @media all and (max-width: 480px){
        margin-right: 26px;
        font-size: 16px;
    }
    @media all and (max-width: 360px){
        margin-right: 16px;
        font-size: 13px;
    
    }
    @media all and (max-width: 320px){}
`;