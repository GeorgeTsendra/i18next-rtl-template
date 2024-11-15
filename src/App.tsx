import { Routes, Route } from "react-router-dom";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import "./i18n/config";

import Dashboard from "./page/Dashboard";

function App() {
  useLocalizeDocumentAttributes();

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
