import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/DASHBOARD/Dashboard";
import Team from "./Pages/Team";
import Contacts from "./Pages/CONTACTS/Contacts";
import Invoices from "./Pages/INVOICES/Invoices";
import Form from "./Pages/Form";
import Calendar from "./Pages/CALENDAR/Calendar";
import FAQ from "./Pages/FAQ";
import BarChart from "./Pages/BARCHART/BarChart";
import PieChart from "./Pages/PIECHART/PieChart";
import LineChart from "./Pages/LINECHART/LineChart";
import Geography from "./Pages/GEOGRAPHY/Geography";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
