import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomizedTimeline from "../customizedTimeline/customizedTimeline";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import './work.css';

function Work() {
	return (
    <div className="workWrapper">
      <h3>Praca <span><FontAwesomeIcon icon={faBriefcase} /></span></h3>
			<CustomizedTimeline />
    </div>
	);
};

export default Work;