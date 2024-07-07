import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";

// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";

// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import Support from "./components/support/TermsOfService";
import MyCourses from "./components/my_courses/MyCourses";
import MyProgress from "./components/my-progress/MyProgress";
import Notifications from "./components/notifications/Notifications";
import Contact from "./components/support/Contact";
import Questions from "./components/support/Questions";
import TermsOfService from "./components/support/TermsOfService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        {/*         <Route path="/" element={<LayoutAuth />}>
        </Route> */}
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/my-progress" element={<MyProgress />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/frequently-asked-questions" element={<Questions />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
