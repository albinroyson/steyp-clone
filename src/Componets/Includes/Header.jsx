import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';


export default function Header() {
  return (
      <>
    <Headerdiv>
        <Headerwrapper>
            <Leftdiv>
                <Logo src={require("../../assests/Img/steyp-logo.svg").default} />
            </Leftdiv>
            <Rightdiv>
                    <Messegediv>
                        <Messegeicon src={require("../../assests/Img/messages.svg").default} />
                    </Messegediv>
                   
                    <Downarrowdiv>
                    <Name>
                        Albin Royson
                    </Name>
                        <Downarrow>
                            <Downlogo src={require("../../assests/Img/polygon.svg").default} />
                        </Downarrow>
                    </Downarrowdiv>
            </Rightdiv>
        </Headerwrapper>
    </Headerdiv>
    <Outlet />
    </>
  )
}


const Headerdiv=styled.div`
    width: 100%;
    position: fixed;
    z-index: 2000;
    top: 0;
     padding: 0px 18px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 70px;
    background: rgb(249, 249, 251);
    -webkit-box-align: inherit;
    align-items: inherit;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
       
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Headerwrapper=styled.div`
    display:flex;
    justify-content:space-between;
    padding: 13px;
    align-items:center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){
            
    }
    @media all and (max-width: 640px){
       
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Leftdiv=styled.div`
    width:8%;
    @media all and (max-width: 1080px){
        width:10%;
    }
    @media all and (max-width: 980px){
        width:13%;

    }
    @media all and (max-width: 768px){
            width:15%;
    }
    @media all and (max-width: 640px){
        width:16%;
    }
    @media all and (max-width: 540px){
        width: 24%;
    }
    @media all and (max-width: 480px){
        width: 34%;
    }
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Logo=styled.img``
const Rightdiv=styled.div`
    display:flex;`
const Downarrowdiv=styled.div`
    display:flex;
    margin-left:50px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
    
       
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Downarrow=styled.div`
    margin-left: 10px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
       
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Messegediv=styled.div`
    width:2px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
       display: none;
    }
    @media all and (max-width: 540px){
            
    }
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}`
const Messegeicon=styled.img`
    display:block;`
const Name=styled.div`
    border-left:1px solid #000;
    padding-left: 20px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 1080px){}
    @media all and (max-width: 980px){}
    @media all and (max-width: 768px){}
    @media all and (max-width: 640px){
        display:none;
       
    }
    @media all and (max-width: 540px){}
    @media all and (max-width: 480px){}
    @media all and (max-width: 360px){}
    @media all and (max-width: 320px){}
    `
const Downlogo=styled.img``