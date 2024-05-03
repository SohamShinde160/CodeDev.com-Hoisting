import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../components/core/HomePage/Button";
import ReviewSlider from '../components/Common/ReviewSlider';
import Codeblocks from "../components/core/HomePage/Codeblocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import backgroundImg1 from "../assets/Images/random bg img/coding bg1.jpg";
import backgroundImg2 from "../assets/Images/random bg img/coding bg2.jpg";
import backgroundImg3 from "../assets/Images/random bg img/coding bg3.jpg";
import backgroundImg4 from "../assets/Images/random bg img/coding bg4.jpg";
import backgroundImg6 from "../assets/Images/random bg img/coding bg6.jpg";
import backgroundImg7 from "../assets/Images/random bg img/coding bg7.jpeg";
import backgroundImg8 from "../assets/Images/random bg img/coding bg8.jpg";
import "../App.css";
import Footer from "../components/Common/Footer";

const randomImges = [
  backgroundImg1,
  backgroundImg2,
  backgroundImg3,
  backgroundImg4,
  backgroundImg6,
  backgroundImg7,
  backgroundImg8,
];

const Home = () => {
  const [backgroundImg, setBackgroundImg] = useState(null);
  useEffect(() => {
        const bg = randomImges[Math.floor(Math.random() * randomImges.length)]
        setBackgroundImg(bg);
    }, [])
  return (
    <div>
      <div>
        <div className="w-full h-[450px] md:h-[650px]  absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
          <img
            src={backgroundImg}
            alt="Background"
            className="w-full h-full object-cover z-0 "
          />

          <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
        </div>
      </div>
      <div className=" ">
        {/*1st Section */}
        <div className="relative mx-auto md:top-24 top-0 flex flex-col w-11/12 items-center max-w-maxContent justify-between gap-8 text-white">
          <Link to={"/signup"}>
            {/* become a instructor button*/}
            <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
              <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                <p>Become a Instructor</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>
          {/* Heading Section */}
          <div className="text-center text-3xl md:text-4xl font-semibold">
            Empower your future with
            <HighlightText text={"Coding Skills"} />
          </div>
          {/* Sub Heading */}
          <div className="-mt-3 w-[80%] md:text-center text-sm md:text-lg font-bold text-richblack-200">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects and personalized feedback from
            instructors.
          </div>
          {/* Button Section */}
          <div className=" flex flex-row gap-7">
            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
              Book a Demo
            </CTAButton>
          </div>

          {/* Code Section 1 */}
          <div className="relative md:top-20 top-0">
            <Codeblocks
              position={"lg:flex-row"}
              heading={
                <div className="text-2xl lg:text-4xl sm:w-full font-semibold">
                  Unlock your
                  <HighlightText text={"coding potential"} /> with our online
                  courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              backgroundGradient={<div className="grad"></div>}
            />
          </div>
          {/* Code Section 2 */}
          <div className="relative md:top-20 top-0">
            <Codeblocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="text-2xl lg:text-4xl sm:w-full font-semibold ">
                  Start
                  <HighlightText text={"coding in seconds"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Continue Lesson",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-caribbeangreen-25"}
              codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
              backgroundGradient={<div className="grad2 absolute"></div>}
            />
          </div>
          {/* Explore More Section */}
          <ExploreMore />
        </div>

        {/*2nd Section */}
        <div className="hidden lg:block lg:h-[200px]"></div>

        <div className="bg-pure-greys-5 text-richblack-700 ">
          <div className="homepage_bg h-[320px]">
            {/* explore course category */}
            <div className="mx-auto flex w-11/12  max-w-maxContent flex-col items-center justify-between gap-8">
              <div className="lg:h-[150px]"></div>
              <div className="flex flex-row gap-7  text-white lg:mt-32">
                <CTAButton active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-11/12 max-w-maxContent mb-10 flex-col items-center justify-between gap-8 ">
            {/* Job that is in Demand - Section 1 */}
            <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
              <div className="text-4xl font-semibold lg:w-[45%] ">
                Get the skills you need for a{" "}
                <HighlightText text={"job that is in demand."} />
              </div>
              <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                <div className="text-[16px] font-bold">
                  The modern CodeDev.com is the dictates its own terms. Today, to
                  be a competitive specialist requires more than professional
                  skills.
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                  <div className="">Learn More</div>
                </CTAButton>
              </div>
            </div>
          </div>

          <TimelineSection />
        </div>

        {/*3rd Section */}
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
          {/* become a Instructor */}
          <InstructorSection />
          <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
