//import React, { Component } from 'react'
import ParentComponent from './Components/ParentComponent'
import ApiData from './Api'

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Employee Details</h1>
<ParentComponent/>
<br></br><br></br>
<ApiData/>

    </div>
    
  )
}

export default App