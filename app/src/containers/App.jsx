/** @format */

import React, { useEffect } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Projects from "./Projects";
import Technology from "./Technology";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../assets/styles/main.scss";

export default function App() {
	useEffect(() => {
		umami.trackView("/");
	}, []);

	return (
		<div>
			<Header />
			<Welcome />
			<Technology />
			<span id="project-anchor"></span>
			<Projects />
			<span id="career-anchor"></span>
			<Career />
			<span id="contact-anchor"></span>
			<Contact />
			<Footer />
		</div>
	);
}
