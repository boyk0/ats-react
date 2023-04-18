import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import imageAdd from '../../static/images/image-add.png';
import { axiosClient, url } from '../../client';
import { useParams } from 'react-router-dom';

export const CandidatesInfo = () => {
	const { t } = useTranslation();
	const [isEdit, setIsEdit] = useState(false);
	const [loading, setLoading] = useState(true);
	const [saveLoading, setSaveLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState();

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
			.then(data => setData(data))
			.catch(error => {

				console.error(error.message);
				setError(error);
			})
			.finally(() => setLoading(false));
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
									<input type="text" value={data?.englishLevel} disabled={!isEdit} onChange={e => setData({...data, englishLevel: e.target.value})}/>
								</div>
							</div>

							<div className="column">
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Job Openings')}
									</span>
									<input type="text" value={data?.jobOpening} disabled={!isEdit} onChange={e => setData({...data, jobOpening: e.target.value})}/>
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
									<input type="text" value={data?.contactDate} disabled={!isEdit} onChange={e => setData({...data, contactDate: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of Interview')}
									</span>
									<input type="text" value={data?.dateOfInterview} disabled={!isEdit} onChange={e => setData({...data, dateOfInterview: e.target.value})}/>
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
									<input type="text" value={data?.dateOfTTSent} disabled={!isEdit} onChange={e => setData({...data, dateOfTTSent: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of TT done')}
									</span>
									<input type="text" value={data?.dateOfTTDone} disabled={!isEdit} onChange={e => setData({...data, dateOfTTDone: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of final Interview')}
									</span>
									<input type="text" value={data?.dateOfFinalInterview} disabled={!isEdit} onChange={e => setData({...data, dateOfFinalInterview: e.target.value})}/>
								</div>
								<div className="CandidatesInfo-data-row">
									<span className="title">
										{t('Candidates info Date of offer sent')}
									</span>
									<input type="text" value={data?.dateOfOfferSent} disabled={!isEdit} onChange={e => setData({...data, dateOfOfferSent: e.target.value})}/>
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
									<input type="text" value={data?.candidateStatus} disabled={!isEdit} onChange={e => setData({...data, candidateStatus: e.target.value})}/>
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
