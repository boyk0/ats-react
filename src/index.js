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
import { JobOpeningsInfo } from './pages/jobOpeningsInfo';

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
                path: "job-openings",
                element: <JobOpenings />,
            },
            {
                path: "job-openings/info/:id",
                element: <JobOpeningsInfo />,
            },
            {
                path: "my-account",
                element: <MyAccount />,
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
