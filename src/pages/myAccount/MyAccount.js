import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { changeBGColorMyAccount } from '../../helpers';
import { useEffect, useState } from 'react';
import image from '../../static/images/image-add.png'
import { axiosClient, url } from '../../client';

export const MyAccount = () => {
	const { t } = useTranslation();

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const [data, setData] = useState({});

	useEffect(() => {
		changeBGColorMyAccount()

		if (loading) {
			loadData();
		}
	});

	const loadData = () => {
		axiosClient.get(`${url}auth/profile`)
			.then(response => response.data)
			.then(data => setData(data))
			.catch(error => {
				console.error(error.message);
				setError(error);
			})
			.finally(() => setLoading(false));
	}


	return (
		<>
			{!loading &&
		<div className="MyAccount">
			<div className="MyAccount-header">
				<h1>
					{t('My Account headline')}
				</h1>
			</div>

			<div className="MyAccount-content">
				<div className="image">
					<img src={image} alt="photo"/>
				</div>

				<div className="MyAccount-info">
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account name')}
						</span>
						<span className="data">
							{data.name}
						</span>
					</div>
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account surname')}
						</span>
						<span className="data">
							{data.surname}
						</span>
					</div>
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account email')}
						</span>
						<span className="data">
							{data.email}
						</span>
					</div>
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account position')}
						</span>
						<span className="data">
							{data.position}
						</span>
					</div>
				</div>

			</div>

			{
				data.position == 'Head of HR' && <div className="MyAccount-action">
					<Link to={'/add-recruiter'}>
						{t('My Account add recruiter')}
					</Link>
				</div>
			}

			{
				data.position == 'Head of HR' && <div className="MyAccount-analytics">
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
			}
		</div>
			}

			{error && <div>error</div>}
		</>
	);
}
