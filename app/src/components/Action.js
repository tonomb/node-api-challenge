import React from 'react'

export default function Actions({actions}) {
  return (
    <div key={actions.id} className='actions-card'>
              <h2>{actions.description}</h2>
              <h3>{actions.notes}</h3>
              <h4>{actions.completed ? 'Completed': 'Not completed'}</h4>
    </div>
  )
}
