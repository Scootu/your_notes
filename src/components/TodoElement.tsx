import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { CheckTodo } from "./CheckTodo";
export const TodoElement: React.FC<{
  message: string;
}> = (props) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(true);
  const toggleTodoState = (is: boolean) => {
    setIsCompleted(is);
  };
  return (
    <li className=" flex items-center border-b px-4 py-2 gap-3 w-full dark:bg-[#25273D] ">
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
    </li>
  );
};
