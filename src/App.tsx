import React from "react";
import { useTranslation } from "react-i18next";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import "./i18n/config";

function App() {
  const { t } = useTranslation();

  useLocalizeDocumentAttributes();

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">{t("app_title")}</h1>
    </div>
  );
}

export default App;
