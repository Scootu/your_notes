import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
export const SigninPage = () => {
  const [passClick, setPassClick] = useState<boolean>(true);
  const [confiPassClick, setConfiPassClick] = useState<boolean>(true);
  return (
    <section
      className="w-full relative h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/FWkgJPj/Cover-f8bcdcbc9989dfb1192a.png')",
      }}
    >
      <div className="grid grid-cols-2 containerX py-[60px]  px-[80px] mx-auto h-full">
        <div
          className="w-full p-[20px] bg-cover"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/y5fPW3p/Logo-Cover-a5ba67c981627275ccc5.png')",
          }}
        >
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
                  Your Notes
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[25px] px-[40px] bg-white">
          <h1 className="text-[3rem] text-center text-[#D375B9] font-bold mb-[1rem]">
            Signup{" "}
          </h1>
          <Form className="">
            <div className="mb-[1.5rem] ">
              <div className="w-full mb-[0.5rem]">
                <label className="block mb-[0.4rem] text-[#697386] font-bold ml-[0.5rem]">
                  Email
                </label>
                <input
                  className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                  type="email"
                  name="userEmail"
                  required
                />
              </div>
              <div className="w-full mb-[0.5rem] relative">
                <label className="block mb-[0.5rem] text-[#697386] font-bold ml-[0.5rem]">
                  Password
                </label>
                <input
                  className="w-full shadow border py-[9px] px-[12px] rounded-lg outline-none font-normal "
                  type={passClick ? "password" : "text"}
                  name="userPassword"
                  maxLength={32}
                  required
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
              </div>
            </div>
            <button
              type="button"
              className="text-[1.25rem] bg-[#D375B9] text-white font-bold rounded-md py-[10px] w-full mb-[1rem]"
            >
              Complete signup <FontAwesomeIcon icon={faArrowRight} />
            </button>
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
