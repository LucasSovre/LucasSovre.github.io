import react from "react";
import { langageStateGet } from "../assets/utils/recoilSelector";
import { useRecoilValue } from "recoil";

import "../assets/styles/Footer.scss"

export default function Footer (){

    const langage = useRecoilValue(langageStateGet);

    return(
        <div id="FO-main">
            {
                langage === "en" ?
                <p>
                    <a>Legal Notice</a> | © 2022 Lucas Sovre
                </p>
                :
                <p>
                <a>Mentions légales</a> | © 2022 Lucas Sovre
                </p>
            }
        </div>
    )
}