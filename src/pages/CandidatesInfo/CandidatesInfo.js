import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import imageAdd from '../../static/images/image-add.png';
import { axiosClient, url } from '../../client';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';

export const CandidatesInfo = () => {
	const { t } = useTranslation();
	const [isEdit, setIsEdit] = useState(false);
	const [loading, setLoading] = useState(true);
	const [saveLoading, setSaveLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [jobOpenings, setJobOpenings] = useState([])

	const { id } = useParams();

	useEffect(() => {
		changeBGColorToBlue();
		if (loading) {
			loadData(id);
		}
	});

	const loadData = (id) => {
		axiosClient.get(`${url}candidate/${id}`)
			.then(response => response.data)
			.then(initialData => {
				const data = initialData;
				if (data?.contactDate?.length) {
					data.contactDate = new Date(data.contactDate)
				}
				if (data?.dateOfInterview?.length) {
					data.dateOfInterview = new Date(data.dateOfInterview)
				}
				if (data?.dateOfTTSent?.length) {
					data.dateOfTTSent = new Date(data.dateOfTTSent)
				}
				if (data?.dateOfTTDone?.length) {
					data.dateOfTTDone = new Date(data.dateOfTTDone)
				}
				if (data?.dateOfFinalInterview?.length) {
					data.dateOfFinalInterview = new Date(data.dateOfFinalInterview)
				}
				if (data?.dateOfOfferSent?.length) {
					data.dateOfOfferSent = new Date(data.dateOfOfferSent)
				}
				setData(data)
			})
			.catch(error => {

				console.error(error.message);
				setError(error);
			})
			.finally(() => setLoading(false))
			.then(() => loadJobOpenings());

	}

	const onEditClick = () => {
		setIsEdit(true)
	}

	const onSave = () => {
		setIsEdit(false)
		setSaveLoading(true)
		axiosClient.patch(`${url}candidate/${id}`, {...data, __v: undefined, _id: undefined})
			.then()
			.catch(error => {
				console.error(error.message);
				setError(error);
			})
			.finally(() => setSaveLoading(false));
	}

	const loadJobOpenings = async () => {
		setLoading(true)
		await axiosClient.get(`${url}job-openings/all`)
			.then(response => response.data)
			.then(data => {
				setJobOpenings(data)
			})
			.catch(error => {
				console.error(error)
				setError(error)
			})
			.finally(setLoading(false))
	}

	const filterPassedTime = (time) => {
		const currentDate = new Date();
		const selectedDate = new Date(time);

		return currentDate.getTime() < selectedDate.getTime();
	};

	return (
		<>
			{
				!loading &&
				<div className="CandidatesInfo">
					<div className="CandidatesInfo-header">
						<h1>
							{isEdit ? t('Edit') : `${data?.name}`}
						</h1>
					</div>
					<div className="CandidatesInfo-content">
						<div className="row">

							<div className="column">
								<div className="image">
									<img src={imageAdd} alt="Image"/>
								</div>
							</div>

							<div className="column">
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Name')}
									</span>
									<input type="text" value={data?.name} disabled={!isEdit} onChange={e => setData({...data, name: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Surname')}
									</span>
									<input type="text" value={data?.surname} disabled={!isEdit} onChange={e => setData({...data, surname: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Location')}
									</span>
									<input type="text" value={data?.location} disabled={!isEdit} onChange={e => setData({...data, location: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Mobile')}
									</span>
									<input type="text" value={data?.mobile} disabled={!isEdit} onChange={e => setData({...data, mobile: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info E-mail')}
									</span>
									<input type="text" value={data?.email} disabled={!isEdit} onChange={e => setData({...data, email: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Telegram nickname')}
									</span>
									<input type="text" value={data?.telegramNick} disabled={!isEdit} onChange={e => setData({...data, telegramNick: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Linkedin URL')}
									</span>
									<input type="text" value={data?.linkedInLink} disabled={!isEdit} onChange={e => setData({...data, linkedInLink: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info English Level')}
									</span>
									<select disabled={!isEdit} value={data?.englishLevel} onChange={e => setData({...data, englishLevel: e.target.value})}>
										<option value=''>{t('Candidates info English Level')}</option>
										<option value={t('English level Basic')}>{t('English level Basic')}</option>
										<option value={t('English level Pre-intermediate')}>{t('English level Pre-intermediate')}</option>
										<option value={t('English level Intermediate')}>{t('English level Intermediate')}</option>
										<option value={t('English level Upper-intermediate')}>{t('English level Upper-intermediate')}</option>
										<option value={t('English level Advanced')}>{t('English level Advanced')}</option>
									</select>
								</div>
							</div>

							<div className="column">
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Job Openings')}
									</span>
									<select disabled={!isEdit} value={JSON.stringify({jobOpeningId: data?.jobOpeningId, jobOpening: data?.jobOpening})} onChange={e => {
										const value = JSON.parse(e.target.value)
										setData({...data, ...value})
									}}>
										<option value='' >{t('Candidates info Job Openings')}</option>
										{jobOpenings.map(el => <option value={JSON.stringify({jobOpeningId: el._id, jobOpening: el.title})}>{el.title}</option>)}
									</select>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Seniority Level')}
									</span>
									<input type="text" value={data?.seniorityLevel} disabled={!isEdit} onChange={e => setData({...data, seniorityLevel: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Skill Set')}
									</span>
									<input type="text" value={data?.skillSet} disabled={!isEdit} onChange={e => setData({...data, skillSet: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Contact Date')}
									</span>
									<>
										<DatePicker
											dateFormat="dd/MM/yyyy"
											selected={data?.contactDate}
											onChange={(date) => setData({...data, contactDate: date})}
											className={"datepicker-input"}
											disabled={!isEdit}
											placeholderText={t('Candidates info Contact Date')}
										/>
									</>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of Interview')}
									</span>
									<>
										<DatePicker
											dateFormat="dd/MM/yyyy h:mm aa"
											showTimeSelect
											filterTime={filterPassedTime}
											selected={data?.dateOfInterview}
											minDate={new Date()}
											onChange={(date) => setData({...data, dateOfInterview: date})}
											className={"datepicker-input"}
											disabled={!isEdit}
											placeholderText={t('Candidates info Date of Interview')}
										/>
									</>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Feedback after interview')}
									</span>
									<input type="text" value={data?.feedbackAfterInterview} disabled={!isEdit} onChange={e => setData({...data, feedbackAfterInterview: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of TT sent')}
									</span>
									<>
										<DatePicker
											dateFormat="dd/MM/yyyy"
											selected={data?.dateOfTTSent}
											onChange={(date) => setData({...data, dateOfTTSent: date})}
											className={"datepicker-input"}
											disabled={!isEdit}
											placeholderText={t('Candidates info Date of TT sent')}
										/>
									</>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of TT done')}
									</span>
									<>
										<DatePicker
											dateFormat="dd/MM/yyyy"
											selected={data?.dateOfTTDone}
											onChange={(date) => setData({...data, dateOfTTDone: date})}
											className={"datepicker-input"}
											disabled={!isEdit}
											placeholderText={t('Candidates info Date of TT done')}
										/>
									</>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of final Interview')}
									</span>
									<>
										<DatePicker
											dateFormat="dd/MM/yyyy"
											selected={data?.dateOfFinalInterview}
											onChange={(date) => setData({...data, dateOfFinalInterview: date})}
											className={"datepicker-input"}
											disabled={!isEdit}
											placeholderText={t('Candidates info Date of final Interview')}
										/>
									</>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of offer sent')}
									</span>
									<>
										<DatePicker
											dateFormat="dd/MM/yyyy"
											selected={data?.dateOfOfferSent}
											onChange={(date) => setData({...data, dateOfOfferSent: date})}
											className={"datepicker-input"}
											disabled={!isEdit}
											placeholderText={t('Candidates info Date of offer sent')}
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

							<div className="change-status">
								{isEdit && <div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Candidate Status')}
									</span>
									<select disabled={!isEdit} value={data?.candidateStatus} onChange={e => setData({...data, candidateStatus: e.target.value})}>
										<option value=''>{t('Candidates info Candidate Status')}</option>
										<option value={t('Statuses - Contacted')}>{t('Statuses - Contacted')}</option>
										<option value={t('Statuses - Interested')}>{t('Statuses - Interested')}</option>
										<option value={t('Statuses - Pre-screen')}>{t('Statuses - Pre-screen')}</option>
										<option value={t('Statuses - Test Task')}>{t('Statuses - Test Task')}</option>
										<option value={t('Statuses - Technical Interview')}>{t('Statuses - Technical Interview')}</option>
										<option value={t('Statuses - Final Interview')}>{t('Statuses - Final Interview')}</option>
										<option value={t('Statuses - Offer')}>{t('Statuses - Offer')}</option>
										<option value={t('Statuses - Hired')}>{t('Statuses - Hired')}</option>
									</select>
								</div>}
							</div>
						</div>
					</div>
				</div>
			}
			{
				error && <div>{error}</div>
			}
	</>
	)
}
