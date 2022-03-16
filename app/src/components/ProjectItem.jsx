import react from "react";
import {importAll} from "../assets/utils/myLibrary"
import "../assets/styles/ProjectItem.scss"


export default function ProjectItem({project}){

    const images = importAll(require.context('../assets/img', false, /.(png|jpe?g|svg)$/));

    return(
        <div className="PI-main">
            <div>
                <div>
                    <h2>{project.title}</h2>
                    {project.gitLink ? <a href={project.gitLink} >git</a> : null}
                </div>
                <p>{project.description}</p>
                <div>
                    {project.tech.map((item) =>(
                        <div>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <img src={images[project.img]} />
        </div>
    )
}