import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResumeForm from './Component/ResumeForm/ResumeForm';
import ChooseTemplates from './Page/ChooseTemplates/ChooseTemplates';
import CreateResume from './Page/CreateResume/CreateResume';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/ResumeForm",
    element: <ResumeForm/>,
  },
  {
    path: "/ChooseTemplates",
    element: <ChooseTemplates/>,
  },
  {
    path: "/CreateResume",
    element: <CreateResume/>,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
