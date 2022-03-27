/** @format */

import react from "react";
import { langageStateGet } from "../assets/utils/recoilSelector";
import { useRecoilValue } from "recoil";
import cgu from "../assets/documents/cgu.pdf";

import "../assets/styles/Footer.scss";

export default function Footer() {
	const langage = useRecoilValue(langageStateGet);

	return (
		<div id="FO-main">
			{langage === "en" ? (
				<p>
					<a href={cgu}>Legal Notice 1.0</a> | © 2022 Lucas Sovre |
					Thanks to :{" "}
					<a href="https://gerardm111.github.io/mahaut-gerard/">
						Mahaut Gerard
					</a>{" "}
					Free SVG Background by{" "}
					<a target="_blank" href="https://bgjar.com">
						BGJar
					</a>{" "}
					,{" "}
					<a href="https://icons.getbootstrap.com/">
						BootStrap Icons
					</a>
				</p>
			) : (
				<p>
					<a href={cgu}>Mentions légales 1.0</a> | © 2022 Lucas Sovre
					| Merci à :{" "}
					<a href="https://gerardm111.github.io/mahaut-gerard/">
						Mahaut Gerard
					</a>{" "}
					Free SVG Background by{" "}
					<a target="_blank" href="https://bgjar.com">
						BGJar
					</a>{" "}
					,{" "}
					<a href="https://icons.getbootstrap.com/">
						BootStrap Icons
					</a>
				</p>
			)}
		</div>
	);
}
