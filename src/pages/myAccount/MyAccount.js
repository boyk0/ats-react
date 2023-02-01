import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const MyAccount = () => {
	const { t } = useTranslation();

	return (
		<div className="MyAccount">
			<div className="MyAccount-header">
				<h1>
					{t('My Account headline')}
				</h1>
			</div>

			<div className="MyAccount-content">
				<img src="./" alt="photo"/>
				<div className="MyAccount-info">
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account name')}
						</span>
						<span className="data">
							Name
						</span>
					</div>
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account surname')}
						</span>
						<span className="data">
							surname
						</span>
					</div>
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account email')}
						</span>
						<span className="data">
							email
						</span>
					</div>
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account position')}
						</span>
						<span className="data">
							position
						</span>
					</div>
				</div>
				<div className="MyAccount-action">
					<Link to={'/add-recruiter'}>
						{t('My Account add recruiter')}
					</Link>
				</div>
			</div>

			<div className="MyAccount-analytics">
				<div className="MyAccount-analytics-header">
					<h1>
						{t('My Account analytics header')}
					</h1>
				</div>
				<div className="MyAccount-analytics-links">
					<Link to={'/analytics/job-openings/'}>{t('My Account analytics for job openings')}</Link>
					<Link to={'/analytics/recruiters/'}>{t('My Account analytics for recruiters')}</Link>
				</div>
			</div>
		</div>
	);
}
