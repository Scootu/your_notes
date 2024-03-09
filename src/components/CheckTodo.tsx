import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const CheckTodo: React.FC<{
  clickCheck: (is: boolean) => void;
}> = (props) => {
  const [isClickCheck, setIsClickCheck] = useState<boolean>(false);

  return (
    <div
      className="w-[40px] h-[40px] flex justify-center items-center"
      onClick={() => {
        setIsClickCheck(!isClickCheck);
        props.clickCheck(isClickCheck);
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
  );
};
