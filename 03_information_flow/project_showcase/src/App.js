import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
<<<<<<< HEAD
import React, { useState } from "react";

const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)      /* DELIVERABLE 2-1 (copied from 'Header.js') */
  const [searchQuery, setSearchQuery] = useState("")      /* DELIVERABLE 3-1 (copied from 'ProjectList.js') */

function loadProjects () {                                /* DELIVERABLE 1-3.1 */
  fetch("http://localhost:4000/projects")
    .then((res => res.json()))
    .then((data) => setProjects(data))
}

const handleToggleDarkMode = () => setIsDarkMode(!isDarkMode)     /* DELIVERABLE 2-2.1 "Create a callback function that updates isDarkMode" */

const handleSearch = (new_value) => setSearchQuery(new_value)


  return (
    <div className={isDarkMode ? "App light": "App dark"}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} onToggleDarkMode={handleToggleDarkMode} /> {/* DELIVERABLE 2-2.2 Sets function as a prop to export */}
      <ProjectForm />
      <button onClick={loadProjects}>Load Projects</button> {/* DELIVERABLE 1-1, 1-2 & 1-3.2 */}
      <ProjectList projects={projects} searchQuery={searchQuery} handleSearch={handleSearch} setSearchQuery={setSearchQuery}/>
=======
// import projects from "./projects";
import React, {useState} from "react"
const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  function loadProjects(){
    fetch("http://localhost:4000/projects")
    .then((res)=> res.json())
    .then((data)=> setProjects(data))
  }
  const onToggleDarkMode = () => {setIsDarkMode(!isDarkMode)}

  const handleSearch = (new_value) => setSearchQuery(new_value)
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setDarkMode={setIsDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <ProjectForm />
      <button onClick={loadProjects}>Load Projects</button>
      <ProjectList projects={projects} searchQuery={searchQuery} handleSearch={handleSearch} setSearchQuery={setSearchQuery} />
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
    </div>
  );
};

export default App;