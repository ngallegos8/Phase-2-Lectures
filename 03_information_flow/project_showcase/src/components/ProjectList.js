import ProjectListItem from "./ProjectListItem";
import React, {useState} from "react"
<<<<<<< HEAD
const ProjectList = ({ projects, searchQuery, handleSearch }) => {

=======
const ProjectList = ({projects, searchQuery, handleSearch, setSearchQuery}) => {
  // const [searchQuery, setSearchQuery] = useState("")
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
  // const handleSearch = (event) => {
  //   console.log(searchQuery)
  //   setSearchQuery(event.target.value)
  // }
  const results = projects.filter((project) => (
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  ))
  const projectListItems = results.map((project) => (
    // <ProjectListItem key={project.id} {...project} />
<<<<<<< HEAD
    <ProjectListItem key={project.id} project ={project}/>
=======
    <ProjectListItem key={project.id} project={project}/>
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
  ));

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={(e)=> setSearchQuery(e.target.value)}/> 

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
