import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Project from './Project'

export default function ProjectsList() {

  const [projects, setProjects] = useState(null)

  useEffect(()=>{
      axios.get('http://localhost:5000/projects')
        .then( res =>{
          setProjects(res.data)
        })
        .catch(err =>{
          console.log(err);
        })
  },[])




  return (
    <div>
      <h1>Projects</h1>
      { projects &&
        projects.map( project =>{
          return <Project key={project.id} project={project} />
        })
      }
    </div>
  )
}
