import react from "react";
import ProjectItem from "../components/ProjectItem";

import projectContent from "../assets/content/project.json"

export default function Projects(){

    return(
        <div>
            {projectContent.en.map((p) =>(
                    <div key={p.title}>
                        <ProjectItem project={p} />
                    </div>)
            )}
        </div>
    )
}