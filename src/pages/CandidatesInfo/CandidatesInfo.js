import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';
import imageAdd from '../../static/iamges/image-add.png';

export const CandidatesInfo = () => {
	const { t } = useTranslation();

	useEffect(() => {
		changeBGColorToBlue()
	});

	const [state, setState] = useState({isEdit: false});

	const onEditClick = () => {
		setState({isEdit: true})
	}

	const onSave = () => {
		setState({isEdit: false})
	}

	return <div className="CandidatesInfo">
		<div className="CandidatesInfo-header">
			<h1>
				Candidate Name
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
						<input type="text" value={'Name'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Surname')}
						</span>
						<input type="text" value={'Surname'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Location')}
						</span>
						<input type="text" value={'Location'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Mobile')}
						</span>
						<input type="text" value={'Mobile'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info E-mail')}
						</span>
						<input type="text" value={'E-mail'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Telegram nickname')}
						</span>
						<input type="text" value={'tg nick'} disabled={!state.isEdit}/>
					</div>

					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Linkedin URL')}
						</span>
						<input type="text" value={'linkedin'} disabled={!state.isEdit}/>
					</div>

					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info English Level')}
						</span>
						<input type="text" value={'English level'} disabled={!state.isEdit}/>
					</div>
				</div>

				<div className="column">
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Job Openings')}
						</span>
						<input type="text" value={'Job Openings'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Seniority Level')}
						</span>
						<input type="text" value={'Seniority Level'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Skill Set')}
						</span>
						<input type="text" value={'Skills'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Contact Date')}
						</span>
						<input type="text" value={'Contact Date'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Date of Interview')}
						</span>
						<input type="text" value={'Contact Date'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Feedback after interview')}
						</span>
						<input type="text" value={'Feedback after interview'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Date of TT sent')}
						</span>
						<input type="text" value={'Date of TT sent'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Date of TT done')}
						</span>
						<input type="text" value={'Date of TT done'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Date of final Interview')}
						</span>
						<input type="text" value={'Date of final Interview'} disabled={!state.isEdit}/>
					</div>
					<div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Date of offer sent')}
						</span>
						<input type="text" value={'Date of offer sent'} disabled={!state.isEdit}/>
					</div>
				</div>
			</div>

			<div className="actions">
				<div className="edit-button">
					{state.isEdit
						? <button onClick={onSave}>{t('Save')}</button>
						: <button onClick={onEditClick}>{t('Edit')}</button>
					}
				</div>

				<div className="change-status">
					{state.isEdit && <div className="CandidatesInfo-data-row">
						<span className="title">
							{t('Candidates info Candidate Status')}
						</span>
						<input type="text" value={'Status'} disabled={!state.isEdit}/>
					</div>}
				</div>
			</div>
		</div>
	</div>
}
