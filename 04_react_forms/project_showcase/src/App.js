import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import {useState} from "react"


const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  console.log(projects)

  function handleClick(){
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((proj) => setProjects(proj))
  }

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode)

  // function onToggleDarkMode(){
  //   setIsDarkMode(!isDarkMode)
  // }

  function handleSearch(newsearch){
    setSearchQuery(newsearch)
  }

<<<<<<< HEAD
  function onAddProject(newProject) {                           // DELIVERABLE 2-1: Create function to update setter function value AFTER submit function
    setProjects([...projects, newProject])                      // DELIVERABLE 2-1.2: Uses spread operator to return a new array w/ new project included
  }

=======
  function onAddProject(newProject){
    setProjects([...projects, newProject])
  }
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
  // const handleSearch = (newvalue) => setSearchQuery(newvalue)

  return (
    <div className="App">
      <Header isDarkMode = {isDarkMode} onToggleDarkMode = {onToggleDarkMode}/>
<<<<<<< HEAD
      <ProjectForm projects={projects} onAddProject={onAddProject}/>
=======
      <ProjectForm projects = {projects} onAddProject={onAddProject}/>
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList searchQuery = {searchQuery} projects={projects} handleSearch={handleSearch} setProjects = {setProjects}/>
    </div>
  );
};

export default App;