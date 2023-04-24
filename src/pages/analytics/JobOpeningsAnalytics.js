import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { changeBGColorToWhite } from '../../helpers';
import { axiosClient, url } from '../../client';

export const JobOpeningsAnalytics = () => {
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
		axiosClient.get(`${url}candidate/analytics`)
			.then(response => response.data)
			.then(data => setData(data))
			.catch(error => {
				console.error(error.message)
				setError(error)
			})
			.finally(() => setLoading(false));
	}

	const showData = (candidatesArray) => {
		return candidatesArray.map((candidate) =>
			<tr>
				<td>
					<Link to={`/candidates/info/${candidate?._id}`}>{candidate?.name} {candidate?.surname}</Link>
				</td>
				<td>{candidate?.email}</td>
				<td>{candidate?.location}</td>
				<td>{candidate?.status}</td>
			</tr>
		);
	}

	return (
		<>
			{
				!loading &&
				<div className="JobOpeningsAnalytics">
					<div className="JobOpeningsAnalytics-header">
						<h4>
							{t('Analytics for job openings subheader')}
						</h4>
						<div className="JobOpeningsAnalytics-enter-job-openings">
							<input placeholder={t('Analytics for job openings enter job opening')}/>
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
