export default function Hero() {
	return (
		<section id="hero">
			<div className="hero-bg"></div>
			<div className="hero-left">
				<div className="hero-tag">AI Automation & Chatbots</div>
				<h1>
					Build smarter.
					<br />
					<em>Automate</em> faster.
					<br />
					Scale further.
				</h1>
				<p className="hero-sub">
					Botomation helps businesses streamline operations with intelligent AI
					agents and conversational chatbots — so you can focus on what matters.
				</p>
				<div className="hero-btns">
					<a href="#contact" className="btn-primary">
						Start a Project
					</a>
					<a href="#portfolio" className="btn-outline">
						See My Work
					</a>
				</div>
			</div>
			<div className="hero-right">
				<div className="hero-visual">
					<div className="orbit-ring ring1">
						<div className="orbit-dot"></div>
					</div>
					<div className="orbit-ring ring2">
						<div className="orbit-dot accent"></div>
					</div>
					<div className="center-box">
						<img
							src="assets/logo.png"
							alt="Botomation Logo"
							className="center-icon"
						/>
						<div className="center-label">Botomation</div>
					</div>
					<div className="floating-chip chip1">⚡ AI Agents</div>
					<div className="floating-chip chip2">💬 Chatbots</div>
					<div className="floating-chip chip3">🔄 Automation</div>
				</div>
			</div>
		</section>
	);
}
