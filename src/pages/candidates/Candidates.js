import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { changeBGColorToWhite } from '../../helpers';
import axios from 'axios';
import { url } from '../../client';

export const Candidates = () => {
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
		axios.get(`${url}candidate/all`)
			.then(data => data.data)
			.then(data => setData(data))
			.catch(error => {
				console.error(error.message);
				setError(error);
			})
			.finally(() => setLoading(false));
	}

	const showData = (candidatesArray) => {
		return candidatesArray.map(data =>
			<tr key={data._id}>
				<td>
					<Link to={`/candidates/info/${data?._id}`}>{data?.name}</Link>
				</td>
				<td>{data?.email}</td>
				<td>{data?.location}</td>
				<td>{data?.jobOpening}</td>
			</tr>
		);
	}

	return (
		<>
			{
				!loading &&
				<div className="Candidates">
					<div className="Candidates-row">
						<div className="Candidates-header">
							<h1>
								{t('Candidates header')}
							</h1>
						</div>

						<div className="Candidates-add">
							<Link to={'/candidates/add'}>
								{t('Add new')}
							</Link>
						</div>
					</div>

					<div className="Candidates-content">
						<div className="Candidates-table">
							<table>
								<tr>
									<th>{t('Candidates name')}</th>
									<th>{t('Candidates email')}</th>
									<th>{t('Candidates location')}</th>
									<th>{t('Candidates job openings')}</th>
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
