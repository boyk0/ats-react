import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { changeBGColorAddRecruiter } from '../../helpers';
import image from './../../static/iamges/image-add.png'

export const AddRecruiter = () => {
	const { t } = useTranslation();

	useEffect(() => {
		changeBGColorAddRecruiter()
	});

	return (
		<div className="AddRecruiter">
			<div className="AddRecruiter-header">
				<h1>
					{t('Add Recruiter Header')}
				</h1>
			</div>

			<div className="AddRecruiter-content">
				<div className="image">
					<img src={image} alt="photo"/>
				</div>
				<div className="AddRecruiter-info">
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account name')}
						</span>
						<input className="data" value={'name'}/>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account surname')}
						</span>
						<input className="data" value={'surname'}/>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account email')}
						</span>
						<input className="data" value={'email'}/>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account position')}
						</span>
						<input className="data" value={'position'}/>
					</div>
				</div>
			</div>
			<div className="AddRecruiter-actions">
				<div className="AddRecruiter-actions-action">
					<button>{t('Save')}</button>
				</div>
			</div>
		</div>
	);
}
