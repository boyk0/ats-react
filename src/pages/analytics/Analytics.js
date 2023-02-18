import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export const Analytics = () => {
	const { t } = useTranslation();

	return (
		<div className="Analytics">
			<div className="Analytics-header">
				<h1>
					{t('Analytics header')}
				</h1>
			</div>

			<div className="Analytics-content">
				<Outlet />
			</div>
		</div>
	);
}
