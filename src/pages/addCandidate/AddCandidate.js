import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import imageAdd from '../../static/images/image-add.png'
import { axiosClient, url } from '../../client';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const AddCandidate = () => {
	const { t } = useTranslation();

	const defaultData = {
		name: '',
		surname: '',
		location: '',
		mobile: '',
		email: '',
		telegramNick: '',
		linkedInLink: '',
		englishLevel: '',
		jobOpening: '',
		seniorityLevel: '',
		skillSet: '',
		contactDate: '',
		dateOfInterview: '',
		feedbackAfterInterview: '',
		dateOfTTSent: '',
		dateOfTTDone: '',
		dateOfFinalInterview: '',
		dateOfOfferSent: '',
		candidateStatus: '',
	}

	const [data, setData] = useState({
		...defaultData,
	})

	useEffect(() => {
		changeBGColorToBlue()
	});

	const onSave = () => {
		axiosClient.post(`${url}candidate`, data)
			.then(() => setData({...defaultData}))
			.catch(error => {
				console.error(error.message);
			})
			.finally();
	}

	return <div className="CandidatesInfo">
		<div className="CandidatesInfo-header">
			<h1>
				{t('Add Candidate header')}
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
						<input type="text" placeholder={t('Candidates info Name')} value={data.name} onChange={e => setData({...data, name: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Surname')}
						</span>
						<input type="text" placeholder={t('Candidates info Surname')} value={data.surname} onChange={e => setData({...data, surname: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Location')}
						</span>
						<input type="text" placeholder={t('Candidates info Location')} value={data.location} onChange={e => setData({...data, location: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Mobile')}
						</span>
						<input type="text" placeholder={t('Candidates info Mobile')} value={data.mobile} onChange={e => setData({...data, mobile: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info E-mail')}
						</span>
						<input type="text" placeholder={t('Candidates info E-mail')} value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Telegram nickname')}
						</span>
						<input type="text" placeholder={t('Candidates info Telegram nickname')} value={data.telegramNick} onChange={e => setData({...data, telegramNick: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Linkedin URL')}
						</span>
						<input type="text" placeholder={t('Candidates info Linkedin URL')} value={data.linkedInLink} onChange={e => setData({...data, linkedInLink: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info English Level')}
						</span>
						<input type="text" placeholder={t('Candidates info English Level')} value={data.englishLevel} onChange={e => setData({...data, englishLevel: e.target.value})}/>
					</div>
				</div>

				<div className="column">
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Job Openings')}
						</span>
						<input type="text" placeholder={t('Candidates info Job Openings')} value={data.jobOpening} onChange={e => setData({...data, jobOpening: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Seniority Level')}
						</span>
						<input type="text" placeholder={t('Candidates info Seniority Level')} value={data.seniorityLevel} onChange={e => setData({...data, seniorityLevel: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Skill Set')}
						</span>
						<input type="text" placeholder={t('Candidates info Skill Set')} value={data.skillSet} onChange={e => setData({...data, skillSet: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Contact Date')}
						</span>
						<>
							<DatePicker
								dateFormat="dd/MM/yyyy"
								selected={data.contactDate}
								onChange={(date) => setData({...data, contactDate: date})}
								className={"datepicker-input"}
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
								dateFormat="dd/MM/yyyy"
								selected={data.dateOfInterview}
								onChange={(date) => setData({...data, dateOfInterview: date})}
								className={"datepicker-input"}
								placeholderText={t('Candidates info Date of Interview')}
							/>
						</>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Feedback after interview')}
						</span>
						<input type="text" placeholder={t('Candidates info Feedback after interview')} value={data.feedbackAfterInterview} onChange={e => setData({...data, feedbackAfterInterview: e.target.value})}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Date of TT sent')}
						</span>
						<>
							<DatePicker
								dateFormat="dd/MM/yyyy"
								selected={data.dateOfTTSent}
								onChange={(date) => setData({...data, dateOfTTSent: date})}
								className={"datepicker-input"}
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
								selected={data.dateOfTTDone}
								onChange={(date) => setData({...data, dateOfTTDone: date})}
								className={"datepicker-input"}
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
								selected={data.dateOfFinalInterview}
								onChange={(date) => setData({...data, dateOfFinalInterview: date})}
								className={"datepicker-input"}
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
								selected={data.dateOfOfferSent}
								onChange={(date) => setData({...data, dateOfOfferSent: date})}
								className={"datepicker-input"}
								placeholderText={t('Candidates info Date of offer sent')}
							/>
						</>
					</div>
				</div>
			</div>

			<div className="actions">
				<div className="edit-button">
					<button onClick={onSave}>{t('Save')}</button>
				</div>

				<div className="change-status">
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Candidate Status')}
						</span>
						<input type="text" placeholder={t('Candidates info Candidate Status')} value={data.candidateStatus} onChange={e => setData({...data, candidateStatus: e.target.value})}/>
					</div>
				</div>
			</div>
		</div>
	</div>
}
