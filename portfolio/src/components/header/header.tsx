import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./header.css";

function Header() {
	return (
			<header>
				<div className='headerWrapper'>
					<div className='headerLogo'>
							<img src="" alt="" />
					</div>
					<div className='headerMenu'>
						<ul>
							<li><a>O mnie</a></li>
							<li><a>Umiejętności</a></li>
							<li><a>Praca</a></li>
							<li><a>Kontakt</a></li>
						</ul>
					</div>
				</div>
			</header>
	);
};

export default Header;