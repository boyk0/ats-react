import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { changeBGColorToBlue } from '../../helpers';

export const Home = () => {
	const { t } = useTranslation();

	useEffect(() => {
		changeBGColorToBlue()
	});

	return (
		<div className="Home">
			<div className="Home-content">
				{t('Home content')}
			</div>
		</div>
	);
}
