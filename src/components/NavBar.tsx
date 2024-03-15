import { faMoon, faUser, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { isBtnClick } from "../store/features/uiChange";

export const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  interface Language {
    nativeName: string;
  }

  const lngs: { [key: string]: Language } = {
    en: { nativeName: "En" },
    ar: { nativeName: "Ar" },
  };
  useEffect(() => {
    // Check if dark mode is preferred by user or OS
    // const prefersDarkMode =
    //   localStorage.theme === "dark" ||
    //   (!("theme" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches);

    // // Set initial dark mode state
    // setIsDarkMode(prefersDarkMode);

    // Update local storage and apply class to HTML element when isDarkMode changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }

    // Cleanup: remove theme from local storage when isDarkMode is unset
    return () => {
      localStorage.removeItem("theme");
    };
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header>
      <nav className="flex justify-between items-center p-[10px] shadow  dark:bg-[#241229]">
        <div className="flex text-[1.5rem] text-[#D375B9] items-center gap-2">
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 70 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="logo"
                d="M63.6364 10.494L27.3318 48.18L13.8409 34.188L18.3273 29.535L27.3318 38.874L59.15 5.874L63.6364 10.494ZM31.8182 59.4C17.7864 59.4 6.36364 47.553 6.36364 33C6.36364 18.447 17.7864 6.6 31.8182 6.6C36.8136 6.6 41.4909 8.118 45.4364 10.725L50.05 5.94C44.8636 2.211 38.5955 0 31.8182 0C14.2545 0 0 14.784 0 33C0 51.216 14.2545 66 31.8182 66C37.3227 66 42.5091 64.548 47.0273 61.974L42.2545 57.024C39.0727 58.542 35.5409 59.4 31.8182 59.4ZM54.0909 42.9H44.5455V49.5H54.0909V59.4H60.4545V49.5H70V42.9H60.4545V33H54.0909V42.9Z"
                fill="#D375B9"
              ></path>
            </svg>
          </span>
          <span>{t("home:YourNotes")} </span>
        </div>
        <ul className="flex items-center justify-center gap-4 md:gap-6 text-[28px]">
          <li>
            {" "}
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                className={
                  i18n.resolvedLanguage === lng ? "hidden" : "text-[#D375B9]"
                }
                onClick={() => {
                  i18n.changeLanguage(lng);
                }}
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </li>
          <li onClick={toggleDarkMode} className="w-[28px] h-[42px]">
            {!isDarkMode ? (
              <FontAwesomeIcon
                className="text-[28px] text-[#D375B9] cursor-pointer"
                icon={faMoon}
              />
            ) : (
              <FontAwesomeIcon
                className="text-[28px] text-[#D375B9] cursor-pointer"
                icon={faSun}
              />
            )}
          </li>
          <li>
            <FontAwesomeIcon
              className="text-[28px] text-[#D375B9] cursor-pointer"
              icon={faUser}
              onClick={() => {
                setIsClick(!isClick);
                if (/Mobile|Android/.test(navigator.userAgent))
                  dispatch(isBtnClick(isClick));
              }}
            />
          </li>
        </ul>
      </nav>
      {!/Mobile|Android/.test(navigator.userAgent) && isClick && (
        <div className="absolute top-[70px] right-[20px] px-[8px] py-[10px] w-[200px]  bg-white border rounded-md dark:bg-[#241229] ">
          <p className="px-8 py-6 text-[#D375B9] text-center font-bold">
            hi Mohammed
          </p>
          <div className="flex flex-col gap-2">
            <Link to={"/your_notes/home/edit"} className="btn bg-[#7C8495]">
              Modify User info
            </Link>
            <Link to={"/your_notes/login"} className="btn bg-[#D375B9]">
              Logout
            </Link>
          </div>
        </div>
      )}
      {/Mobile|Android/.test(navigator.userAgent) && isClick && (
        <div className="fixed top-[60px] left-0 w-[100%] h-screen bg-[#000000BF] flex flex-col items-center justify-center z-100">
          <p className="px-8 py-6 text-[#D375B9] text-center font-bold">
            hi Mohammed
          </p>
          <div className="flex flex-col gap-2 px-[40px] w-full ">
            <Link to={"/your_notes/home/edit"} className="btn bg-[#7C8495]">
              Modify User info
            </Link>
            <Link to={"/your_notes/login"} className="btn bg-[#D375B9]">
              Logout
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
