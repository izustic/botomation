export default function StatsBar() {
	const stats = [
		{ num: "10×", label: "Faster workflows" },
		{ num: "24/7", label: "Always-on automation" },
		{ num: "100%", label: "Custom-built solutions" },
		{ num: "0", label: "Repetitive tasks left behind" },
	];

	return (
		<div className="stats-bar reveal">
			{stats.map((stat, idx) => (
				<div key={idx} className="stat">
					<div className="stat-num">{stat.num}</div>
					<div className="stat-label">{stat.label}</div>
				</div>
			))}
		</div>
	);
}
