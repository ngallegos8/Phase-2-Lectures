<<<<<<< HEAD
import React, { useState } from "react"

function ProjectListItem({project}){
    const [clapCounts, setClapCounts] = useState(0)
    
    function handleClaps () {
        console.log(clapCounts)
        setClapCounts(clapCounts + 1)
    }

  console.log(project)
=======
import React, {useState} from "react"
function ProjectListItem({project}){
  const [clapCounts, setClapCounts] = useState(0)
  console.log(project)

  function handleClaps(){
    console.log(clapCounts)
    setClapCounts(clapCounts + 1)
  }
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
  return (
      <li className="card">
          <figure className="image">
              <img src={project.image} alt={project.name}></img>
<<<<<<< HEAD
=======
              {/* <button className="claps" onClick={()=> setClapCounts(clapCounts+1)}>👏{clapCounts}</button> */}
              <button className="claps" onClick={handleClaps}>👏{clapCounts}</button>
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
          </figure>

          <section className="details">
              <h4>{project.name}</h4>
              <p>{project.about}</p>
              {
                  project.link ?
                   <p>
                      <a href={project.link}>Link</a>
                  </p>
                  : null
              }
          </section>

          <footer className="extra">
              <span className="badge blue">Phase {project.phase}</span>
          </footer>


      </li>
  )
}

export default ProjectListItem;