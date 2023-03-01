import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './xss/index.css';
import './xss/barra_lat.css';
import './xss/fondeos.css';
import App from './App';
import Principal from './componentes/Principal';
import Fondeo from './componentes/Fondeo';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([

    {
      path: "/",
      element: <App />,
    },
    {
      path: "entrar",
      element: <Principal />,
    },
    {
      path: "Fondeo",
      element: <Fondeo />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


