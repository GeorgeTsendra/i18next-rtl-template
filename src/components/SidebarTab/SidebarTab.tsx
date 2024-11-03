const SidebarTab = ({
  Icon,
  label,
  active,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
}) => {
  return (
    <div className="ltr:pl-6 rtl:pr-6 w-[100%] relative cursor-pointer">
      <div className="flex flex-column items-left p-4 ">
        <Icon />
        <span className="ltr:ml-2 rtl:mr-2">{label}</span>
      </div>
      {active && (
        <span className="absolute h-[100%] w-1 bg-blue-600 top-0 left-0" />
      )}
    </div>
  );
};

export default SidebarTab;
