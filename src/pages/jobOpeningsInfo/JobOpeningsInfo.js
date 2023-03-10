import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../client';

export const JobOpeningsInfo = () => {
	const { t } = useTranslation();
	const [isEdit, setIsEdit] = useState(false);
	const [loading, setLoading] = useState(true);
	const [saveLoading, setSaveLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState();

	const { id } = useParams();

	useEffect(() => {
		changeBGColorToBlue()
		if (loading) {
			loadData(id);
		}
	});


	const onEditClick = () => {
		setIsEdit(true)
	}

	const onSave = () => {
		setIsEdit(false)
		setSaveLoading(true)
		axios.patch(`${url}job-openings/${id}`, {...data, __v: undefined, _id: undefined})
			.then()
			.catch(error => {
				console.error(error.message);
				setError(error);
			})
			.finally(() => setSaveLoading(false));
	}

	const loadData = (id) => {
		axios.get(`${url}job-openings/${id}`)
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
			{
				!loading &&

		<div className="JobOpeningsInfo">
		<div className="JobOpeningsInfo-header">
			<h1>
				{isEdit ? t('Edit') : data?.title}
			</h1>
		</div>
		<div className="JobOpeningsInfo-content">
			<div className="row">
				<div className="column">
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info title')}
					</span>
						<input type="text" value={data.title} disabled={!isEdit} onChange={e => setData({...data, title: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info recruiter')}
					</span>
						<input type="text" value={data.recruiterName} disabled={!isEdit} onChange={e => setData({...data, recruiterName: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info team lead')}
					</span>
						<input type="text" value={data.teamLead} disabled={!isEdit} onChange={e => setData({...data, teamLead: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info location')}
					</span>
						<input type="text" value={data.location} disabled={!isEdit} onChange={e => setData({...data, location: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info priority status')}
					</span>
						<input type="text" value={data.priorityStatus} disabled={!isEdit} onChange={e => setData({...data, priorityStatus: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info date of openings')}
					</span>
						<input type="text" value={data.dateOfOpening} disabled={!isEdit} onChange={e => setData({...data, dateOfOpening: e.target.value})}/>
					</div>
				</div>

				<div className="column">
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info type')}
					</span>
						<input type="text" value={data.type} disabled={!isEdit} onChange={e => setData({...data, type: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info must have')}
					</span>
						<input type="text" value={data.mustHave} disabled={!isEdit} onChange={e => setData({...data, mustHave: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info salary range')}
					</span>
						<input type="text" value={data.salaryRange} disabled={!isEdit} onChange={e => setData({...data, salaryRange: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info date of closing')}
					</span>
						<input type="text" value={data.dateOfClosing} disabled={!isEdit} onChange={e => setData({...data, dateOfClosing: e.target.value})}/>
					</div>
				</div>
			</div>


			<div className="actions">
				<div className="edit-button">
					{isEdit
						? <button onClick={onSave}>{t('Save')}</button>
						: <button onClick={onEditClick} disabled={saveLoading}>{saveLoading ? t('Loading') : t('Edit')}</button>
					}
				</div>
			</div>
		</div>
	</div>
			}
			{
				error && <div>{error}</div>
			}
		</>)
}
