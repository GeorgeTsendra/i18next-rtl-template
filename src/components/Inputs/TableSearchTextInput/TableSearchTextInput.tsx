const TableSearchTextInput = ({
  label,
  placeholderText,
}: {
  label: string;
  placeholderText: string;
}) => {
  return (
    <div className="flex flex-col w-[22%]">
      <span className="mb-2 text-gray-800">{label}</span>
      <input
        className="flex rounded-[3px] h-[48px] ltr:pl-4 rtl:pr-4 border border-[1px] border-[#cecece]"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default TableSearchTextInput;
