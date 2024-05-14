// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import './index.css';

const router = createBrowserRouter(routes?.map((route) => {
  const { element: Element } = route;
  return {
    ...route,
    element: <Element />,
  };
}));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
