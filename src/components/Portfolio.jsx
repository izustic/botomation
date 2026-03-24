export default function Portfolio() {
	const projects = [
		{
			id: 1,
			icon: "🤖",
			bgGradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
			type: "AI Agent",
			title: "Research & Report Agent",
			desc: "An autonomous agent that takes a topic, searches the web, synthesizes findings, and delivers a structured report — in minutes, not hours.",
			tags: ["Python", "OpenAI", "Web Search"],
		},
		{
			id: 2,
			icon: "💬",
			bgGradient: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
			type: "Chatbot",
			title: "Customer Support Bot",
			desc: "A RAG-powered support bot trained on a company's documentation. Handles 80% of support queries with zero human involvement.",
			tags: ["RAG", "LangChain", "Embeddings"],
		},
		{
			id: 3,
			icon: "⚙️",
			bgGradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
			type: "Automation",
			title: "Lead Qualification Pipeline",
			desc: "An automated pipeline that scores incoming leads, enriches contact data, and routes qualified prospects directly to sales — no manual triage needed.",
			tags: ["API Integration", "AI Scoring", "CRM"],
		},
	];

	return (
		<section id="portfolio">
			<div className="reveal">
				<p className="section-tag">Past Work</p>
				<h2>A few things I've built.</h2>
				<p className="section-sub">
					Projects spanning industries — each one designed to reduce friction
					and amplify output.
				</p>
			</div>
			<div className="portfolio-grid reveal">
				{projects.map((project) => (
					<div key={project.id} className="portfolio-card">
						<div className="p-thumb" style={{ background: project.bgGradient }}>
							{project.icon}
						</div>
						<div className="p-body">
							<div className="p-type">{project.type}</div>
							<div className="p-title">{project.title}</div>
							<p className="p-desc">{project.desc}</p>
							<div className="p-tags">
								{project.tags.map((tag, idx) => (
									<span key={idx} className="ptag">
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
