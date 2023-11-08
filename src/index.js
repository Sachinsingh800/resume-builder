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
import Template_4 from './Component/ResumeTemplates/Template_4/Template_4';
import Template_5 from './Component/ResumeTemplates/Template_5/Template_5';
import SignUp from './Component/SignUp/SignUp';
import SignIn from './Component/SignIn/SignIn';
import Profile from './Page/Profile/Profile';
import Blog from './Page/Blog/Blog';
import Template_6 from './Component/ResumeTemplates/Template_6/Template_6';
import Template_7 from './Component/ResumeTemplates/Template_7/Template_7';
import Template_8 from './Component/ResumeTemplates/Template_8/Template_8';
import Template_9 from './Component/ResumeTemplates/Template_9/Template_9';
import Form from './Component/Form/Form';

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
  {
    path: "/Template_4",
    element: <Template_4/>,
  },
  {
    path: "/Template_5",
    element: <Template_5/>,
  },
  {
    path: "/Template_6",
    element: <Template_6/>,
  },
  {
    path: "/Template_7",
    element: <Template_7/>,
  },
  {
    path: "/Template_8",
    element: <Template_8/>,
  },
  {
    path: "/Template_9",
    element: <Template_9/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>
  },
  {
    path: "/SignIn",
    element: <SignIn/>
  },
  {
    path: "/Profile",
    element: <Profile/>
  },
  {
    path: "/Blog",
    element: <Blog/>
  },
  {
    path: "/Form",
    element: <Form/>
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
