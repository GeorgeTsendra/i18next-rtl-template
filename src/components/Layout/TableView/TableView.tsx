import { useTranslation } from "react-i18next";
import TableRow from "../../Table/TableRow/TableRow";

const TableView = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col">
      <table className="min-w-full border border-gray-200 bg-white rounded-[3px] overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2 border-b border-gray-200 ltr:text-left rtl:text-right">
              {t("table-columns.invoice-id")}
            </th>
            <th className="px-4 py-2 border-b border-gray-200 ltr:text-left rtl:text-right">
              {t("table-columns.date")}
            </th>
            <th className="px-4 py-2 border-b border-gray-200 ltr:text-left rtl:text-right">
              {t("table-columns.customer-name")}
            </th>
            <th className="px-4 py-2 border-b border-gray-200 ltr:text-left rtl:text-right">
              {t("table-columns.paid-amount")}
            </th>
            <th className="px-4 py-2 border-b border-gray-200 ltr:text-left rtl:text-right">
              {t("table-columns.payable-amount")}
            </th>
            <th className="px-4 py-2 border-b border-gray-200 ltr:text-left rtl:text-right">
              {t("table-columns.due")}
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </section>
  );
};

export default TableView;
