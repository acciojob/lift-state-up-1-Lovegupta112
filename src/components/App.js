
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {

  const [showModal,setShowModal]=useState(false);
  return (
    <div style={{backgroundColor:'purple' ,padding:'1rem'}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
         <Child changeShowModal={setShowModal} modal={showModal}/>
         
    </div>
  )
}

export default App
