import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { categories } from "../../services/apis";
import { NavbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/Logo-Full-Dark.png";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { apiConnector } from "../../services/apiConnector";
import { Link, matchPath, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef } from 'react';
import ProfileDropDown from '../core/Auth/ProfileDropdown';
import {  AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  
    const [sublinks, setsublinks] = useState([]);
    const fetchSublinks = async () => {
      try {
        const result = await apiConnector("GET", categories.CATEGORIES_API);
        if (result?.data?.data?.length > 0) {
          setsublinks(result?.data?.data);
        }
        localStorage.setItem("sublinks", JSON.stringify(result.data.data));
      } catch (error) {
        // setsublinks(JSON.parse(localStorage.getItem("sublinks")));
        // console.log("could not fetch sublinks",localStorage.getItem("sublinks"));
        console.log(error);
      }
    };
    useEffect(() => {
      fetchSublinks();
    }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);
      const show = useRef();
      const overlay = useRef();

      const shownav = () => {
        show.current.classList.toggle("navshow");
        overlay.current.classList.toggle("hidden");
      };

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div
      className={`flex h-14 items-center justify-center z-50 border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : "bg-richblack-800"
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* mobile Navbar */}
        {user && user?.accountType !== "Instructor" && (
          <div className=" md:hidden">
            <Link to="/dashboard/cart" className=" relative left-10">
              <div className="">
                <AiOutlineShoppingCart className=" fill-richblack-25 w-8 h-8" />
              </div>
              {totalItems > 0 && (
                <span className=" font-medium text-[12px] shadow-[3px ] shadow-black bg-yellow-100 text-richblack-900 rounded-full px-[4px] absolute -top-[2px] right-[1px]">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        )}

        <div
          className={`flex md:hidden  relative gap- flex-row ${
            token !== null && user?.accountType !== "Instructor"
              ? " -left-12"
              : ""
          }`}
        >
          <GiHamburgerMenu
            className={`w-16 h-8 fill-richblack-25 absolute left-10 -bottom-4 `}
            onClick={shownav}
          />
          <div
            ref={overlay}
            className=" fixed top-0 bottom-0 left-0 right-0 z-30 bg w-[100vw] hidden h-[100vh] overflow-y-hidden bg-[rgba(0,0,0,0.5)] "
            onClick={shownav}
          ></div>
          <div ref={show} className="mobNav z-50">
            <nav
              className=" items-center flex flex-col absolute w-[200px] -left-[80px] -top-7  glass2"
              ref={show}
            >
              {token == null && (
                <Link to="/login" className="">
                  <button
                    onClick={shownav}
                    className=" mt-4 text-center text-[15px] px-6 py-2 rounded-md font-semibold bg-yellow-50 text-black hover:scale-95 transition-all duration-200"
                  >
                    Login
                  </button>
                </Link>
              )}
              {token == null && (
                <Link to="/signup" className="text-yellow-50">
                  <button
                    onClick={shownav}
                    className="mt-4 text-center text-[15px] px-5 py-2 rounded-md font-semibold bg-yellow-50 text-black hover:scale-95 transition-all duration-200"
                  >
                    Signup
                  </button>
                </Link>
              )}

              {token != null && (
                <div className=" mt-2">
                  <p className=" text-richblack-50 text-center mb-2">Account</p>
                  <ProfileDropDown />
                  {/* </Link> */}
                </div>
              )}
              <div className=" mt-4 mb-4 bg-richblack-25 w-[200px] h-[2px]"></div>
              <p className=" text-xl text-yellow-50 font-semibold">Courses</p>
              <div className=" flex flex-col items-end pr-4">
                {sublinks?.length < 0 ? (
                  <div></div>
                ) : (
                  subLinks
                    ?.filter((subLink) => subLink?.courses?.length >= 0)
                    ?.map((subLink, i) => (
                      <Link
                        to={`/catalog/${subLink.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                        className="rounded-lg py-4 pl-4 font-semibold text-richblack-25"
                        key={i}
                      >
                        <p className="text-center flex flex-col items-center font-semibold">
                          {subLink.name}
                        </p>
                      </Link>
                    ))
                )}
              </div>
              <div className=" mt-4 mb-4 bg-richblack-25 w-[200px] h-[2px]"></div>
              <Link to="/about" className="p-2">
                <p className=" text-richblack-5 font-semibold">About</p>
              </Link>
              <Link to="/contact" className="p-2">
                <p className=" text-richblack-5 font-semibold">Contact</p>
              </Link>
            </nav>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25 font-semibold">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length >= 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p className="text-center">{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* login/ Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-500 bg-richblack-800 px-[12px] py-[8px] font-semibold text-richblack-25">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-500 bg-richblack-800 px-[12px] py-[8px] font-semibold text-richblack-25">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-0 md:hidden">
          {/* <AiOutlineMenu fontSize={24} fill="#AFB2BF" /> */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
