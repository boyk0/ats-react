import { useTranslation } from 'react-i18next';

export const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="Home">
			<div className="Home-content">
				{t('Home content')}
			</div>
		</div>
	);
}
