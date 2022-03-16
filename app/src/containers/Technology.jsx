import react from "react";
import techno from "../assets/content/technology.json"
import TechItem from "../components/TechItem";
import "../assets/styles/Technology.scss"

export default function Technology(){

    return(
        <div id="TE-main">
            {techno.map((item) =>(
                <TechItem item={item} />
            ))}
        </div>
    )

}