import React,{useEffect, useState} from 'react'
import Header from '../../Includes/Header'
import Navbar from '../../Includes/Navbar'
import Tittlebar from '../../Includes/Tittlebar'
import {BrowserRouter,Routes,Route, useLocation, useNavigate, Navigate,} from "react-router-dom";
import Learning from '../../Screens/Learning';
import practice from "../../Screens/Practice";
import Dashboard from '../../Screens/Dashboard';
import Practice from '../../Screens/Practice';
import Workshop from "../../Screens/Workshop"
import Certification from '../../Screens/Certification';
import Assessment  from "../../Screens/Assessment";

export default function AppRouter() {
  const [isClicked,setClicked]=useState("dashboard")

  const navigation = useNavigate()
  useEffect(() => {
    navigation("/dashboard")
  }, [])
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Header />}>
          <Route path="/" element={<Tittlebar isClicked={isClicked} setClicked={setClicked}/>} >
            <Route path="/dashboard" element={<Dashboard isClicked={isClicked} setClicked={setClicked} />} />  
            <Route path="learning" element={<Learning isClicked={isClicked} setClicked={setClicked}/>} />
            <Route path="practice" element={<Practice isClicked={isClicked} setClicked={setClicked}/>}/>
            <Route path="Workshop" element={<Workshop isClicked={isClicked} setClicked={setClicked}/>}/>
            <Route path="assessment" element={<Assessment />}/>
            <Route path="certification" element={<Certification />}/>
          </Route>
      </Route>
    </Routes>
   <Navbar isClicked={isClicked} setClicked={setClicked}/>
    </>
  )
}
