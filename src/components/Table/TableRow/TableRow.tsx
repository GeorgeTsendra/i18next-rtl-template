import { InvoiceT } from "../../../types/incoices";

const TableRow = ({ data }: { data: InvoiceT }) => {
  return (
    <tr>
      <td className="px-4 py-2 border-b border-gray-200 text-center">
        <input type="checkbox" />
      </td>
      <td className="px-4 py-2 border-b border-gray-200 text-blue-600">
        {data.id}
      </td>
      <td className="px-4 py-2 border-b border-gray-200">{data.date}</td>
      <td className="px-4 py-2 border-b border-gray-200">
        {data.customer_name}
      </td>
      <td className="px-4 py-2 border-b border-gray-200">
        {data.total_amount}
      </td>
      <td className="px-4 py-2 border-b border-gray-200">
        {data.payable_amount}
      </td>
      <td className="px-4 py-2 border-b border-gray-200"> {data.due}</td>
    </tr>
  );
};

export default TableRow;
