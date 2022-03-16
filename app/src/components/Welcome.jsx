import react from "react";
import fakeMe from "../assets/img/fakeMe.png"
import "../assets/styles/Welcome.scss"

export default function Welcome (){

    return(
        <div id="WL-main">
            <div id="WL-text">
                <div style={{"display" : "flex", "flexDirection" : "column"}}>
                    <h1>Lucas<br/>Sovre</h1>
                    <h3>I am an informatic engineer, fullStack developer and data architect</h3>
                    <a>Contact</a>
                </div>
            </div>
            <div id="WL-img">
                <img alt="pic of me smiling" />
            </div>
        </div>
    )
}