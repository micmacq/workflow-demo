import { DataTable } from "@/components/data-table"
import data from "./data.json"

const Project = ()=>{
    return (
        <DataTable data={data} />
    )
}

export default Project;
