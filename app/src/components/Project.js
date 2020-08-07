import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Action from './Action'

const initialFormValues ={
  description:'',
  notes:'',
  project_id:''
}

export default function Project({project}) {
  console.log('project', project);
  const [actions, setActions] = useState(null);
  const [showActions, setShowActions] =useState(false);
  const [addAction, setAddAction] = useState(false);
  const [formValues, setFormValues]= useState(initialFormValues);


  useEffect(()=>{
    axios.get(`http://localhost:5000/projects/${project.id}/actions`)
      .then(res =>{
        console.log(res);
        setActions(res.data)
      })
      .catch(err =>{
        console.log(err.response);
      })
  },[showActions])

  const changeHandler = (e) =>{

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      project_id: project.id
    })
  }

  const addNewAction = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/actions', formValues)
      .then(res =>{
        console.log(res);
        setShowActions(true);
        setFormValues(initialFormValues);
        setAddAction(false)
      })
  }

  return (
    <div  className='project-card'>
              <h2>{project.name}</h2>
              <h3>{project.description}</h3>
              <h4>{project.completed ? 'Completed': 'Not completed'}</h4>
              <p className="show-more" onClick={()=>setShowActions(true)}>Show Actions</p>
              <p className="add" onClick={()=>setAddAction(true)}>Add action</p>
              {
                addAction && (
                  <form className='add-form' onSubmit={addNewAction}>
                    <input onChange={changeHandler} type="text" name='description' placeholder='description'/>
                    <input onChange={changeHandler} type="text" name='notes' placeholder='notes'/>
                    <button>Add Action</button>
                  </form>
                )
              }
              {
                showActions && 
                actions.map( action =>{
                  return <Action key={action.id} actions={action} />
                })
              }
    </div>
  )
}
