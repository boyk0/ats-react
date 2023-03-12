import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { changeBGColorToViolet } from '../../helpers';
import axios from 'axios';
import { url } from '../../client';

export const JobOpenings = () => {
	const { t } = useTranslation();
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		changeBGColorToViolet()
		if (loading) {
			loadData();
		}
	});

	const loadData = () => {
		axios.get(`${url}job-openings/all`)
			.then(data => data.data)
			.then(data => setData(data))
			.catch(error => {
				console.error(error.message);
				setError(error);
			})
			.finally(() => setLoading(false));
	}

	const showData = (jobOpenings) => {
		return jobOpenings.map((data) =>
			<tr>
				<td>
					<Link to={`/job-openings/info/${data?._id}`}>{data?.title}Office manager</Link>
				</td>
				<td>{data?.location}</td>
				<td>{data?.recruiterName}</td>
				<td>{data?.priorityStatus}</td>
			</tr>
		);
	}

	return (
		<>
			{
				!loading &&
				<div className="JobOpenings">
					<div className="JobOpenings-row">

						<div className="JobOpenings-header">
							<h1>
								{t('Job Openings header')}
							</h1>
						</div>
						<div className="JobOpenings-add">
							<Link to={`/job-openings/add`}>{t('Add new')}</Link>
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
