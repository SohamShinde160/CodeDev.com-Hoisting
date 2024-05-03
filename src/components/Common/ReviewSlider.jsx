import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"


// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"
// import SwiperCore, { Autoplay, FreeMode, Pagination } from 'swiper/core';
// Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"

// Icons
import { FaStar } from "react-icons/fa"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiConnector";
import { ratingsEndpoints } from "../../services/apis"






function ReviewSlider() {
  const [reviews, setReviews] = useState(null)
  const truncateWords = 15

  useEffect(() => {
    ; (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  
  // console.log('reviews= ', reviews)
  if(!reviews) return;


  return (
    <div className="text-white ">
      <div className="my-[50px] h-[184px] flex gap-7 flex-row max-w-maxContentTab lg:max-w-maxContent">
 


          {reviews.map((review, i) => {
            return (
              <div key={i}>
                <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] w-[220px] text-richblack-25 min-h-[250px] max-h-[250px] glass-bg">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5 text-[18px] capitalize">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-50">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>

                  <p className="font-semibold text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                        .split(" ")
                        .slice(0, truncateWords)
                        .join(" ")} ...`
                      : `${review?.review}`}
                  </p>

                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {/* {isNaN(review.rating) ? "N/A" : review.rating.toFixed(1)} */}
                      {review.rating}
                    </h3>
                    <ReactStars
                      count={5}
                      value={parseInt(review.rating)} // Convert to a number
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </div>
            )
          })}

      </div>
    </div>
  )
}

export default ReviewSlider