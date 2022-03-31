/** @format */

import react from "react";
import { useRecoilValue } from "recoil";
import { langageStateGet } from "../assets/utils/recoilSelector";

import esiee_it_black from "../assets/img/logo/esiee_it_black.svg";
import esiee_it from "../assets/img/logo/esiee-it.jpg";
import radio_beguin from "../assets/img/logo/radio-beguin.svg";
import radio_beguin_black from "../assets/img/logo/radio-beguin_black.svg";

import "../assets/styles/Carrer.scss";

export default function Career() {
	const langage = useRecoilValue(langageStateGet);

	return (
		<div id="CA-main">
			{langage === "en" ? (
				<h2>I have worked with :</h2>
			) : (
				<h2>Les entreprises avec lesquelles j'ai travaillé:</h2>
			)}
			<div id="CA-container">
				<img
					src={esiee_it_black}
					onMouseEnter={(e) => {
						e.target.src = esiee_it;
					}}
					onMouseLeave={(e) => {
						e.target.src = esiee_it_black;
					}}
					alt="esiee-it"
				/>
				<img
					src={radio_beguin_black}
					onMouseEnter={(e) => {
						e.target.src = radio_beguin;
					}}
					onMouseLeave={(e) => {
						e.target.src = radio_beguin_black;
					}}
					alt="radio-béguin"
				/>
			</div>
		</div>
	);
}
