import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeBGColorAddRecruiter } from '../../helpers';
import image from './../../static/iamges/image-add.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../client';

export const AddRecruiter = () => {
	const initialData = {
		name: '',
		surname: '',
		email: '',
		position: '',
		password: '',
	}
	const { t } = useTranslation();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({...initialData});
	const navigate = useNavigate();


	useEffect(() => {
		changeBGColorAddRecruiter()
	});

	const onSave = () => {
		setLoading(true)
		axios.post(`${url}recruiter`, formData)
			.then(() => navigate('/my-account'))
			.catch((e) => console.error(e.message))
			.finally(() => setLoading(false))
	}

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
						<input className="data" placeholder={t('My Account name')} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account surname')}
						</span>
						<input className="data" placeholder={t('My Account surname')} value={formData.surname} onChange={e => setFormData({...formData, surname: e.target.value})}/>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account email')}
						</span>
						<input className="data" placeholder={t('My Account email')} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}/>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account position')}
						</span>
						<input className="data" placeholder={t('My Account position')} value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})}/>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account password')}
						</span>
						<input className="data" placeholder={t('My Account password')} value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}/>
					</div>
				</div>
			</div>
			<div className="AddRecruiter-actions">
				<div className="AddRecruiter-actions-action">
					<button onClick={onSave} disabled={loading}>{loading ? t('Loading') : t('Save')}</button>
				</div>
			</div>
		</div>
	);
}
