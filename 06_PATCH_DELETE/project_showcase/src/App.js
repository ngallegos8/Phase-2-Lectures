import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import ProjectEditForm from "./components/ProjectEditForm"
const App = () => {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [projectId, setProjectId] = useState(null)

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const handleUnmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }

  console.log("Returning JSX Component")

  useEffect(()=> {
    console.log("Running the UseEffect Hook")
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((project) => setProjects(project))

    return () => {
      console.log("Cleanup Function Executed!")
    }
  }, [])

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

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return ogProject;
      }
    });

    setProjects(updatedProjects);
  };

  const onDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(
      (ogProject) => ogProject.id !== projectId
    );

    setProjects(updatedProjects);
  };


  const renderForm = () => {
    console.log(projectId)
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };
  
  return (
    <div className="App">
      <Header isDarkMode = {isDarkMode} onToggleDarkMode = {onToggleDarkMode}/>
      {/* update parent state using a callback function */}
      {renderForm()}
      <button onClick={handleUnmount}>Unmount</button>
      <ProjectList searchQuery = {searchQuery} projects={projects} handleSearch={handleSearch} setProjects = {setProjects} enterProjectEditModeFor={enterProjectEditModeFor} onDeleteProject={onDeleteProject}/>
    </div>
  );
};

export default App;