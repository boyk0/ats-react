import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const RecruiterAnalytics = () => {
	const { t } = useTranslation();

	const dataContent = (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
		return arr.map((id) =>
			<tr>
				<td>
					<Link to={`/recruiter/info/${id}`}>Natalia</Link>
				</td>
				<td>Office manager</td>
				<td>High</td>
				<td>Cyprus</td>
			</tr>
		);
	}

	return (
		<div className="RecruiterAnalytics">
			<div className="RecruiterAnalytics-header">
				<h4>
					{t('Recruiter Analytics subheader')}
				</h4>
			</div>
			<div className="RecruiterAnalytics-content">
				<div className="RecruiterAnalytics-table">
					<table>
						<tr>
							<th>{t('Recruiter Analytics table recruiter name')}</th>
							<th>{t('Recruiter Analytics table job opening')}</th>
							<th>{t('Recruiter Analytics table priority')}</th>
							<th>{t('Recruiter Analytics table location')}</th>
						</tr>
						{dataContent()}
					</table>
				</div>
			</div>
		</div>
	);
}
