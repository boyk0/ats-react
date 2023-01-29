import { Link } from 'react-router-dom';

export const Navigation = () => {
	return(
		<nav>
			<ul>
				<li>
					<Link to={`/`}>Home</Link>
				</li>
				<li>
					<Link to={`about`}>About</Link>
				</li>
				<li>
					<Link to={`job-openings`}>Job Openings</Link>
				</li>
			</ul>
		</nav>
	);
}
