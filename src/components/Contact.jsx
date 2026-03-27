import { useState } from "react";
import emailjs from "emailjs-com";

// Initialize EmailJS with public key from environment
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

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

	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};

		// First Name validation
		if (!formData.fname.trim()) {
			newErrors.fname = "First name is required";
		}

		// Last Name validation
		if (!formData.lname.trim()) {
			newErrors.lname = "Last name is required";
		}

		// Email validation
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		// Service validation
		if (!formData.service.trim()) {
			newErrors.service = "Please select a service";
		}

		// Message validation
		if (!formData.message.trim()) {
			newErrors.message = "Please tell us about your project";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
		// Clear error for this field when user starts typing
		if (errors[id]) {
			setErrors((prev) => ({
				...prev,
				[id]: "",
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form before submission
		if (!validateForm()) {
			return;
		}

		setSubmitBtn({ text: "Sending...", disabled: true, bg: "" });
		const fullName = `${formData.fname} ${formData.lname}`.trim();

		try {
			// Send admin notification
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					to_email: "izuchukwuobi997@gmail.com",
					from_name: `${formData.fname} ${formData.lname}`,
					from_email: formData.email,
					service_type: formData.service,
					message: formData.message,
				},
			);

			// Send auto-reply to sender
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
				{
					to_email: formData.email,
					to_name: fullName || "there",
					from_name: "Botomation Team",
					service_type: formData.service,
					message: formData.message,
				},
			);

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
		} catch (error) {
			console.error("Failed to send email:", error);
			setSubmitBtn({
				text: "✗ Failed to send",
				disabled: false,
				bg: "#ef4444",
			});
			setTimeout(() => {
				setSubmitBtn({ text: "Send Message →", disabled: false, bg: "" });
			}, 3000);
		}
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
							{/* <div className="c-val">hello@botomation.io</div> */}
							<div className="c-val">izuchukwuobi997@gmail.com</div>
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
								className={errors.fname ? "error" : ""}
							/>
							{errors.fname && (
								<span className="error-message">{errors.fname}</span>
							)}
						</div>
						<div className="field">
							<label htmlFor="lname">Last Name</label>
							<input
								type="text"
								id="lname"
								placeholder="Doe"
								value={formData.lname}
								onChange={handleChange}
								className={errors.lname ? "error" : ""}
							/>
							{errors.lname && (
								<span className="error-message">{errors.lname}</span>
							)}
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
							className={errors.email ? "error" : ""}
						/>
						{errors.email && (
							<span className="error-message">{errors.email}</span>
						)}
					</div>
					<div className="field">
						<label htmlFor="service">What do you need?</label>
						<select
							id="service"
							value={formData.service}
							onChange={handleChange}
							className={errors.service ? "error" : ""}
						>
							<option value="">Select a service...</option>
							<option>AI Agent</option>
							<option>Chatbot</option>
							<option>Workflow Automation</option>
							<option>Not sure yet — let's talk</option>
						</select>
						{errors.service && (
							<span className="error-message">{errors.service}</span>
						)}
					</div>
					<div className="field">
						<label htmlFor="message">Tell me about your project</label>
						<textarea
							id="message"
							placeholder="Describe what you're trying to automate or build..."
							value={formData.message}
							onChange={handleChange}
							className={errors.message ? "error" : ""}
						></textarea>
						{errors.message && (
							<span className="error-message">{errors.message}</span>
						)}
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
