import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home'
import { AboutUs } from '../pages/AboutUs'
import { Causes } from '../pages/Causes'
import { Contact } from '../pages/Contact'
import { Events } from '../pages/Events'
import { Project } from '../pages/Project'
import { Team } from '../pages/Team'
import { Volunteer } from '../pages/Volunteer'


export function WebRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/causes" element={<Causes/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/volunteer" element={<Volunteer/>}/>

    </Routes>
  )
}