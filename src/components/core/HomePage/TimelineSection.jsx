import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.gif";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-[45%] flex flex-col lg:ml-32 ml-2 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div
                  className="flex mb-6 border-b-2 gap-6 border-richblack-50"
                  key={i}
                >
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-bold text-[18px]">{ele.Heading}</h2>
                    <p className="text-richblack-400 font-semibold mb-3">
                      {ele.Description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 lg:mr-20 mr-0 shadow-[0px_0px_30px_0px]">
          <div
            className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                            left-[50%] translate-x-[-50%] translate-y-[310%]"
          >
            {/* Section 1 */}
            <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <h1 className="text-3xl font-bold">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold ">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className=" object-cover h-[400px] mx-auto lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
