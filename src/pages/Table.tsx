import TableManagementSection from "../components/Layout/TableManagementSection/TableManagementSection";
import TableView from "../components/Layout/TableView/TableView";

function Table() {
  return (
    <>
      <div className="mb-10 mt-10">
        <TableManagementSection />
      </div>
      <TableView />
    </>
  );
}

export default Table;
