/** @format */

import react, { useEffect } from "react";
import ProjectItem from "../components/ProjectItem";
import { atom, selector, useRecoilValue } from "recoil";
import "../assets/styles/Project.scss";

import { langageStateGet } from "../assets/utils/recoilSelector";

import projectContent from "../assets/content/project.json";

export default function Projects() {
	const langage = useRecoilValue(langageStateGet);

	let i = true;

	function reveal() {
		var reveals = document.querySelectorAll(".PI-main");
		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			if (elementTop < windowHeight - 150) {
				reveals[i].classList.add("PI-main-animation");
				reveals[i].hidden = false;
			}
		}
	}

	useEffect(() => {
		reveal();
	}, []);

	window.addEventListener("scroll", reveal);

	return (
		<div id="PR-main">
			{langage === "en"
				? projectContent.en.map((p) => (
						<span
							className={i ? "PR-container1" : "PR-container2"}
							key={p.title}>
							<ProjectItem project={p} />
							{(i = !i)}
						</span>
				  ))
				: projectContent.fr.map((p) => (
						<span
							className={i ? "PR-container1" : "PR-container2"}
							key={p.title}>
							<ProjectItem project={p} />
							{(i = !i)}
						</span>
				  ))}
		</div>
	);
}
