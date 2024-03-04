import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Link, useActionData } from "react-router-dom";
export const SignupPage = () => {
  const { t, i18n } = useTranslation();
  const [passClick, setPassClick] = useState<boolean>(true);
  interface Error {
    userEmail?: string;
    userPassword?: string;
  }
  const actionError = useActionData() as Error;
  interface Language {
    nativeName: string;
  }

  const lngs: { [key: string]: Language } = {
    en: { nativeName: "En" },
    ar: { nativeName: "Ar" },
  };
  const mainContent = (
    <div className= "p-[15px] md:py-[40px] md:px-[40px] bg-white flex flex-col justify-center">
      <h1 className="text-[2.7rem] md:text-[2rem] text-center text-[#D375B9] font-bold mb-[1.5rem]">
        {<span>{t("Login")}</span>}
      </h1>
      <Form method="POST">
        <div className={"mb-[1.5rem]"}>
          <div className="w-full mb-[0.5rem]">
            <label
              className={
                i18n.resolvedLanguage === "en"
                  ? "validationInput"
                  : "validationInput direction"
              }
            >
              {t("validation:email")}
            </label>
            <input
              className={
                i18n.resolvedLanguage === "en"
                  ? "inputValideError"
                  : "inputValideError direction"
              }
              type="email"
              name="userEmail"
              required
            />
            {actionError !== undefined &&
              actionError.hasOwnProperty("userEmail") && (
                <p
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "ml-[0.5rem] text-red-500"
                      : "ml-[0.5rem] text-red-500 direction"
                  }
                >
                  {t(actionError.userEmail!.toString(), {
                    lng: i18n.resolvedLanguage,
                  })}
                </p>
              )}
          </div>
          <div className="w-full mb-[0.5rem] relative">
            <label
              className={
                i18n.resolvedLanguage === "en"
                  ? "validationInput"
                  : "validationInput direction"
              }
            >
              {t("validation:password")}
            </label>
            <input
              className={
                i18n.resolvedLanguage === "en"
                  ? "inputValideError"
                  : "inputValideError direction"
              }
              type={passClick ? "password" : "text"}
              name="userPassword"
              maxLength={32}
              required
            />
            {!passClick ? (
              <FontAwesomeIcon
                icon={faEye}
                className={
                  i18n.resolvedLanguage == "en"
                    ? "cursor-pointer absolute top-[45px] right-[10px]"
                    : "cursor-pointer absolute top-[45px] left-[10px]"
                }
                onClick={() => {
                  setPassClick(!passClick);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className={
                  i18n.resolvedLanguage == "en"
                    ? "cursor-pointer absolute top-[45px] right-[10px]"
                    : "cursor-pointer absolute top-[45px] left-[10px]"
                }
                onClick={() => {
                  setPassClick(!passClick);
                }}
              />
            )}
            {actionError !== undefined &&
              actionError.hasOwnProperty("userPassword") && (
                <p
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "ml-[0.5rem] text-red-500"
                      : "ml-[0.5rem] text-red-500 direction"
                  }
                >
                  {t(actionError.userPassword!.toString(), {
                    lng: i18n.resolvedLanguage,
                  })}
                </p>
              )}
          </div>
        </div>
        <button
          type={"submit"}
          className="whitespace-nowrap text-[1.25rem] h-[50px] bg-[#D375B9] text-white font-bold rounded-md py-[10px] w-full mb-[0.5rem]"
        >
          {i18n.resolvedLanguage == "en" ? (
            <>{t("Login")}</>
          ) : (
            <>{t("Login")}</>
          )}
        </button>
      </Form>
      <div className="text-center">
        <span className="text-[#697386] block ml-[0.5rem]">
          {t("Don't have an account!")}
        </span>
        <Link
          to={"/your_notes/signin"}
          className="text-[#D375B9]  text-[1rem] font-bold  w-full ml-[0.25rem]"
        >
          {t("Signup")}
        </Link>
      </div>
    </div>
  );

  const yourNotes = (
    <div
      className="w-full md:p-[20px] p-[5px] bg-cover relative "
      style={{
        backgroundImage:
          "url('https://i.ibb.co/y5fPW3p/Logo-Cover-a5ba67c981627275ccc5.png')",
      }}
    >
      <div className=" cursor-pointer absolute bottom-0 left-0  w-0 h-0  border-transparent border-l-0 border-r-[80px] md:border-b-red-700 border-b-[80px]">
        <div className="text-white text-[2rem] p-2 relative top-[35px] ">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className={
                i18n.resolvedLanguage === lng ? "hidden" : "text-white"
              }
              onClick={() => {
                i18n.changeLanguage(lng);
              }}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>
      <div className="px-[5px] py-[45px] h-full ">
        <div className="grid justify-center backdrop-blur-sm bg-white/30 h-full ">
          <div className="flex flex-col items-center justify-center py-[15px]  md:p-0">
            <svg
              width="70"
              height="66"
              viewBox="0 0 70 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="logo"
                d="M63.6364 10.494L27.3318 48.18L13.8409 34.188L18.3273 29.535L27.3318 38.874L59.15 5.874L63.6364 10.494ZM31.8182 59.4C17.7864 59.4 6.36364 47.553 6.36364 33C6.36364 18.447 17.7864 6.6 31.8182 6.6C36.8136 6.6 41.4909 8.118 45.4364 10.725L50.05 5.94C44.8636 2.211 38.5955 0 31.8182 0C14.2545 0 0 14.784 0 33C0 51.216 14.2545 66 31.8182 66C37.3227 66 42.5091 64.548 47.0273 61.974L42.2545 57.024C39.0727 58.542 35.5409 59.4 31.8182 59.4ZM54.0909 42.9H44.5455V49.5H54.0909V59.4H60.4545V49.5H70V42.9H60.4545V33H54.0909V42.9Z"
                fill="white"
              ></path>
            </svg>
            <h1 className="text-white text-[2.5rem]  md:text-[3.5rem] md:font-normal my-[0.67rem] tracking-wider">
              {"Your Notes"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <section
      className="w-full relative h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/FWkgJPj/Cover-f8bcdcbc9989dfb1192a.png')",
      }}
    >
      <div className="grid md:grid-cols-2 containerX py-[30px] px-[15px] md:py-[30px]  md:px-[80px] mx-auto h-full">
        {i18n.resolvedLanguage == "en" &&
          !/Mobile|Android/.test(navigator.userAgent) && (
            <>
              {yourNotes} {mainContent}
            </>
          )}
        {i18n.resolvedLanguage == "ar" &&
          !/Mobile|Android/.test(navigator.userAgent) && (
            <>
              {mainContent} {yourNotes}
            </>
          )}
        {/Mobile|Android/.test(navigator.userAgent) && (
          <>
            {yourNotes} {mainContent}
          </>
        )}
      </div>
    </section>
  );
};
