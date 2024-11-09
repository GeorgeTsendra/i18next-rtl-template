import { useTranslation } from "react-i18next";
import TableRow from "../../Table/TableRow/TableRow";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getInvoicesList } from "../../../redux/actions/invoicesActions";
import { RootState } from "../../../redux/store";
import { InvoiceT } from "../../../types/incoices";
import { useEffect } from "react";

const TableView = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { invoices } = useAppSelector((state: RootState) => state.invoices);

  useEffect(() => {
    dispatch(getInvoicesList());
  }, []);

  const renderTableRows = (list: Array<InvoiceT>) => {
    return list.map((invoice) => <TableRow data={invoice} key={invoice.id} />);
  };

  return (
    <section className="flex flex-col">
      <table className="min-w-full border border-gray-200 bg-white rounded-[3px] overflow-hidden relative">
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
        <tbody className="min-h-[200px]">
          {invoices === null ? null : invoices?.length ? (
            renderTableRows(invoices)
          ) : (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                {t("table.empty-list")}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default TableView;
