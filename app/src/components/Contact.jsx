import react from "react";
import { langageStateGet } from "../assets/utils/recoilSelector";
import { useRecoilValue } from "recoil";

import "../assets/styles/Contact.scss"

import cv from "../assets/documents/cv.pdf"

export default function Contact(){

    const langage = useRecoilValue(langageStateGet);

    return(
        <div id="CO-main">
            <a href="mailto:lucas.sovre@yahoo.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                {langage === "en" ? <h3>Email me</h3> : <h3>Contactez moi</h3>}
            </a>
            <a href={cv}>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
                {langage === "en" ? <h3>Get My resume</h3> : <h3>Télechargez mon CV</h3>}
            </a>
        </div>
    )
}