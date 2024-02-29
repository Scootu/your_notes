import {
  faArrowRight,
  faEye,
  faEyeSlash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import { useRef, useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { Form, Link, useActionData } from "react-router-dom";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        Signup: "إنشاء حساب",
      },
    },
    ar: {
      translation: {
        "Complete Signup": "إكمال إنشاء حساب",
      },
    },
  },
});

export const SigninPage = () => {
  const { t } = useTranslation();
  console.log(i18next.t("Your Notes"));
  type Errors = {
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  interface Error {
    username?: string;
    userPhone?: string;
    birthdayYear?: string;
  }

  const [passClick, setPassClick] = useState<boolean>(true);
  const [completB, setCompletB] = useState<boolean>(false);
  const [confiPassClick, setConfiPassClick] = useState<boolean>(true);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const [listErrors, setListErrors] = useState<Errors>({});
  const [btnContent, setBtnContent] = useState<JSX.Element>(
    <span>
      Complete signup <FontAwesomeIcon icon={faArrowRight} />
    </span>
  );
  const [btnType, setBtnType] = useState<
    "button" | "submit" | "reset" | undefined
  >("button");
  // const [laPage, setLaPage] = useState<boolean>(true);
  const actionError = useActionData() as Error;

  console.log(actionError);

  function checkErrors() {
    let errorArray: Errors = {};

    if (inputEmail.current!.value === "") {
      errorArray.email = "Email must not be empty";
    } else if (
      !String(inputEmail.current!.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errorArray.email = "Please enter a valid email address";
    }

    if (inputPassword.current!.value === "") {
      errorArray.password = "Password must not be empty";
    }
    if (confirmPassword.current!.value !== inputPassword.current!.value) {
      errorArray.confirmPassword = "Passwords do not match";
    }

    setListErrors(errorArray);

    if (Object.keys(errorArray).length === 0) {
      setCompletB(true);
      setBtnContent(<div className="loader"></div>);
    }
  }
  return (
    <section
      className="w-full relative h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/FWkgJPj/Cover-f8bcdcbc9989dfb1192a.png')",
      }}
    >
      <div className="grid grid-cols-2 containerX py-[30px]  px-[80px] mx-auto h-full relative">
        <div
          className="w-full p-[20px] bg-cover relative"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/y5fPW3p/Logo-Cover-a5ba67c981627275ccc5.png')",
          }}
        >
          <div className=" cursor-pointer  absolute bottom-0 left-0  w-0 h-0  border-transparent border-l-0 border-r-[80px] border-b-red-700 border-b-[80px]">
            <div className="text-white text-[2rem] p-2 relative top-[35px] ">
              Ar
            </div>
          </div>

          <div className="px-[10px] py-[20px] h-full ">
            <div className="grid justify-center backdrop-blur-sm bg-white/30 h-full ">
              <div className="flex flex-col items-center justify-center">
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
                <h1 className="text-white text-[3.5rem] font-normal my-[0.67rem] tracking-wider">
                  {"Your Notes"}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[25px] px-[40px] bg-white">
          <h1 className="text-[2rem] text-center text-[#D375B9] font-bold mb-[0.5rem]">
            {!completB ? (
              <span>Signup</span>
            ) : (
              <span>{t("Complete Signup", { lng: "ar" })}</span>
            )}
          </h1>
          <Form method="POST">
            <div className={completB ? "hidden" : "mb-[1.5rem] "}>
              <div className="w-full mb-[0.5rem]">
                <label className="block mb-[0.4rem] text-[#697386] font-bold ml-[0.5rem]">
                  Email
                </label>
                <input
                  className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                  type="email"
                  name="userEmail"
                  required
                  ref={inputEmail}
                />
                {listErrors.hasOwnProperty("email") && (
                  <p className="ml-[0.5rem] text-red-500">{listErrors.email}</p>
                )}
              </div>
              <div className="w-full mb-[0.5rem] relative">
                <label className="block mb-[0.5rem] text-[#697386] font-bold ml-[0.5rem]">
                  Password
                </label>
                <input
                  className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                  type={passClick ? "password" : "text"}
                  name="userPassword"
                  minLength={8}
                  maxLength={32}
                  required
                  ref={inputPassword}
                />
                {!passClick ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="cursor-pointer absolute top-[45px] right-[10px]"
                    onClick={() => {
                      setPassClick(!passClick);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="cursor-pointer absolute top-[45px] right-[10px]"
                    onClick={() => {
                      setPassClick(!passClick);
                    }}
                  />
                )}
                {listErrors.hasOwnProperty("password") && (
                  <p className="ml-[0.5rem] text-red-500">
                    {listErrors.password}
                  </p>
                )}
              </div>
              <div className="w-full mb-[0.5rem] relative">
                <label className="block mb-[0.5rem] text-[#697386] font-bold ml-[0.5rem]">
                  Confirm password
                </label>
                <input
                  className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                  type={confiPassClick ? "password" : "text"}
                  name="confirmPassword"
                  maxLength={32}
                  required
                  ref={confirmPassword}
                />
                {!confiPassClick ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="cursor-pointer absolute top-[45px] right-[10px]"
                    onClick={() => {
                      setConfiPassClick(!confiPassClick);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="cursor-pointer absolute top-[45px] right-[10px]"
                    onClick={() => {
                      setConfiPassClick(!confiPassClick);
                    }}
                  />
                )}
                {listErrors.hasOwnProperty("confirmPassword") && (
                  <p className="ml-[0.5rem] text-red-500">
                    {listErrors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
            {completB && (
              <div className={"mb-[0.25rem]"}>
                <div className="w-full mb-[0.25rem]">
                  <label className="block mb-[0.4rem] text-[#697386] font-bold ml-[0.5rem]">
                    Username
                  </label>
                  <input
                    className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                    type="text"
                    name="username"
                  />
                  {actionError !== undefined &&
                    actionError.hasOwnProperty("username") && (
                      <p className="ml-[0.5rem] text-red-500">
                        {actionError.username}
                      </p>
                    )}
                </div>
                <div className="w-full mb-[0.25rem]">
                  <label className="block mb-[0.4rem] text-[#697386] font-bold ml-[0.5rem]">
                    Phone
                  </label>
                  <input
                    className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                    type="number"
                    name="userPhone"
                    pattern="05\d{8}|06\d{8}|07\d{8}"
                    title="Please enter a valid phone number starting with 05, 06, or 07 followed by 8 digits"
                  />
                  {actionError !== undefined &&
                    actionError.hasOwnProperty("userPhone") && (
                      <p className="ml-[0.5rem] text-red-500">
                        {actionError.userPhone}
                      </p>
                    )}
                </div>
                <div className="w-full mb-[0.25rem]">
                  <label className="block mb-[0.4rem] text-[#697386] font-bold ml-[0.5rem]">
                    Birthday Year
                  </label>
                  <input
                    className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                    type="number"
                    name="birthdayYear"
                    maxLength={4}
                  />
                  {actionError !== undefined &&
                    actionError.hasOwnProperty("birthdayYear") && (
                      <p className="ml-[0.5rem] text-red-500">
                        {actionError.birthdayYear}
                      </p>
                    )}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                checkErrors();
                setTimeout(() => {
                  setBtnContent(<span>Signup</span>);
                  setBtnType("submit");
                }, 500);
              }}
              type={btnType}
              className="whitespace-nowrap text-[1.25rem] h-[50px] bg-[#D375B9] text-white font-bold rounded-md py-[10px] w-full mb-[0.25rem]"
            >
              {btnContent}
            </button>
            {completB && (
              <button
                type="button"
                onClick={() => {
                  setCompletB(false);
                  setBtnType("button");
                  setBtnContent(
                    <span>
                      Complete signup <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  );
                }}
                className="whitespace-nowrap text-[1.25rem] h-[50px] bg-[#697386] text-white font-bold rounded-md py-[10px] w-full "
              >
                Back <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            )}
          </Form>
          <div>
            <p className="text-[#697386] text-center">
              Already have an account!
            </p>
            <Link
              to={"/your_notes/login"}
              className="text-[#D375B9] text-[1rem] font-bold  w-full block text-center"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
