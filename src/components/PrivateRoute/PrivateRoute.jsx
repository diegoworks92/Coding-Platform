import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ path, element }) {
  const auth = useSelector((state) => state.auth);
  return auth.loggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}
export default PrivateRoute;
