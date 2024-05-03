import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Error from './pages/Error';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Dashboard from "./pages/Dashboard";
import ViewCourse from './pages/ViewCourse';
import VerifyEmail from './pages/VerfiyEmail';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/Common/Navbar";
import { ACCOUNT_TYPE } from "./utils/constants";                              
import { Route, Routes } from 'react-router-dom';
import CourseDetails from "./pages/CourseDetails";
import Cart from "./components/core/Dashboard/Cart";
import UpdatePassword from './pages/UpdatePassword';
import ForgotPassword from './pages/ForgotPassword';
import OpenRoute from "./components/core/Auth/OpenRoute";
import Settings from "./components/core/Dashboard/Settings";
import AddCourse from './components/core/Dashboard/AddCourse';
import MyCourses from "./components/core/Dashboard/MyCourses";
import MyProfile from "./components/core/Dashboard/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import EditCourse from "./components/core/Dashboard/EditCourse";
import AdminPannel from "./components/core/Dashboard/AdminPannel";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.profile);
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="updatePassword/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        ></Route>
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route path="dashboard/admin-panel" element={<AdminPannel />} />
            </>
          )}
        </Route>

        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
      </Routes>
    </div>
  );
}
export default App;