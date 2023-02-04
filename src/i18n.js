import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AddRecruiter } from './pages/addRecruiter/AddRecruiter';

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
			"My Account headline": "My Account",
			"My Account name": "Name",
			"My Account surname": "Surname",
			"My Account email": "Email",
			"My Account position": "Position",
			"My Account add recruiter": "Add recruiter",
			"My Account analytics header": "Analytics",
			"My Account analytics for job openings": "For job openings",
			"My Account analytics for recruiters": "For recruiters",
			"Analytics header": "Analytics",
			"Candidates": "Candidates",
			"Candidates name": "Candidate's job openings",
			"Candidates email": "E-mail",
			"Candidates location": "Location",
			"Candidates job openings": "Job Openings",
			"Candidates info Name": "Name",
			"Candidates info Surname": "Surname",
			"Candidates info Location": "Location",
			"Candidates info Mobile": "Mobile",
			"Candidates info E-mail": "E-mail",
			"Candidates info Telegram nickname": "Tg nickname",
			"Candidates info Linkedin URL": "Linkedin URL",
			"Candidates info English Level": "English level",
			"Candidates info Job Openings": "Job Openings",
			"Candidates info Seniority Level": "Seniority Level",
			"Candidates info Skill Set": "Skill Set",
			"Candidates info Contact Date": "Contact Date",
			"Candidates info Date of Interview": "Date of interview",
			"Candidates info Feedback after interview": "Feedback after interview",
			"Candidates info Date of TT sent": "Date of TT sent",
			"Candidates info Date of TT done": "Date of TT done",
			"Candidates info Date of offer sent": "Date of offer sent",
			"Candidates info Candidate Status": "Candidate Status",
			"Add Candidate header": "Add new",
			"Candidates header": "Candidates",
			"Add New Job Opening Header": "Add new Job Opening",
			"Add Recruiter Header": "Add Recruiter",
			"Analytics for job openings subheader": "For Job Openings",
			"Analytics for job openings enter job opening": "Enter Job Opening",
			"Analytics for job openings table name": "Candidate's name",
			"Analytics for job openings table email": "Email",
			"Analytics for job openings table location": "Location",
			"Analytics for job openings table candidate status": "Candidate Status",
			"Recruiter Analytics header": "Analytics",
			"Recruiter Analytics subheader": "For Recruiter",
			"Recruiter Analytics table recruiter name": "Recruiter's name",
			"Recruiter Analytics table job opening": "Job Opening",
			"Recruiter Analytics table priority": "Priority",
			"Recruiter Analytics table location": "Location",
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
