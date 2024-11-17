import { Routes, Route } from "react-router-dom";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import "./i18n/config";

import Table from "./pages/Table";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  useLocalizeDocumentAttributes();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Table />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
