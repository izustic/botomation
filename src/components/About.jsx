export default function About() {
	const highlights = [
		{
			icon: "🎯",
			title: "Precision-built for your use case",
			desc: "No off-the-shelf solutions. Every project starts with understanding your exact workflow before a single line of code is written.",
		},
		{
			icon: "🧠",
			title: "AI-native from the ground up",
			desc: "Built using the latest models, frameworks, and tools — not bolt-on AI as an afterthought.",
		},
		{
			icon: "🚀",
			title: "Fast delivery, clean handoffs",
			desc: "Ship fast without sacrificing quality. You get working software, documentation, and full ownership.",
		},
	];

	return (
		<section id="about">
			<div className="reveal">
				<p className="section-tag">About Botomation</p>
				<h2>Automation that actually works.</h2>
				<div className="about-body">
					<p>
						Botomation is a solo practice built on one belief: automation should
						feel effortless for the people using it, and powerful under the
						hood.
					</p>
					<p>
						With a deep focus on AI agents and conversational interfaces, I
						build systems that don't just follow instructions — they think,
						adapt, and deliver results.
					</p>
					<p>
						Whether you're a startup looking to punch above your weight, or an
						established business drowning in manual processes, Botomation turns
						the complex into simple.
					</p>
				</div>
			</div>
			<div className="about-highlights reveal">
				{highlights.map((highlight, idx) => (
					<div key={idx} className="highlight">
						<div className="hl-icon">{highlight.icon}</div>
						<div>
							<div className="hl-title">{highlight.title}</div>
							<div className="hl-desc">{highlight.desc}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
