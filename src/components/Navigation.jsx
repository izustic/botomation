import { useEffect } from "react";

export default function Navigation() {
	return (
		<nav>
			<a href="#" className="logo">
				Bot<span>omation</span>
			</a>
			<ul className="nav-links">
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#portfolio">Work</a>
				</li>
				<li>
					<a href="#contact" className="nav-cta">
						Get in Touch
					</a>
				</li>
			</ul>
		</nav>
	);
}
