import { useSelector } from "react-redux";

import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart);
  const { paymentLoading } = useSelector((state) => state.course);

  if (paymentLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="mx-auto w-11/12 font-semibold max-w-[1000px] py-10">
      <h1 className="mb-14 text-3xl font-semibold text-richblack-5 montserrat">
        Cart
      </h1>
      <p className="border-b  border-b-richblack-400 pb-2 font-semibold text-richblack-400 crimson">
        {totalItems} Courses in Cart
      </p>

      {total > 0 ? (
        <div className="mt-1 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p className="font-semibold">Your Cart is Empty</p>
      )}
    </div>
  );
}
