import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import { axiosClient, url } from '../../client';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

export const AddJobOpenings = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
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
		recruiterId: '',
	}
	const [data, setData] = useState({...defaultJobOpenings})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [recruiters, setRecruiters] = useState([])

	useEffect(() => {
		changeBGColorToBlue()
		if (!recruiters.length && !error) {
			loadRecruiters()
		}
	});

	const loadRecruiters = async () => {
		setLoading(true)
		await axiosClient.get(`${url}recruiter/all`)
			.then(response => response.data)
			.then(data => {
				setRecruiters(data)
			})
			.catch(error => {
				console.error(error)
				setError(error)
			})
			.finally(setLoading(false))
	}

	const onSave = async () => {
		await axiosClient.post(`${url}job-openings`, data)
			.then(() => navigate('/job-openings'))
			.catch(error => console.error(error.message))
	}

	return <>
		<div className="JobOpeningsInfo">
		<div className="JobOpeningsInfo-header">
			<h1>
				{t('Add New Job Opening Header')}
			</h1>
		</div>
			{
				!loading &&
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
						<select value={JSON.stringify({recruiterId: data?.recruiterId, recruiterName: data?.recruiterName})} onChange={e => {
							const value = JSON.parse(e.target.value)
							setData({...data, ...value})
						}}>
							<option value=''>{t('Job Openings info recruiter')}</option>
							{recruiters.map(el => <option value={JSON.stringify({recruiterId: el._id, recruiterName: el.name})}>{el.name} {el.surname}</option>)}
						</select>
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
						<>
							<DatePicker
								dateFormat="dd/MM/yyyy"
								selected={data.dateOfOpening}
								onChange={(date) => setData({...data, dateOfOpening: date})}
								className={"datepicker-input"}
								placeholderText={t('Job Openings info date of openings')}
							/>
						</>
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
					<>
						<DatePicker
							dateFormat="dd/MM/yyyy"
							selected={data.dateOfClosing}
							onChange={(date) => setData({...data, dateOfClosing: date})}
							className={"datepicker-input"}
							placeholderText={t('Job Openings info date of closing')}
						/>
					</>
				</div>
			</div>
			</div>


			<div className="actions">
				<div className="edit-button">
					<button onClick={onSave}>{t('Save')}</button>
				</div>
			</div>
		</div>
			}
			{error}
	</div>
		</>
}
