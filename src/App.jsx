import { useScrollReveal } from "./hooks/useScrollReveal";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
	useScrollReveal();

	return (
		<>
			<Navigation />
			<Hero />
			<StatsBar />
			<Services />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
