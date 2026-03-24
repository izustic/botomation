import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		service: "",
		message: "",
	});

	const [submitBtn, setSubmitBtn] = useState({
		text: "Send Message →",
		disabled: false,
		bg: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitBtn({ text: "Sending...", disabled: true, bg: "" });

		setTimeout(() => {
			setSubmitBtn({ text: "✓ Message Sent!", disabled: true, bg: "#22c55e" });
			setTimeout(() => {
				setSubmitBtn({ text: "Send Message →", disabled: false, bg: "" });
				setFormData({
					fname: "",
					lname: "",
					email: "",
					service: "",
					message: "",
				});
			}, 3000);
		}, 1200);
	};

	return (
		<section id="contact">
			<div className="contact-info reveal">
				<p className="section-tag">Get in Touch</p>
				<h2>Let's build something together.</h2>
				<p className="section-sub">
					Have a project in mind? Tell me what you're working on and I'll get
					back to you within 24 hours.
				</p>
				<div className="contact-detail">
					<div className="c-item">
						<div className="c-icon">📧</div>
						<div>
							<div className="c-label">Email</div>
							<div className="c-val">hello@botomation.io</div>
						</div>
					</div>
					<div className="c-item">
						<div className="c-icon">📍</div>
						<div>
							<div className="c-label">Location</div>
							<div className="c-val">Lagos, Nigeria · Remote Worldwide</div>
						</div>
					</div>
					<div className="c-item">
						<div className="c-icon">⏱️</div>
						<div>
							<div className="c-label">Response time</div>
							<div className="c-val">Within 24 hours</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contact-form reveal">
				<form onSubmit={handleSubmit}>
					<div className="form-row">
						<div className="field">
							<label htmlFor="fname">First Name</label>
							<input
								type="text"
								id="fname"
								placeholder="John"
								value={formData.fname}
								onChange={handleChange}
							/>
						</div>
						<div className="field">
							<label htmlFor="lname">Last Name</label>
							<input
								type="text"
								id="lname"
								placeholder="Doe"
								value={formData.lname}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="field">
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							id="email"
							placeholder="john@company.com"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="field">
						<label htmlFor="service">What do you need?</label>
						<select
							id="service"
							value={formData.service}
							onChange={handleChange}
						>
							<option value="">Select a service...</option>
							<option>AI Agent</option>
							<option>Chatbot</option>
							<option>Workflow Automation</option>
							<option>Not sure yet — let's talk</option>
						</select>
					</div>
					<div className="field">
						<label htmlFor="message">Tell me about your project</label>
						<textarea
							id="message"
							placeholder="Describe what you're trying to automate or build..."
							value={formData.message}
							onChange={handleChange}
						></textarea>
					</div>
					<button
						type="submit"
						className="form-submit"
						disabled={submitBtn.disabled}
						style={{ background: submitBtn.bg || "" }}
					>
						{submitBtn.text}
					</button>
				</form>
			</div>
		</section>
	);
}
