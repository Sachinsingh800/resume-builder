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
import {RecoilRoot} from  "recoil"
import Template_2 from './Component/ResumeTemplates/Template_2/Template_2';
import Template_1 from './Component/ResumeTemplates/Template_1/Template_1';
import Template_3 from './Component/ResumeTemplates/Template_3/Template_3';

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
  {
    path: "/Template_2",
    element: <Template_2/>,
  },
  {
    path: "/Template_1",
    element: <Template_1/>,
  },
  {
    path: "/Template_3",
    element: <Template_3/>,
  },
]);
root.render(

    <RecoilRoot>
       <RouterProvider router={router} />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
