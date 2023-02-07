import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style/navigation.scss';
import logo from './../../static/iamges/logo.png';
export const Navigation = () => {
	const { t } = useTranslation();

	return(
		<nav>
			<ul>
				<li>
					<Link to={`/`}>
						<img src={logo} alt="Logo"/>
						<span>
							{t('Home')}
						</span>
					</Link>
				</li>
				<li>
					<Link to={`about-company`}>{t('About company')}</Link>
				</li>
				<li>
					<Link to={`candidates`}>{t('Candidates')}</Link>
				</li>
				<li>
					<Link to={`job-openings`}>{t('Job Openings')}</Link>
				</li>
			</ul>
			<div className="MyAccount-Link">
					<Link to={`my-account`}>{t('My Account')}</Link>
			</div>
		</nav>
	);
}
