// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


import App from './App';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import AllAbout from './AboutPage/AllAbout';
import AllShop from './ShopPage/AllShop';
import AllContact from './ContactPage/AllContact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "about",
    element: <AllAbout/>,
  },
  {
    path: "shop",
    element: <AllShop/>,
  },
  {
    path: "contact",
    element: <AllContact/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);