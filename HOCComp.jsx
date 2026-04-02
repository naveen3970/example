import { useState } from "react";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Reports from "./Reports";

function Component(){
    const [count,setCount]=useState(1)
    const counter=()=>{
        if(count==1){
            <Dashboard/>
            setCount(count+1)
        }
        else if(count==2){
            <Analytics/>
            setCount(count+1)
        }
        else if(count==3){
            <Reports/>
            setCount(count+1)
        }
        else{
            setCount(1)
        }
    }
    return(
        <>
        <button onClick={counter}>
            click
        </button>
        </>
    )
}
export default Component