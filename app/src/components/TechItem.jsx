/** @format */

import react from "react";
import { importAll } from "../assets/utils/myLibrary";
import "../assets/styles/TechItem.scss";

export default function TechItem({ item }) {
	const images = importAll(
		require.context("../assets/img/logo", false, /.(png|jpe?g|svg)$/)
	);

	return (
		<div>
			<img
				id={item.name}
				className="TI-img"
				onMouseEnter={(e) => {
					e.target.src = images[item.url_colored];
				}}
				onMouseLeave={(e) => {
					e.target.src = images[item.url_black];
				}}
				src={images[item.url_black]}
			/>
		</div>
	);
}
