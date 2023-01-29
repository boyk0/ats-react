import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const JobOpeningsInfo = () => {
	const { t } = useTranslation();

	const [state, setState] = useState({isEdit: false});

	const onEditClick = () => {
		setState({isEdit: true})
	}

	const onSave = () => {
		setState({isEdit: false})
	}

	return <div className="JobOpeningsInfo">
		<div className="JobOpeningsInfo-header">
			Office Manager
		</div>
		<div className="JobOpeningsInfo-content">
			<div className="column">
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info title')}
					</span>
					<input type="text" value={'Title'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info recruiter')}
					</span>
					<input type="text" value={'recruiter'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info team lead')}
					</span>
					<input type="text" value={'team lead'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info location')}
					</span>
					<input type="text" value={'location'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info priority status')}
					</span>
					<input type="text" value={'High'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info date of openings')}
					</span>
					<input type="text" value={'10.10.2022'} disabled={!state.isEdit}/>
				</div>
			</div>

			<div className="column">
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info type')}
					</span>
					<input type="text" value={'Full time'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info must have')}
					</span>
					<input type="text" value={'Must have'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info salary range')}
					</span>
					<input type="text" value={'3000 $'} disabled={!state.isEdit}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info date of closing')}
					</span>
					<input type="text" value={'date'} disabled={!state.isEdit}/>
				</div>
			</div>

			<div className="edit-button">
				{state.isEdit
					? <button onClick={onSave}>{t('Save')}</button>
					: <button onClick={onEditClick}>{t('Edit')}</button>
				}
			</div>
		</div>
	</div>
}
