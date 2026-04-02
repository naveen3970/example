import { memo } from "react"

const Reports=memo(({data})=>{
    return(
        <>
        <h4>Reports</h4>
        <div>
            {data}
        </div>
        <div>
            Please wait...
        </div>
        </>
    )
})
export default Reports