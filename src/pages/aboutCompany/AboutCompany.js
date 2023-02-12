import { useTranslation } from 'react-i18next';
import { changeBGColorToViolet, toHTML } from '../../helpers';
import { useEffect } from 'react';

export const AboutCompany = () => {
	const { t } = useTranslation();

	useEffect(() => {
		changeBGColorToViolet()
	});

	return (
		<div className="AboutCompany">
			<div className="AboutCompany-header">
				<h1>{t('About company header')}</h1>
			</div>

			<div className="AboutCompany-content">
				<span>
					{toHTML(t('About company content'))}
				</span>
			</div>
		</div>
	);
}
