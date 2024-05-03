import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import { ImGithub, ImLinkedin2 } from "react-icons/im";


// Images
import CodeDevLogo from "../../assets/Logo/Logo-Full-Dark.png";

// footer data
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
];
const Plans = ["Paid memberships", "For students",];
const Community = ["Forums", "Chapters", "Events"];



const Footer = () => {
  return (
    <div className="bg-richblack-800 mx-7 rounded-3xl mb-10">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={CodeDevLogo} alt="" className="object-contain" />
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
              {/* social icons */}
              <div className="flex gap-3 text-lg duration-200">
                <svg
                  className="w-5 cursor-pointer hover:scale-95 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="facebook"
                >
                  <path
                    fill="#1976D2"
                    d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    fill-rule="evenodd"
                    d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="mailto:shindesoham390@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 cursor-pointer hover:scale-95"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4caf50"
                      d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                    ></path>
                    <path
                      fill="#1e88e5"
                      d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                    ></path>
                    <polygon
                      fill="#e53935"
                      points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                    ></polygon>
                    <path
                      fill="#c62828"
                      d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                    ></path>
                    <path
                      fill="#fbc02d"
                      d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/SohamSShinde1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 cursor-pointer hover:scale-95"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 126.24 102.59"
                    id="twitter"
                  >
                    <path
                      fill="#1da1f2"
                      d="M40.58,115.3c47.64,0,73.69-39.47,73.69-73.69,0-1.12,0-2.24-.07-3.35a52.7,52.7,0,0,0,12.92-13.41,51.7,51.7,0,0,1-14.87,4.08A26,26,0,0,0,123.63,14.6a51.9,51.9,0,0,1-16.45,6.29A25.92,25.92,0,0,0,63.05,44.51,73.53,73.53,0,0,1,9.67,17.45a25.92,25.92,0,0,0,8,34.58A25.71,25.71,0,0,1,6,48.78c0,.11,0,.22,0,.33A25.91,25.91,0,0,0,26.73,74.5a25.86,25.86,0,0,1-11.7.44,25.93,25.93,0,0,0,24.2,18A52,52,0,0,1,7.06,104a52.72,52.72,0,0,1-6.18-.36,73.32,73.32,0,0,0,39.7,11.63"
                      transform="translate(-.88 -12.7)"
                    ></path>
                  </svg>
                </a>
                <svg
                  className="w-5 cursor-pointer hover:scale-95"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="youtube"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path
                      fill="#F44336"
                      d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                    ></path>
                    <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
                  </g>
                </svg>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-[35%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex ">
            {BottomFooter.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  className={` ${
                    BottomFooter.length - 1 === ind
                      ? ""
                      : "border-r border-richblack-700 "
                  }
                   px-3 cursor-pointer hover:text-richblack-50 transition-all duration-200`}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center flex flex-col sm:flex-row">
            <div className="flex ">
              <span> Developed by &nbsp;</span>

              <Link
                to="https://github.com/SohamShinde160"
                target="__blank"
                className="text-white font-medium hover:underline mr-1"
              >
                Soham S Shinde 🗿
              </Link>
            </div>

            <div> © 2024 CodeDev.com</div>
          </div>

          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/soham-shinde-1516862a4/"
              className="text-white p-3 hover:bg-richblack-700 rounded-full duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin2 size={17} />
            </a>
            <a
              href="https://github.com/SohamShinde160"
              className="text-white p-3 hover:bg-richblack-700 rounded-full duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub size={17} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;