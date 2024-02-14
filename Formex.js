import  { useState } from "react";

function Formex(){
    const[name,setName] = useState("");

    return(
        <form>
            <lable>Enter your name:
                <input type="text"value={name}
                onChange={(e) => setName(e.target.value)}/>
            </lable><br></br>
            The Entered Name:{name}
        </form>
    )
}
export default Formex;