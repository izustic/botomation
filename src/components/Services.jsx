export default function Services() {
	const services = [
		{
			id: 1,
			icon: "🤖",
			title: "AI Agents",
			desc: "Autonomous agents that reason, plan, and execute complex multi-step tasks without human intervention — from research and data analysis to end-to-end workflow automation.",
			tags: ["OpenAI Agents SDK", "LangChain", "Tool Use"],
		},
		{
			id: 2,
			icon: "💬",
			title: "Chatbots",
			desc: "Intelligent, context-aware chatbots for customer support, lead qualification, onboarding, and internal operations — deployed where your users are.",
			tags: ["RAG", "Multi-channel", "Custom LLMs"],
		},
		{
			id: 3,
			icon: "⚙️",
			title: "Workflow Automation",
			desc: "Connect your tools and eliminate repetitive tasks. From data pipelines to scheduled workflows, your operations run themselves while you sleep.",
			tags: ["API Integration", "Scheduling", "Pipelines"],
		},
	];

	return (
		<section id="services">
			<div className="reveal">
				<p className="section-tag">What I do</p>
				<h2>
					Services built to
					<br />
					move your business.
				</h2>
				<p className="section-sub">
					Every solution is tailored from scratch — no templates, no shortcuts.
					Just intelligent systems designed around your goals.
				</p>
			</div>
			<div className="services-grid reveal">
				{services.map((service) => (
					<div key={service.id} className="service-card">
						<div className="service-icon">{service.icon}</div>
						<div className="service-num">
							{String(service.id).padStart(2, "0")}
						</div>
						<div className="service-title">{service.title}</div>
						<p className="service-desc">{service.desc}</p>
						<div className="service-tags">
							{service.tags.map((tag, idx) => (
								<span key={idx} className="stag">
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
