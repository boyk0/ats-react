import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorToBlue } from '../../helpers';

export const AddJobOpenings = () => {

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
						<input type="text" value={'Title'}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info recruiter')}
						</span>
						<input type="text" value={'recruiter'}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info team lead')}
						</span>
						<input type="text" value={'team lead'}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info location')}
						</span>
						<input type="text" value={'location'}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info priority status')}
						</span>
						<input type="text" value={'High'}/>
					</div>
					<div className="JobOpeningsInfo-data-row">
						<span className="title">
							{t('Job Openings info date of openings')}
						</span>
						<input type="text" value={'10.10.2022'}/>
					</div>
				</div>

				<div className="column">
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info type')}
					</span>
					<input type="text" value={'Full time'}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info must have')}
					</span>
					<input type="text" value={'Must have'}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info salary range')}
					</span>
					<input type="text" value={'3000 $'}/>
				</div>
				<div className="JobOpeningsInfo-data-row">
					<span className="title">
						{t('Job Openings info date of closing')}
					</span>
					<input type="text" value={'date'}/>
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
