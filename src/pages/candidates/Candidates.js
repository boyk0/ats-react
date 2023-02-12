import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { changeBGColorToWhite } from '../../helpers';

export const Candidates = () => {
	const { t } = useTranslation();

	useEffect(() => {
		changeBGColorToWhite()
	});

	const dataContent = (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
		return arr.map((id) =>
			<tr>
				<td>
					<Link to={`/candidates/info/${id}`}>Maria Silladou</Link>
				</td>
				<td>email@example.com</td>
				<td>Cyprus</td>
				<td>Office manager</td>
			</tr>
		);
	}

	return (
		<div className="Candidates">
			<div className="Candidates-header">
				<h1>
					{t('Candidates header')}
				</h1>
				<div className="Candidates-add">
					<Link to={'/candidates/add'}>
						{t('Add new')}
					</Link>
				</div>
			</div>

			<div className="Candidates-content">
				<div className="Candidates-table">
					<table>
						<tr>
							<th>{t('Candidates name')}</th>
							<th>{t('Candidates email')}</th>
							<th>{t('Candidates location')}</th>
							<th>{t('Candidates job openings')}</th>
						</tr>
						{dataContent()}
					</table>
				</div>
			</div>
		</div>
	);
}
