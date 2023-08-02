import React from "react";

function Employee(props){

    //props.name = "something in my heart"; //cant change here in the child but can be done in parenta

    return (
    <div>
    <h3>Employee {props.name}</h3>
    <p>{props.role ? props.role: "No role"}</p>

    {props.role ? <p class="role">{props.role}</p> : <p class="norole">Another way:No role</p>}

     </div>
    );
}

export default Employee;