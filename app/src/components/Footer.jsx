import react from "react";
import { langageStateGet } from "../assets/utils/recoilSelector";
import { useRecoilValue } from "recoil";
import cgu from "../assets/documents/cgu.pdf"

import "../assets/styles/Footer.scss"

export default function Footer (){

    const langage = useRecoilValue(langageStateGet);

    return(
        <div id="FO-main">
            {
                langage === "en" ?
                <p>
                    <a href={cgu} >Legal Notice</a> | © 2022 Lucas Sovre
                </p>
                :
                <p>
                <a href={cgu} >Mentions légales</a> | © 2022 Lucas Sovre
                </p>
            }
        </div>
    )
}