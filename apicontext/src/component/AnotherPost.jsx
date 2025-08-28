import React, { useContext } from 'react'
import ApiContext from '../contextApi/ApiContext'
function AnotherPost() {
    const {data} = useContext(ApiContext)
    console.log(`data from anotherpost ${data}`);
    console.log(data,'another post');
  return (
    <div>AnotherPost</div>
  )
}

export default AnotherPost