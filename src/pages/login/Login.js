import { useEffect, useState } from 'react';
import { changeBGColorToWhite } from '../../helpers';
import { useTranslation } from 'react-i18next';
import './login.scss'
import logo from '../../static/images/logo-blue.png'
import { axiosClient, url } from '../../client';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [data, setData] = useState({email: '', password: ''});
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		changeBGColorToWhite()
	});

	const login = () => {
		setLoading(true);
		axios.post(`${url}auth/login`, data)
			.then(response => response.data)
			.then(data => {
				localStorage.setItem('user', data?._id)
				navigate('/');
			})
			.catch(e => console.error(e.message))
			.finally(setLoading(false))

	}

	return(
		<div className="login">
			<div className="login-form">
				<div className="login-form-logo">
					<img src={logo} alt=""/>
				</div>
				<div className="login-form-content">
					<div className="login-form-header">
						<h2>
							{t('Login page header')}
						</h2>
					</div>

					<div className="login-form-input">
						<input type="text" placeholder={t('Login email')} value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
					</div>

					<div className="login-form-input">
						<input type="password" placeholder={t('Login password')} value={data.password} onChange={e => setData({...data, password: e.target.value})}/>
					</div>

					<div className="login-form-button">
						<button onClick={login} disabled={loading}>
							{loading ? t('Loading') : t('Login login')}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
