import { useTranslation } from 'react-i18next';

export const RecruitersInfo = () => {
	const { t } = useTranslation();

	return (
		<div className="RecruitersInfo">
			<div className="RecruitersInfo-header">
				<h1>
					Recruiter Name
				</h1>
			</div>

			<div className="RecruitersInfo-content">
				<img src="./" alt="photo"/>
				<div className="RecruitersInfo-info">
					<div className="MyAccount-info-row">
						<span className="title">
							{t('My Account name')}
						</span>
						<span className="data">
							Name
						</span>
					</div>
					<div className="RecruitersInfo-info-row">
						<span className="title">
							{t('My Account surname')}
						</span>
						<span className="data">
							surname
						</span>
					</div>
					<div className="RecruitersInfo-info-row">
						<span className="title">
							{t('My Account email')}
						</span>
						<span className="data">
							email
						</span>
					</div>
					<div className="RecruitersInfo-info-row">
						<span className="title">
							{t('My Account position')}
						</span>
						<span className="data">
							position
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
