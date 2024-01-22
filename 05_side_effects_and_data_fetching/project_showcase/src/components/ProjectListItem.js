import React, {useState} from "react"
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ id, about, image, link, name, phase, enterProjectEditMode, onDeleteProject }) => {
  const [count, setCount] = useState(0)

  function handleClick(){
    // setCount((claps) => claps + 1)
    setCount(count + 1)
  }


  const handleEditClick = () => {
    enterProjectEditMode(id)
  }

  const handleDeleteClick = () => {
    console.log("deleting")
    fetch(`http://localhost:4000/projects/${id}`, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(onDeleteProject(id))

  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClick}>👏{count}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div>
          <button><FaPencilAlt onClick={handleEditClick}/></button>
          <button><FaTrash onClick={handleDeleteClick}/></button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;