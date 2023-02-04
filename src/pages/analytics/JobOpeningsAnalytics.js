import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const JobOpeningsAnalytics = () => {
	const { t } = useTranslation();

	const dataContent = (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
		return arr.map((id) =>
			<tr>
				<td>
					<Link to={`/candidates/info/${id}`}>Maira Silladou</Link>
				</td>
				<td>email@example.com</td>
				<td>Cyprus</td>
				<td>Offer</td>
			</tr>
		);
	}

	return (
		<div className="JobOpeningsAnalytics">
			<div className="JobOpeningsAnalytics-header">
				<h1>
					{t('Job Openings header')}
				</h1>
				<h3>
					{t('Analytics for job openings subheader')}
				</h3>
				<div className="JobOpeningsAnalytics-enter-job-openings">
					<input placeholder={t('Analytics for job openings enter job opening')}>
					</input>
				</div>
			</div>


			<div className="JobOpeningsAnalytics-content">
				<div className="JobOpenings-table">
					<table>
						<tr>
							<th>{t('Analytics for job openings table name')}</th>
							<th>{t('Analytics for job openings table email')}</th>
							<th>{t('Analytics for job openings table location')}</th>
							<th>{t('Analytics for job openings table candidate status')}</th>
						</tr>
						{dataContent()}
					</table>
				</div>
			</div>
		</div>
	);
}
