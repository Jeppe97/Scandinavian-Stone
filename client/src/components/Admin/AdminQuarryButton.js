import React from "react";
import { Link } from "react-router-dom";
import AdminDropdownMenuPlace from "./AdminDropdownMenuPlace"
function AdminQuarryButton(props)  {
   
    
    return (
       <div>
           {console.log(props.path)}
           <AdminDropdownMenuPlace path={props.path}/>
           <Link to="/statistics">
           <h1>{props.quarry}</h1>
           <button
          className="btn1"          
          >
          Godkänn
        </button>
        </Link>
       </div>
   ) 

}
export default AdminQuarryButton