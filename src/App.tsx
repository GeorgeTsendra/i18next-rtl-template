import Header from "./components/Layout/Header/Header";

import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import "./i18n/config";
import TableManagementSection from "./components/Layout/TableManagementSection/TableManagementSection";
import TableView from "./components/Layout/TableView/TableView";

function App() {
  useLocalizeDocumentAttributes();

  return (
    <div className="p-8 pt-10">
      <Header />
      <div className="mb-10 mt-10">
        <TableManagementSection />
      </div>
      <TableView />
    </div>
  );
}

export default App;
