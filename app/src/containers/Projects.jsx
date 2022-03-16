import react from "react";
import ProjectItem from "../components/ProjectItem";
import "../assets/styles/Project.scss"

import projectContent from "../assets/content/project.json"

export default function Projects(){

    let i = true;

    return(
        <div id="PR-main">
            {projectContent.en.map((p) =>(
                    <span className={i ? "PR-container1" : "PR-container2"} key={p.title}>
                        <ProjectItem project={p} />
                        {i=!i}
                    </span>)
            )
            }
        </div>
    )
}