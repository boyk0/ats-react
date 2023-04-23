import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import { useParams } from 'react-router-dom';
import { axiosClient, url } from '../../client';
import DatePicker from 'react-datepicker';

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
		axiosClient.patch(`${url}job-openings/${id}`, {...data, __v: undefined, _id: undefined})
			.then()
			.catch(error => {
				console.error(error.message);
				setError(error);
			})
			.finally(() => setSaveLoading(false));
	}

	const loadData = (id) => {
		axiosClient.get(`${url}job-openings/${id}`)
			.then(response => response.data)
			.then(initialData => {
				const data = initialData;
				if (data?.dateOfOpening?.length) {
					data.dateOfOpening = new Date(data.dateOfOpening)
				}
				if (data?.dateOfClosing?.length) {
					data.dateOfClosing = new Date(data.dateOfClosing)
				}
				setData(data)
			})
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
						<input type="text" placeholder={t('Job Openings info title')} value={data.title} disabled={!isEdit} onChange={e => setData({...data, title: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info recruiter')}
					</span>
						<input type="text" placeholder={t('Job Openings info recruiter')} value={data.recruiterName} disabled={!isEdit} onChange={e => setData({...data, recruiterName: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info team lead')}
					</span>
						<input type="text" placeholder={t('Job Openings info team lead')} value={data.teamLead} disabled={!isEdit} onChange={e => setData({...data, teamLead: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info location')}
					</span>
						<input type="text" placeholder={t('Job Openings info location')} value={data.location} disabled={!isEdit} onChange={e => setData({...data, location: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info priority status')}
					</span>
						<input type="text" placeholder={t('Job Openings info priority status')} value={data.priorityStatus} disabled={!isEdit} onChange={e => setData({...data, priorityStatus: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info date of openings')}
					</span>
						<>
							<DatePicker
								dateFormat="dd/MM/yyyy"
								selected={data?.dateOfOpening}
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
						<input type="text" placeholder={t('Job Openings info type')} value={data.type} disabled={!isEdit} onChange={e => setData({...data, type: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info must have')}
					</span>
						<input type="text" placeholder={t('Job Openings info must have')} value={data.mustHave} disabled={!isEdit} onChange={e => setData({...data, mustHave: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info salary range')}
					</span>
						<input type="text" placeholder={t('Job Openings info salary range')} value={data.salaryRange} disabled={!isEdit} onChange={e => setData({...data, salaryRange: e.target.value})}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info date of closing')}
						</span>
						<>
							<DatePicker
								dateFormat="dd/MM/yyyy"
								selected={data?.dateOfClosing}
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
