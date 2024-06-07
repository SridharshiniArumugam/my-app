import React from "react";
import Electronics from "./Electronics";
import Furniture from "./Furniture";
import "./Styles.css"

function App(){
  return(
     <>
    <h1>Web tables</h1>
    <table>
      <tr >
     <th>Label</th>
     <th>value</th>
     <th>Input</th>
     <th>Allocation%</th>
     <th>Allocation Val</th>
     <th>variance%</th>
     </tr>
      <Electronics/>
      <Furniture/>
      </table>
  </> 
  )
}
export default App
