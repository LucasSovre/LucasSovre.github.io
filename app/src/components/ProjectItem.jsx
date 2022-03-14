import react from "react";

export default function ProjectItem({project}){

    return(
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
    )
}