import React, { useState } from 'react'

function Folder({explorer}) {
  console.log(explorer)

  const [expand, setexpand]=useState(false)

  if(explorer.isFolder)
 { return (
    <div style={{marginTop:"20px"}}>
      <div className='folder' onClick={()=> setexpand(!expand)}>
        <span>📂 {explorer.name}</span>
      </div>

      <div style={{display: expand ? 'block' : 'none', paddingLeft:25} }>
        {explorer.items.map((exp)=>{
          return(
            <><Folder explorer={exp}/></>
          )

        })}
      </div>
    </div>
  )}
  else{
    return <span className='file'>🗄️ {explorer.name}</span>
  }
}

export default Folder

