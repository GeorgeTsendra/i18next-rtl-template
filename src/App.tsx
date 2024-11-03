import Header from "./components/Layout/Header/Header";

import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import "./i18n/config";

function App() {
  useLocalizeDocumentAttributes();

  return (
    <div className="p-8 pt-10">
      <Header />
    </div>
  );
}

export default App;
