import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
	const { t } = useTranslation();

	return(
		<nav>
			<ul>
				<li>
					<Link to={`/`}>{t('Home')}</Link>
				</li>
				<li>
					<Link to={`about-company`}>{t('About company')}</Link>
				</li>
				<li>
					<Link to={`job-openings`}>{t('Job Openings')}</Link>
				</li>
				<li>
					<Link to={`my-account`}>{t('My Account')}</Link>
				</li>
			</ul>
		</nav>
	);
}
