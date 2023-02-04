import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { AboutCompany } from './pages/aboutCompany/AboutCompany';
import { MyAccount } from './pages/myAccount/MyAccount';
import { JobOpenings } from './pages/jobOpenings/JobOpenings';
import { Error } from './pages/error/Error';
import { JobOpeningsInfo } from './pages/jobOpeningsInfo/JobOpeningsInfo';
import { Analytics } from './pages/analytics/Analytics';
import { JobOpeningsAnalytics } from './pages/analytics/JobOpeningsAnalytics';
import { RecruiterAnalytics } from './pages/analytics/RecruiterAnalytics';
import { Candidates } from './pages/candidates/Candidates';
import { CandidatesInfo } from './pages/CandidatesInfo/CandidatesInfo';
import { AddCandidate } from './pages/addCandidate/AddCandidate';
import { AddJobOpenings } from './pages/addJobOpenings/AddJobOpenings';
import { AddRecruiter } from './pages/addRecruiter/AddRecruiter';
import { RecruitersInfo } from './pages/recruiitersInfo/RecruitersInfo';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        // loader: rootLoader,
        // action: rootAction,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about-company",
                element: <AboutCompany />,
            },
            {
                path: "candidates",
                element: <Candidates />,
            },
            {
                path: "candidates/add",
                element: <AddCandidate />,
            },
            {
                path: "candidates/info/:id",
                element: <CandidatesInfo />,
            },
            {
                path: "recruiter/info/:id",
                element: <RecruitersInfo />,
            },
            {
                path: "/job-openings",
                element: <JobOpenings />,
            },
            {
                path: "/job-openings/add",
                element: <AddJobOpenings />,
            },
            {
                path: "job-openings/info/:id",
                element: <JobOpeningsInfo />,
            },
            {
                path: "my-account",
                element: <MyAccount />,
            },
            {
                path: "add-recruiter",
                element: <AddRecruiter />,
            },
            {
                path: "/analytics/",
                element: <Analytics />,
                children: [
                    {
                        path: 'job-openings',
                        element: <JobOpeningsAnalytics />,
                    },
                    {
                        path: 'recruiters',
                        element: <RecruiterAnalytics />,
                    },
                ]
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
