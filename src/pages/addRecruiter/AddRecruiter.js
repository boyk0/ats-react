import { useTranslation } from 'react-i18next';

export const AddRecruiter = () => {
	const { t } = useTranslation();

	return (
		<div className="AddRecruiter">
			<div className="AddRecruiter-header">
				<h1>
					{t('Add Recruiter Header')}
				</h1>
			</div>

			<div className="AddRecruiter-content">
				<img src="./" alt="photo"/>
				<div className="AddRecruiter-info">
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account name')}
						</span>
						<span className="data">
							Name
						</span>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account surname')}
						</span>
						<span className="data">
							surname
						</span>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account email')}
						</span>
						<span className="data">
							email
						</span>
					</div>
					<div className="AddRecruiter-info-row">
						<span className="title">
							{t('My Account position')}
						</span>
						<span className="data">
							position
						</span>
					</div>
				</div>
				<div className="Save-action">
					<button>{t('Save')}</button>
				</div>
			</div>
		</div>
	);
}
