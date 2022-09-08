import { TopBar } from '../../components/TopBar';
import { AiOutlineBulb } from 'react-icons/ai';
import './styles.css';

export default function About(props) {
	return (
		<main className="main-app-area">
			<TopBar type="slogan" />
			<AboutIntro />
		</main>
	);
}

const AboutIntro = () => {
	return (
		<div className="about-intro">
			<div className="about-col-1">
				<AiOutlineBulb color="#AA0000" size={170} />
			</div>
			<div className="about-col-2">
				<h1 className="about-intro-title-super">About</h1>
				<h1 className="about-intro-title">LEFTNIX</h1>
				<h2>How commie is your favorite movie?</h2>
				<p style={{ whiteSpace: 'pre-wrap' }}>
					{`LEFTNIX is a movie rating platform that allows the audience to see though the flashy eye-candy multi-million dollar money laundering schemes everyone insists to call movies... and... I kind of forgot how the sentence started. 

Wait... 
Oh! right: 

to see through the movies and find out what ethics and political ideologies they present through their narrative.`}
				</p>
			</div>
			<div className="about-col-3">
				<div>
					Wait, what?
					{' >'}
				</div>
			</div>
		</div>
	);
};
