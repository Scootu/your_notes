import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { TodoElement } from "../components/TodoElement";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../store/store";
import { useTranslation } from "react-i18next";
export const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const state = useAppSelector((state) => state.ui).isClick;

  const [isFiltred, setIsFiltred] = useState<"All" | "Active" | "Completed">(
    "All"
  );
  const [isClickCheck, setIsClickCheck] = useState<boolean>(false);
  return (
    <>
      <div className="px-4 py-2 flex items-center justify-center bg-white dark:bg-[#25273D] mx-auto sm:max-w-[540px] gap-3 shadow rounded-md mb-[1rem] ">
        {i18n.resolvedLanguage == "en" && (
          <>
            <div
              className="w-[40px] h-[40px] flex justify-center items-center"
              onClick={() => {
                setIsClickCheck(!isClickCheck);
              }}
            >
              {!isClickCheck ? (
                <div className="w-[30px] h-[30px] border dark:border-[#4c4d57] rounded-full"></div>
              ) : (
                <div className=" w-[30px] h-[30px] border dark:border-transparent rounded-full bg-[#D375B9] flex justify-center items-center ">
                  <FontAwesomeIcon className="text-white" icon={faCheck} />
                </div>
              )}
            </div>
            <input
              className="bg-white dark:bg-[#25273D] dark:text-[#767992] outline-none text-[#9495A5] w-full"
              type="text"
              name="userTodo"
              placeholder="Create a new todo..."
            />
          </>
        )}
        {i18n.resolvedLanguage == "ar" && (
          <>
            <input
              className="bg-white dark:bg-[#25273D] dark:text-[#767992] outline-none text-[#9495A5] w-full direction"
              type="text"
              name="userTodo"
              placeholder={t("createTodo")}
            />
            <div
              className="w-[40px] h-[40px] flex justify-center items-center"
              onClick={() => {
                setIsClickCheck(!isClickCheck);
              }}
            >
              {!isClickCheck ? (
                <div className="w-[30px] h-[30px] border dark:border-[#4c4d57] rounded-full"></div>
              ) : (
                <div className=" w-[30px] h-[30px] border dark:border-transparent rounded-full bg-[#D375B9] flex justify-center items-center ">
                  <FontAwesomeIcon className="text-white" icon={faCheck} />
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className=" w-full relative  shadow flex justify-center  ">
        <div className={state ? "todoListUl" : "todoListUl -z-10"}>
          <ul className="relative max-h-[340px] overflow-y-scroll ">
            <TodoElement message={"Complete online javascirt course"} />
            <TodoElement message={"Complete online javascirt course"} />
            <TodoElement message={"Complete online javascirt course"} />
            <TodoElement message={"Complete online javascirt course"} />
            <TodoElement message={"Complete online javascirt course"} />
            <TodoElement message={"Complete online javascirt course"} />
          </ul>

          <div className="flex items-center justify-between p-4 shadow rounded-b-sm bg-white dark:bg-[#25273D]">
            {i18n.resolvedLanguage == "en" ? (
              <>
                <p className="text-[#767992]">5 {t("itemsleft")}</p>
                {!/Mobile|Android/.test(navigator.userAgent) && (
                  <div className="flex gap-2 bg-white dark:bg-[#25273D]">
                    <button
                      type="button"
                      className={
                        isFiltred === "All"
                          ? "text-[#D375B9] font-bold"
                          : "text-[#767992] font-bold"
                      }
                      onClick={() => {
                        setIsFiltred("All");
                      }}
                    >
                      {t("All")}
                    </button>
                    <button
                      type="button"
                      className={
                        isFiltred === "Active"
                          ? "text-[#D375B9] font-bold"
                          : "text-[#767992] font-bold"
                      }
                      onClick={() => {
                        setIsFiltred("Active");
                      }}
                    >
                      {t("Active")}
                    </button>
                    <button
                      type="button"
                      className={
                        isFiltred === "Completed"
                          ? "text-[#D375B9] font-bold"
                          : "text-[#767992] font-bold"
                      }
                      onClick={() => {
                        setIsFiltred("Completed");
                      }}
                    >
                      {t("Completed")}
                    </button>
                  </div>
                )}
                <p className="text-[#767992] cursor-pointer">
                  {t("ClearCompleted")}
                </p>
              </>
            ) : (
              <>
                <p className="text-[#767992] cursor-pointer">
                  {t("ClearCompleted")}
                </p>
                {!/Mobile|Android/.test(navigator.userAgent) && (
                  <div className="flex gap-2 bg-white dark:bg-[#25273D]">
                    <button
                      type="button"
                      className={
                        isFiltred === "Completed"
                          ? "text-[#D375B9] font-bold"
                          : "text-[#767992] font-bold"
                      }
                      onClick={() => {
                        setIsFiltred("Completed");
                      }}
                    >
                      {t("Completed")}
                    </button>
                    <button
                      type="button"
                      className={
                        isFiltred === "Active"
                          ? "text-[#D375B9] font-bold"
                          : "text-[#767992] font-bold"
                      }
                      onClick={() => {
                        setIsFiltred("Active");
                      }}
                    >
                      {t("Active")}
                    </button>
                    <button
                      type="button"
                      className={
                        isFiltred === "All"
                          ? "text-[#D375B9] font-bold"
                          : "text-[#767992] font-bold"
                      }
                      onClick={() => {
                        setIsFiltred("All");
                      }}
                    >
                      {t("All")}
                    </button>
                  </div>
                )}
                <p className="text-[#767992]">5 {t("itemsleft")}</p>
              </>
            )}
          </div>
          {/Mobile|Android/.test(navigator.userAgent) && (
            <div className="flex items-center justify-center gap-2 p-4 shadow rounded-sm mt-[1rem] bg-white dark:bg-[#25273D]">
              {i18n.resolvedLanguage == "en" ? (
                <>
                  <button
                    type="button"
                    className={
                      isFiltred === "All"
                        ? "text-[#D375B9] font-bold"
                        : "text-[#767992] font-bold"
                    }
                    onClick={() => {
                      setIsFiltred("All");
                    }}
                  >
                    {t("All")}
                  </button>
                  <button
                    type="button"
                    className={
                      isFiltred === "Active"
                        ? "text-[#D375B9] font-bold"
                        : "text-[#767992] font-bold"
                    }
                    onClick={() => {
                      setIsFiltred("Active");
                    }}
                  >
                    {t("Active")}
                  </button>
                  <button
                    type="button"
                    className={
                      isFiltred === "Completed"
                        ? "text-[#D375B9] font-bold"
                        : "text-[#767992] font-bold"
                    }
                    onClick={() => {
                      setIsFiltred("Completed");
                    }}
                  >
                    {t("Completed")}
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className={
                      isFiltred === "Completed"
                        ? "text-[#D375B9] font-bold"
                        : "text-[#767992] font-bold"
                    }
                    onClick={() => {
                      setIsFiltred("Completed");
                    }}
                  >
                    {t("Completed")}
                  </button>
                  <button
                    type="button"
                    className={
                      isFiltred === "Active"
                        ? "text-[#D375B9] font-bold"
                        : "text-[#767992] font-bold"
                    }
                    onClick={() => {
                      setIsFiltred("Active");
                    }}
                  >
                    {t("Active")}
                  </button>
                  <button
                    type="button"
                    className={
                      isFiltred === "All"
                        ? "text-[#D375B9] font-bold"
                        : "text-[#767992] font-bold"
                    }
                    onClick={() => {
                      setIsFiltred("All");
                    }}
                  >
                    {t("All")}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
