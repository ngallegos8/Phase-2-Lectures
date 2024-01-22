<<<<<<< HEAD
import React, { useState } from "react";

const ProjectForm = ({ onAddProject, projects }) => {
  const [name, setName] = useState("")           // DELIVERABLE 1-1: Initialize State
=======
import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
const ProjectForm = ({onAddProject, projects}) => {
  const [name, setName] = useState("")
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
  const [about, setAbout] = useState("")
  const [phase, setPhase] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")
<<<<<<< HEAD

  function handleName(event) {                  // DELIVERABLE 1-1.2: Create function to change setter function value
    setName(event.target.value)
  }
  function handleAbout(event) {
    setAbout(event.target.value)
  }
  function handlePhase(event) {
    setPhase(event.target.value)
  }
  function handleLink(event) {
    setLink(event.target.value)
  }
  function handleImage(event) {
    setImage(event.target.value)
  }

  // console.log(name)    // Ensure changes in input fields are being logged 
  // console.log(about)

  function handleSubmit(event) {               // DELIVERABLE 1-4.1: Create function to handle submit function w/ all input areas of form listed
    event.preventDefault()
    const newProject = {
      id: projects.length +1,
      name: name,
      about: about,
      phase: phase,
      link: link,
      image: image
    }
    console.log(newProject)
    onAddProject(newProject)                  // DELIVERABLE 2-2: Adds new form from user input to the setter function value in Parent Component('App')
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>         {/* DELIVERABLE 1-4.2: add onSubmit event to update from on event of submit */}
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleName}/>     {/* DELIVERABLE 1-2, 1-3 */}
        {/* <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/> */}   {/* Alternate way to target value instead of callback function */}
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={about} onChange={handleAbout}/>
        <label>Phase</label>
        <select name="phase" onChange={handlePhase} value={phase}> 
=======
  console.log(phase)

  function handleName(event){
    setName(event.target.value)
  }
  function handleAbout(event){
    setAbout(event.target.value)
  }

  function handlePhase(event){
    setPhase(event.target.value)
  }

  function handleLink(event){
    setLink(event.target.value)
  }
  function handleImage(event){
    setImage(event.target.value)
  }

  console.log(name)
  console.log(about)

  function handleSubmit(event){
    event.preventDefault()
    const newProject = {
      id: projects.length+1,
      name: name,
      about: about,
      phase: phase,
      link: link, 
      image: image
    }
    console.log(newProject)
    onAddProject(newProject)
  }
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleName} value={name}/>
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" onChange={handleAbout} value={about}/>
        <label>Phase</label>
        <select name="phase" id="Phase" onChange={handlePhase} value={phase}>
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>
        <label>Project Homepage</label>
<<<<<<< HEAD
        <input type="text" id="image" name="image" onChange={handleLink} value={link}/>
=======
        <input type="text" id="link" name="link" onChange={handleLink} value={link}/>
>>>>>>> 05a355bd3ebd5fce33a91d1cd471b4c499e2bc6a
        <label>Screenshot</label>
        <input type="text" id="image" name="image" onChange={handleImage} value={image}/>
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
