import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Timeline from './components/pages/timelines/Timeline.jsx';
import Stats from './components/pages/stats/Stats.jsx';
import Homepage from './components/pages/homepage/Homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        path:"/",
        Component: Homepage,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
