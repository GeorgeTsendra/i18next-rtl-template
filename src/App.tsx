import { useEffect } from "react";

import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import "./i18n/config";

import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Header from "./components/Layout/Header/Header";
import TableView from "./components/Layout/TableView/TableView";
import TableManagementSection from "./components/Layout/TableManagementSection/TableManagementSection";

function App() {
  useLocalizeDocumentAttributes();

  return (
    <main className="flex flex-row h-[100vh]">
      <Sidebar />
      <div className="flex flex-col flex-1 p-8 pt-10">
        <Header />
        <div className="mb-10 mt-10">
          <TableManagementSection />
        </div>
        <TableView />
      </div>
    </main>
  );
}

export default App;
