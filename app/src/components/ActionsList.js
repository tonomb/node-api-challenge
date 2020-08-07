import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Action from './Action'

export default function ActionsList() {

  const [actions, setActions] = useState(null)

  useEffect(()=>{
      axios.get('http://localhost:5000/actions')
        .then( res =>{
          console.log(res.data);
          setActions(res.data)
        })
        .catch(err =>{
          console.log(err);
        })
  },[])




  return (
    <div>
      <h1>actions</h1>
      { actions &&
        actions.map( action =>{
          return <Action key={action.id} actions={action} />
        })
      }
    </div>
  )
}
