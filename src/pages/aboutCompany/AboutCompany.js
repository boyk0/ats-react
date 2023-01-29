import { useTranslation } from 'react-i18next';

export const AboutCompany = () => {
	const { t } = useTranslation();

	return (
		<div className="AboutCompany">
			<div className="AboutCompany-header">
				<h1>{t('About company header')}</h1>
			</div>

			<div className="AboutCompany-content">
				<span>
					{t('About company content')}
				</span>
			</div>
		</div>
	);
}
