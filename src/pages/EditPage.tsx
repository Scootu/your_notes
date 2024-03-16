import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, useActionData } from "react-router-dom";
import { ErrorValidationForm } from "../@types/Types";
export const EditPage: React.FC = () => {
  const [passClick, setPassClick] = useState<boolean>(true);
  const { t, i18n } = useTranslation();
  const formValidationError = useActionData() as ErrorValidationForm;
  const [isSaveBtn, setIsSaveBtn] = useState<boolean>(false);
  const [btnContent, setBtnContent] = useState<JSX.Element>(
    <span>{t("save")}</span>
  );
  const [deleteE, setDeleteE] = useState<boolean>(false);
  return (
    <>
      <div className="px-4 py-2 h-[57px] flex items-center justify-center bg-white dark:bg-[#25273D] text-[#D375B9] sm:max-w-[540px] mx-auto  shadow rounded-md mb-[1rem] ">
        {t("modify")}
      </div>
      <Form method="post" className=" sm:max-w-[540px] mx-auto">
        <div className="w-full bg-white dark:bg-[#25273D] px-[10px] py-[30px]  md:px-[60px] md:py-[30px] rounded-md editShadow">
          <div className="w-full mb-[0.5rem] ">
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
                  ? "inputValideError text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
                  : "inputValideError direction text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
              }
              type="email"
              name="userEmail"
              defaultValue="mohamed@gmail.com"
              onChange={() => {
                if (!isSaveBtn) {
                  setIsSaveBtn(true);
                }
              }}
            />
            {formValidationError !== undefined &&
              formValidationError.hasOwnProperty("userEmail") && (
                <p
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "ml-[0.5rem] text-red-500"
                      : "ml-[0.5rem] text-red-500 direction"
                  }
                >
                  {t(formValidationError.userEmail!.toString(), {
                    lng: i18n.resolvedLanguage,
                  })}
                </p>
              )}
          </div>
          <div className="w-full mb-[0.5rem] relative">
            <label
              className={
                i18n.resolvedLanguage === "en"
                  ? "validationInput "
                  : "validationInput direction"
              }
            >
              {t("validation:password")}
            </label>
            <input
              className={
                i18n.resolvedLanguage === "en"
                  ? "inputValideError text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
                  : "inputValideError direction text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
              }
              type={passClick ? "password" : "text"}
              name="userPassword"
              maxLength={32}
              defaultValue="-----------------"
              onChange={() => {
                if (!isSaveBtn) {
                  setIsSaveBtn(true);
                }
              }}
            />
            {!passClick ? (
              <FontAwesomeIcon
                icon={faEye}
                className={
                  i18n.resolvedLanguage == "en"
                    ? "cursor-pointer absolute top-[45px] right-[10px] dark:text-white"
                    : "cursor-pointer absolute top-[45px] left-[10px] dark:text-white"
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
                    ? "cursor-pointer absolute top-[45px] right-[10px] dark:text-white"
                    : "cursor-pointer absolute top-[45px] left-[10px] dark:text-white"
                }
                onClick={() => {
                  setPassClick(!passClick);
                }}
              />
            )}
            {formValidationError !== undefined &&
              formValidationError.hasOwnProperty("userPassword") && (
                <p
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "ml-[0.5rem] text-red-500"
                      : "ml-[0.5rem] text-red-500 direction"
                  }
                >
                  {t(formValidationError.userPassword!.toString(), {
                    lng: i18n.resolvedLanguage,
                  })}
                </p>
              )}
          </div>
          <div className="w-full mb-[0.5rem] ">
            <label
              className={
                i18n.resolvedLanguage === "en"
                  ? "validationInput"
                  : "validationInput direction"
              }
            >
              {t("validation:Username")}
            </label>
            <input
              className={
                i18n.resolvedLanguage === "en"
                  ? "inputValideError text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
                  : "inputValideError direction text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
              }
              type="text"
              name="username"
              defaultValue="mohamed"
              onChange={() => {
                if (!isSaveBtn) {
                  setIsSaveBtn(true);
                }
              }}
            />
            {formValidationError !== undefined &&
              formValidationError.hasOwnProperty("username") && (
                <p
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "ml-[0.5rem] text-red-500"
                      : "ml-[0.5rem] text-red-500 direction"
                  }
                >
                  {t(formValidationError.username!.toString(), {
                    lng: i18n.resolvedLanguage,
                  })}
                </p>
              )}
          </div>
          <div className="w-full mb-[0.25rem]">
            <label
              className={
                i18n.resolvedLanguage === "en"
                  ? "validationInput"
                  : "validationInput direction"
              }
            >
              {t("validation:Phone")}
            </label>
            <input
              className={
                i18n.resolvedLanguage === "en"
                  ? "inputValideError text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
                  : "inputValideError direction text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent"
              }
              type="number"
              name="userPhone"
              pattern="05\d{8}|06\d{8}|07\d{8}"
              title="Please enter a valid phone number starting with 05, 06, or 07 followed by 8 digits"
              defaultValue="01125252525"
              onChange={() => {
                if (!isSaveBtn) {
                  setIsSaveBtn(true);
                }
              }}
            />
            {formValidationError !== undefined &&
              formValidationError.hasOwnProperty("userPhone") && (
                <p
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "ml-[0.5rem] text-red-500"
                      : "ml-[0.5rem] text-red-500 direction"
                  }
                >
                  {t(formValidationError.userPhone!.toString(), {
                    lng: i18n.resolvedLanguage,
                  })}
                </p>
              )}
          </div>
          <div className="w-full mb-[0.25rem]">
            <label
              className={
                i18n.resolvedLanguage === "en"
                  ? "validationInput"
                  : "validationInput direction"
              }
            >
              {t("validation:BirthdayYear")}
            </label>
            <input
              className={
                i18n.resolvedLanguage === "en"
                  ? "inputValideError text-[#9495A5]  dark:bg-[#404363] dark:text-white dark:border-transparent"
                  : "inputValideError direction text-[#9495A5] dark:bg-[#404363] dark:text-white dark:border-transparent "
              }
              type="number"
              name="birthdayYear"
              maxLength={4}
              defaultValue="1990"
              onChange={() => {
                if (!isSaveBtn) {
                  setIsSaveBtn(true);
                }
              }}
            />
            {formValidationError !== undefined &&
              formValidationError.hasOwnProperty("birthdayYear") && (
                <p
                  className={
                    i18n.resolvedLanguage === "en"
                      ? "ml-[0.5rem] text-red-500"
                      : "ml-[0.5rem] text-red-500 direction"
                  }
                >
                  {t(formValidationError.birthdayYear!.toString(), {
                    lng: i18n.resolvedLanguage,
                  })}
                </p>
              )}
          </div>
        </div>
        {isSaveBtn && (
          <button
            type="submit"
            className="bg-[#D375B9] text-white text-[1rem] font-bold  w-full block text-center rounded-md h-[40px] mt-[1.5rem]"
            onClick={() => {
              setBtnContent(<div className="loader"></div>);
              setTimeout(() => {
                setBtnContent(<span>{t("save")}</span>);
                setIsSaveBtn(false);
              }, 2000);
              setDeleteE(false);
              setTimeout(() => {
                setDeleteE(true);
              }, 5000);
            }}
          >
            {btnContent}
          </button>
        )}
      </Form>
      {formValidationError !== undefined &&
        !isSaveBtn &&
        !deleteE &&
        formValidationError.hasOwnProperty("status") &&
        (formValidationError.status == "succeed" ? (
          <div className="flyDiv bg-[#32CD32]">{t("statusS")}</div>
        ) : (
          <div className="flyDiv bg-[#c42e2e]">{t("statusF")}</div>
        ))}
    </>
  );
};
