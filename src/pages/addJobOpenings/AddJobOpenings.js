import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import { axiosClient, url } from '../../client';
import { useNavigate } from 'react-router-dom';

export const AddJobOpenings = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	useEffect(() => {
		changeBGColorToBlue()
	});

	const defaultJobOpenings = {
		title: '',
		recruiterName: '',
		teamLead: '',
		location: '',
		priorityStatus: '',
		dateOfOpening: '',
		type: '',
		mustHave: '',
		salaryRange: '',
		dateOfClosing: '',
	}

	const [data, setData] = useState({...defaultJobOpenings})

	const onSave = async () => {
		await axiosClient.post(`${url}job-openings`, data)
			.then(() => navigate('/job-openings'))
			.catch(error => console.error(error.message))
	}

	return <div className="JobOpeningsInfo">
		<div className="JobOpeningsInfo-header">
			<h1>
				{t('Add New Job Opening Header')}
			</h1>
		</div>
		<div className="JobOpeningsInfo-content">
			<div className="row">

				<div className="column">
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info title')}
						</span>
						<input type="text" placeholder={t('Job Openings info title')} value={data.title} onChange={e => setData({...data, title: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info recruiter')}
						</span>
						<input type="text" value={data.recruiterName} placeholder={t('Job Openings info recruiter')} onChange={e => setData({...data, recruiterName: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info team lead')}
						</span>
						<input type="text" value={data.teamLead} placeholder={t('Job Openings info team lead')} onChange={e => setData({...data, teamLead: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info location')}
						</span>
						<input type="text" value={data.location} placeholder={t('Job Openings info location')} onChange={e => setData({...data, location: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info priority status')}
						</span>
						<input type="text" value={data.priorityStatus} placeholder={t('Job Openings info priority status')} onChange={e => setData({...data, priorityStatus: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info date of openings')}
						</span>
						<input type="text" value={data.dateOfOpening} placeholder={t('Job Openings info date of openings')} onChange={e => setData({...data, dateOfOpening: e.target.value})}/>
					</div>
				</div>

				<div className="column">
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info type')}
					</span>
					<input type="text" value={data.type} placeholder={t('Job Openings info type')} onChange={e => setData({...data, type: e.target.value})}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info must have')}
					</span>
					<input type="text" value={data.mustHave} placeholder={t('Job Openings info must have')} onChange={e => setData({...data, mustHave: e.target.value})}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info salary range')}
					</span>
					<input type="text" value={data.salaryRange} placeholder={t('Job Openings info salary range')} onChange={e => setData({...data, salaryRange: e.target.value})}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info date of closing')}
					</span>
					<input type="text" value={data.dateOfClosing} placeholder={t('Job Openings info date of closing')} onChange={e => setData({...data, dateOfClosing: e.target.value})}/>
				</div>
			</div>
			</div>


			<div className="actions">
				<div className="edit-button">
					<button onClick={onSave}>{t('Save')}</button>
				</div>
			</div>
		</div>
	</div>
}
