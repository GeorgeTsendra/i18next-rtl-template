import { useTranslation } from "react-i18next";
import TableSearchTextInput from "../../Inputs/TableSearchTextInput/TableSearchTextInput";

const TableManagementSection = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col">
      <h1 className="text-gray-900 font-bold text-xl mb-6">
        {t("table-filters.title")}
      </h1>
      <div className="flex flex-row justify-between">
        <TableSearchTextInput
          label={t("table-filters.customer.label")}
          placeholderText={t("table-filters.customer.placeholder")}
        />
        <TableSearchTextInput
          label={t("table-filters.invoice.label")}
          placeholderText={t("table-filters.invoice.placeholder")}
        />
        <TableSearchTextInput
          label={t("table-filters.start-date.label")}
          placeholderText={t("table-filters.start-date.placeholder")}
        />
        <TableSearchTextInput
          label={t("table-filters.end-date.label")}
          placeholderText={t("table-filters.end-date.placeholder")}
        />
      </div>
    </section>
  );
};

export default TableManagementSection;
