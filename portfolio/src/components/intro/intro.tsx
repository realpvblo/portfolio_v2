import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./intro.css";
import { faChevronRight, faHandPointRight } from "@fortawesome/free-solid-svg-icons";

function Intro() {
	return (
			<div className="intro">
				<div className="introWrapper">
					<img className="introAvatar" src="/78243008.jpeg" alt="" />
					<h2>Witaj <span className="waving-hand">👋</span></h2>
					<p>Jestem front-end developerem, który specjalizuje się w tworzeniu stron i aplikacji internetowych. Moje umiejętności obejmują HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js, i wiele innych. Zapraszam do zapoznania się z moim portfolio.</p>
					<div className="introSocials">

					</div>
					<button className="contactButtonn">Kontakt <span><FontAwesomeIcon icon={faHandPointRight} /></span></button>
				</div>
				<div className="imageWrapper">
					<img src="/me.png" alt="" />
				</div>
			</div>
	);
};

export default Intro;