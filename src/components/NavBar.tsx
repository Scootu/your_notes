import { faMoon, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

export const NavBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  interface Language {
    nativeName: string;
  }

  const lngs: { [key: string]: Language } = {
    en: { nativeName: "En" },
    ar: { nativeName: "Ar" },
  };
  return (
    <nav className="flex justify-between items-center p-[5px]">
      <div className="flex text-[1.5rem] text-[#D375B9] items-center gap-2">
        <span>
          <svg
            width="40"
            height="40"
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
      <ul className="flex items-center justify-center gap-2 text-[28px]">
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
        <li>
          <FontAwesomeIcon
            className="text-[32px] text-[#D375B9]"
            icon={faMoon}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="text-[32px] text-[#D375B9]"
            icon={faUser}
          />
        </li>
      </ul>
    </nav>
  );
};
