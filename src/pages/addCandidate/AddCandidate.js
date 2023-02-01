import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const AddCandidate = () => {
	const { t } = useTranslation();

	const onSave = () => {
	}

	return <div className="CandidatesInfo">
		<div className="CandidatesInfo-header">
			{t('Add Candidate header')}
		</div>
		<div className="CandidatesInfo-content">
			<div className="column">
				<div className="image">
					image
				</div>
			</div>

			<div className="column">
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Name')}
					</span>
					<input type="text" value={'Name'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Surname')}
					</span>
					<input type="text" value={'Surname'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Location')}
					</span>
					<input type="text" value={'Location'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Mobile')}
					</span>
					<input type="text" value={'Mobile'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info E-mail')}
					</span>
					<input type="text" value={'E-mail'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Telegram nickname')}
					</span>
					<input type="text" value={'tg nick'}/>
				</div>

				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Linkedin URL')}
					</span>
					<input type="text" value={'linkedin'}/>
				</div>

				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info English Level')}
					</span>
					<input type="text" value={'English level'}/>
				</div>
			</div>

			<div className="column">
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Job Openings')}
					</span>
					<input type="text" value={'Job Openings'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Seniority Level')}
					</span>
					<input type="text" value={'Seniority Level'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Skill Set')}
					</span>
					<input type="text" value={'Skills'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Contact Date')}
					</span>
					<input type="text" value={'Contact Date'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Date of Interview')}
					</span>
					<input type="text" value={'Contact Date'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Feedback after interview')}
					</span>
					<input type="text" value={'Feedback after interview'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Date of TT sent')}
					</span>
					<input type="text" value={'Date of TT sent'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Date of TT done')}
					</span>
					<input type="text" value={'Date of TT done'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Date of final Interview')}
					</span>
					<input type="text" value={'Date of final Interview'}/>
				</div>
				<div className="CandidatesInfo-data-row">
					<span className="title">
						{t('Candidates info Date of offer sent')}
					</span>
					<input type="text" value={'Date of offer sent'}/>
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
						<input type="text" value={'Status'}/>
					</div>
				</div>
			</div>
		</div>
	</div>
}
