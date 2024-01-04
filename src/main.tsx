import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Routes, Route, HashRouter} from "react-router-dom";

//pages
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Bio from "./pages/About/Personnal/Bio/bio.tsx";
import Interests from "./pages/About/Personnal/Interests/interests.tsx";
import Education from "./pages/About/Personnal/Education/education.tsx";
import Professional from "./pages/About/Professional/professional.tsx";
import Hobbies from "./pages/About/Hobbies/hobbies.tsx";
import Personal from "./pages/About/Personnal/personal.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}>
                      <Route path="/about/perso" element={<Personal />}>
                          <Route index path="/about/perso/bio" element={<Bio/>}/>
                          <Route path="/about/perso/interests" element={<Interests/>}/>
                          <Route path="/about/perso/education" element={<Education/>}/>
                      </Route>
                      <Route path="/about/pro" element={<Professional />} />
                      <Route path="/about/hobbies" element={<Hobbies />} />
                  </Route>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </ HashRouter>
  </React.StrictMode>,
)
