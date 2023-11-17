import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LandingPage  from './routes/LandingPages';
import HomePage from './routes/Homepage';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      { index: true, element: <HomePage /> },
      {
        path:"homepage",
        element: <HomePage/>
      },
    ],
  },
  {
    path: "/landingpage",
    element: <LandingPage></LandingPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


