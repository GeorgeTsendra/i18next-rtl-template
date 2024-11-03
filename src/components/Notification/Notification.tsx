import { ReactComponent as NotificationIcon } from "../../assets/icons/notification-bing.svg";

const Notification = () => {
  return (
    <span className="flex bg-white h-12 w-12 rounded-[3px] items-center justify-center ltr:ml-1 rtl:mr-1">
      <NotificationIcon />
    </span>
  );
};

export default Notification;
