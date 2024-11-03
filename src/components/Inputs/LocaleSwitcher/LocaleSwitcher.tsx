import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../../i18n/config";

const LocaleSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <span className="flex bg-white shadow-xl rounded-[3px]">
      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="rounded-[3px] ltr:pl-2 rtl:pr-2"
      >
        {Object.entries(supportedLngs).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </span>
  );
};

export default LocaleSwitcher;
