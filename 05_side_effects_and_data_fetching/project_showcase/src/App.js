import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { useState, useEffect } from "react"
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [projectId, setProjectId] = useState(null)

  useEffect(() => {
    console.log("Running the useEffect Hook")  // Will render useEffect second
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((proj) => setProjects(proj))

    return () => {
      console.log("Cleaning up the function: This is where to remove elements!")
    }

  },[])

  const completeEditing= () => {
    setProjectId(null)
  }

  const enterProjectEditMode = (id) => {
    setProjectId(id)
  }

  const onUpdateProject = (newProject) => {
    const updatedProjects = projects.map((project) => {
      if(project.id === newProject.id){
        return newProject
      }
      else{
        return project
      }
    })
    setProjects(updatedProjects)
  }

  const renderForm = () => {
    console.log(projectId)
    if(projectId){
      return (
        <ProjectEditForm  projectId={projectId} completeEditing={completeEditing} onUpdateProject={onUpdateProject}/>
      )
    }
    else {
      return <ProjectForm projects={projects} onAddProject={onAddProject} />
    }
  }

  const onDeleteProject = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id)
    setProjects(updatedProjects)
  }

  console.log("Rendering Component")         // Will render component first

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode)

  // function onToggleDarkMode(){
  //   setIsDarkMode(!isDarkMode)
  // }

  function handleSearch(newsearch){
    setSearchQuery(newsearch)
  }


  // const handleSearch = (newvalue) => setSearchQuery(newvalue)

  const onAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }

 
  return (
    <div className="App">
      <Header isDarkMode = {isDarkMode} onToggleDarkMode = {onToggleDarkMode}/>
      {/* <ProjectForm projects = {projects} onAddProject = {onAddProject}/> */}
      {renderForm()}
      {/* <button>Load Projects</button> */}
      <ProjectList searchQuery = {searchQuery} projects={projects} handleSearch={handleSearch} setProjects = {setProjects} enterProjectEditMode={enterProjectEditMode} onDeleteProject={onDeleteProject}/>
    </div>
  );
};

export default App;