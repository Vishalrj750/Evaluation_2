import React from "react";

function Buttons({ handleEvent }) {
    return(
        <div>
            <button onClick={ () => handleEvent("") }>Show All Departments</button>
            <button onClick={ () => handleEvent("Marketing") }>Show Marketing</button>
            <button onClick={ () => handleEvent("HR") }>Show HR</button>
            <button onClick={ () => handleEvent("IT") }>Show IT</button>
            <button onClick={ () => handleEvent("Finance") }>Show Finance</button>
        </div>
    )
}

export { Buttons }