import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const JobOpenings = () => {
	const { t } = useTranslation();

	const dataContent = (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
		return arr.map((id) =>
			<tr>
				<td>
					<Link to={`/job-openings/info/${id}`}>Office manager</Link>
				</td>
				<td>Cyprus</td>
				<td>Natalia</td>
				<td>High</td>
			</tr>
		);
	}

	return (
		<div className="JobOpenings">
			<div className="JobOpenings-header">
				<h1>
					{t('Job Openings header')}
				</h1>
				<div className="JobOpenings-add">
					<button>
						{t('Add new')}
					</button>
				</div>
			</div>

			<div className="JobOpenings-content">
				<div className="JobOpenings-table">
					<table>
						<tr>
							<th>{t('Job Openings name')}</th>
							<th>{t('Job Openings location')}</th>
							<th>{t('Job Openings recruiter')}</th>
							<th>{t('Job Openings priority')}</th>
						</tr>
						{dataContent()}
					</table>
				</div>
			</div>
		</div>
	);
}
