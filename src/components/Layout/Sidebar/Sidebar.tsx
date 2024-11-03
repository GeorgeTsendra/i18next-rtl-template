import { useTranslation } from "react-i18next";
import { ReactComponent as SidebarIcon } from "../../../assets/icons/dashboard-icon.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/setting.svg";
import SidebarTab from "../../SidebarTab/SidebarTab";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between items-center w-[230px] bg-white pt-12">
      <div className="w-[100%]">
        <span className="text-blue-600 font-bold text-xl ltr:pl-6 rtl:pr-6">
          React + i18n-rtl
        </span>
        <div className="flex flex-col items-left mt-14">
          <SidebarTab
            label={t("sidebar.dashboard")}
            Icon={SidebarIcon}
            active
          />
          <SidebarTab label={t("sidebar.in-process")} Icon={SettingIcon} />
          <SidebarTab label={t("sidebar.in-process")} Icon={SettingIcon} />
          <SidebarTab label={t("sidebar.in-process")} Icon={SettingIcon} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
