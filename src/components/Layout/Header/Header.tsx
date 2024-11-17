import LocaleSwitcher from "../../Inputs/LocaleSwitcher/LocaleSwitcher";
import Notification from "../../Notification/Notification";

const Header = () => {
  return (
    <header className="flex flex-row justify-end items-right">
      <div className="flex flex-row">
        <LocaleSwitcher />
        <Notification />
      </div>
    </header>
  );
};

export default Header;
