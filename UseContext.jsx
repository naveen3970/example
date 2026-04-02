import { Context } from "./CreateContext";
import { useContext } from "react";
function Consumer(){
const CurrentTheme=useContext(Context)
    return(
        <>
        <div>Current Theme is {CurrentTheme} </div>
        </>
    )
}
export default Consumer;