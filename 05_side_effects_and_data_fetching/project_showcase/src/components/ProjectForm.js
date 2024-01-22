import React, {useState} from "react";

const ProjectForm = ({onAddProject,projects}) => {
  const [name, setName] = useState("")
  const [about, setAbout] = useState("")
  const [phase, setPhase] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")

  function handleName(e){
    setName(e.target.value)
  }

  function handleAbout(e){
    setAbout(e.target.value)
  }

  function handlePhase(e){
    setPhase(e.target.value)
  }

  function handleLink(e){
    setLink(e.target.value)
  }

  function handleImage(e){
    setImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newProject = {
      id: projects.length+1,
      name: name,
      about: about,
      phase: phase,
      link: link,
      image: image
    }

    fetch("http://localhost:4000/projects", {           // fetch database
      method: "POST",                                   // POST to update database
      headers: {"Content-Type":"application/json"},     // header defines the content type of what we're posting
      body: JSON.stringify(newProject)                  // converts a JavaScript value to a JSON string
    })
    .then((response) => response.json())                // turns JSON string into JSON file?
    .then((project) => onAddProject(project))           // inserts JSON file data into the callback function 'onAddProject(data)'
  }


  return (
    <section>
      <form className="form" autoComplete="off" onSubmit = {handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleName} value={name}/>

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={about} onChange={handleAbout}/>

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" onChange={handlePhase} value={phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" onChange={handleLink} value={link}/>

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" onChange={handleImage} value={image}/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
