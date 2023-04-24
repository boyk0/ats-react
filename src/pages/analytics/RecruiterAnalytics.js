import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { changeBGColorToWhite } from '../../helpers';
import { axiosClient, url } from '../../client';

export const RecruiterAnalytics = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		changeBGColorToWhite()
		if (loading) {
			loadData();
		}
	});

	const loadData = () => {
		axiosClient.get(`${url}job-openings/analytics`)
			.then(response => response.data)
			.then(data => setData(data))
			.catch(error => {
				console.error(error.message)
				setError(error)
			})
			.finally(() => setLoading(false));
	}

	const showData = (jobOpeningsArray) => {
		return jobOpeningsArray.map((job) =>
			<tr>
				<td>
					<Link to={`/recruiter/info/${job?.recruiterId}`}>{job?.recruiterName}</Link>
				</td>
				<td>{job?.title}</td>
				<td>{job?.priorityStatus}</td>
				<td>{job?.location}</td>
			</tr>
		);
	}

	return (
		<>
			{
				!loading &&
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
						{showData(data)}
					</table>
				</div>
			</div>
		</div>
			}
			{error && <div>error</div>}
		</>
	);
}
