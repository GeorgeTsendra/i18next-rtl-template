import { Link } from "react-router-dom";

const SidebarTab = ({
  Icon,
  label,
  active,
  path = "/",
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
  path?: string;
}) => {


  
  return (
    <Link
      className="ltr:pl-6 rtl:pr-6 w-[100%] relative cursor-pointer"
      to={path}
    >
      <div className="flex flex-column items-left p-4 ">
        <Icon />
        <span className="ltr:ml-2 rtl:mr-2">{label}</span>
      </div>
      {active && (
        <span className="absolute h-[100%] w-1 bg-blue-600 top-0 left-0" />
      )}
    </Link>
  );
};

export default SidebarTab;
