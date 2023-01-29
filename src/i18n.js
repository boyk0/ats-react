import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			"Home": "Home",
			"About company": "About company",
			"Job Openings": "Job Openings",
			"My Account": "My Account",
			"About company header": "About company",
			"About company content": "We are the digital consultancy agency aimed to create digital disruption and heighten marketing performance and efficiency.\n\nTraditional marketing practices don`t work anymore. The way people change must be changed. Lateral marketing, flexible management and pure creativity – these all helps us to boost your business and broaden opportunities.",
			"Home content": "WRco",
			"Job Openings header": "Job Openings",
			"Add new": "Add new",
			"Job Openings name": "Job Openings",
			"Job Openings location": "Location",
			"Job Openings recruiter": "Recruiter",
			"Job Openings priority": "Priority",
			"Job Openings info title": "Title",
			"Job Openings info recruiter": "Recruiter",
			"Job Openings info team lead": "Team Lead",
			"Job Openings info location": "Location",
			"Job Openings info priority status": "Priority Status",
			"Job Openings info date of openings": "Date of openings",
			"Job Openings info type": "Type",
			"Job Openings info must have": "Must have",
			"Job Openings info salary range": "Salary range",
			"Job Openings info date of closing": "Date of closing",
			"Edit": "Edit",
			"Save": "Save",
		}
	},
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
