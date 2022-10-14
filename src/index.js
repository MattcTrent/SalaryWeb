import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import SalaryBreakdown from "./Pages/SalaryBreakdown";
import { SystemParameters } from "./Pages/SystemParameters";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SalaryBreakdown" element={<SalaryBreakdown />} />
          <Route path="SystemParameters" element={<SystemParameters />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)