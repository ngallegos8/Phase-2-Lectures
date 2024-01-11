import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import {useState} from "react"

const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

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

  function onAddProject(newProject) {                           // DELIVERABLE 2-1: Create function to update setter function value AFTER submit function
    setProjects([...projects, newProject])                      // DELIVERABLE 2-1.2: Uses spread operator to return a new array w/ new project included
  }

  // const handleSearch = (newvalue) => setSearchQuery(newvalue)

  return (
    <div className="App">
      <Header isDarkMode = {isDarkMode} onToggleDarkMode = {onToggleDarkMode}/>
      <ProjectForm projects={projects} onAddProject={onAddProject}/>
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList searchQuery = {searchQuery} projects={projects} handleSearch={handleSearch} setProjects = {setProjects}/>
    </div>
  );
};

export default App;