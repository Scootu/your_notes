import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { CheckTodo } from "./CheckTodo";
import { useTranslation } from "react-i18next";
export const TodoElement: React.FC<{
  message: string;
}> = (props) => {
  const { i18n } = useTranslation();
  const [isCompleted, setIsCompleted] = useState<boolean>(true);
  const toggleTodoState = (is: boolean) => {
    setIsCompleted(is);
  };
  return (
    <li className=" flex items-center border-b border-b-[#4c4d57] px-4 py-2 gap-3 w-full dark:bg-[#25273D] ">
      {i18n.resolvedLanguage == "en" ? (
        <>
          <CheckTodo clickCheck={toggleTodoState} />
          <p
            className={
              isCompleted
                ? "inputHomeStyle text-black dark:text-white"
                : "inputHomeStyle line-through text-[#767992]"
            }
          >
            {props.message}
          </p>
          <FontAwesomeIcon
            className="dark:text-white cursor-pointer"
            icon={faXmark}
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            className="dark:text-white cursor-pointer"
            icon={faXmark}
          />
          <p
            className={
              isCompleted
                ? "inputHomeStyle text-black dark:text-white direction text-right"
                : "inputHomeStyle line-through text-[#767992] direction text-right"
            }
          >
            {"إنهاء كورس جافا سكريبت"}
          </p>
          <CheckTodo clickCheck={toggleTodoState} />
        </>
      )}
    </li>
  );
};
