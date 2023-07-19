import React from "react";


const Child=({changeShowModal,modal})=>{

    return (
        <>
        <div style={{backgroundColor:'#7f1a1a',padding:'1rem'}}>
            
            <h2>Child Component</h2>
            <button onClick={()=>changeShowModal(true)}>Show Modal</button>
            {modal && <div>
          <h2>Modal Content</h2>
          <p>This is the modal Content</p>
         </div>}
        </div>
        </>
    )
}
export default Child;