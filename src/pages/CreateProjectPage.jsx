import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProjectPage() {

  const navigate= useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...logic for creating a new Project should be here

    const newProject = {
      title: title,
      description: description,
    }
    console.log(newProject)

    //Como contactamos con la API?
    //*axios.post
    //Donde hacemos ese código de contacto? 
    //*Aquí, en la funcion que maneja el submit del formulario
    //Que hacemos despues de que se cree el nuevo proyecto?
    //*redireccion a home

    //!En métodos axios.post, El segundo argumento siempre es el OBJETO que queremos crear
    axios.post(`${import.meta.env.VITE_SERVER_URL}/projects`, newProject)
    
    .then(() => {
      //Si entramos en este .then, significa que todo estuvo ok,
      //Es decir, se creó correctamente el proyecto.
      navigate("/projects")
    })
    .catch((error) => {
      console.log(error)
    })


  };  

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}> 
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;