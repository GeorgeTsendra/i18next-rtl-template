import SearchTextInput from "../../Inputs/SearchTextInput/SearchTextInput";
import LocaleSwitcher from "../../Inputs/LocaleSwitcher/LocaleSwitcher";
import Notification from "../../Notification/Notification";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <SearchTextInput />
      <div className="flex flex-row">
        <LocaleSwitcher />
        <Notification />
      </div>
    </div>
  );
};

export default Header;
