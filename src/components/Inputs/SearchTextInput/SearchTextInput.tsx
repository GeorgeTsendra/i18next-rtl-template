import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-normal.svg";

const SearchTextInput = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-12 w-[40%] min-w-40 shadow-xl">
      <input
        placeholder={t("search")}
        className="flex w-[100%] h-[100%] ltr:pl-12 rtl:pr-12 rounded-[3px]"
      />
      <div className="absolute top-3 ltr:left-3 rtl:right-3">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchTextInput;
