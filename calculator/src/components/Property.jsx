import React from 'react'

function Property({obj}) {
  return (<>
    <div>{obj.name}</div>
    <div>{obj.age}</div>
    <div>{obj.college}</div>
    </>
  )
}

export default Property