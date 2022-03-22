import react , {useEffect} from "react";
import { langageStateGet } from "../assets/utils/recoilSelector";
import { useRecoilValue } from "recoil";
import fakeMe from "../assets/img/fakeMe.png"

import "../assets/styles/Welcome.scss"

export default function Welcome (){

    function disapear() {
        var reveals = document.querySelectorAll("#WL-main");
        for (var i = 0; i < reveals.length; i++) {
          var elementTop = reveals[i].getBoundingClientRect().top;
          if (elementTop < -450) {
            document.getElementById("HD-main").classList.add("HD-scrolled")
          }
          else{
            document.getElementById("HD-main").classList.remove("HD-scrolled")
          }
        }
      }

    function umamiTrackMainContact () {
        umami.trackEvent('Contact button welcome component click', 'contact main');
    }

    useEffect(() => {
        disapear()
    },[]);

    window.addEventListener("scroll", disapear);

    const langage = useRecoilValue(langageStateGet);

    return(
        <div id="WL-main">
            <div id="WL-text">
                <div style={{"display" : "flex", "flexDirection" : "column"}}>
                    <h1>Lucas<br/>Sovre</h1>
                    {
                        langage === "en" ? 
                        <h3>I am an informatic engineer specialised in software, informatic architecure and web technologies</h3>
                        :
                        <h3>Je suis un ingénieur informatique spécialisé en developpement logicielle, architecure informatique et technologies web.</h3>
                    }
                    {
                        langage === "en" ? 
                        <a href="mailto:lucas.sovre@yahoo.com" onClick={() => {umamiTrackMainContact()}}>Contact</a>
                        :
                        <a href="mailto:lucas.sovre@yahoo.com" onClick={() => {umamiTrackMainContact()}}>Contactez moi</a>
                    }
                </div>
            </div>
            <div id="WL-img">
                <img alt="pic of me smiling" />
            </div>
        </div>
    )
}