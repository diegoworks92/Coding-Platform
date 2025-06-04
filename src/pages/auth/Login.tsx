import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { RootState } from "store/store";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("DiegoWorks");
  const [password, setPassword] = useState("diegoworks.com");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastLocation = useSelector(
    (state: RootState) => state.auth.lastLocation
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Comprueba si el nombre de usuario y la contraseña son correctos
    if (username === "DiegoWorks" && password === "diegoworks.com") {
      // Si son correctos, actualiza el estado de la autenticación
      dispatch(logIn());
      navigate(lastLocation || "/");
    } else {
      // Si no son correctos, muestra un mensaje de error
      alert("Nombre de usuario o contraseña incorrectos");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-white bg-secondary-900">
      <div className="bg-secondary-300 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Log <span className="text-primary">in</span>
        </h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h-4"
            />
            Sign in with Google
          </button>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <RiEyeLine
                data-testid="toggle-password"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeOffLine
                data-testid="toggle-password"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:bg-white transition-colors"
            >
              Enter
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/forget-password"
            className="hover:text-primary transition-colors"
          >
            Forgot your password?
          </Link>
          <span className="flex items-center gap-2">
            Don’t have an account?
            <Link
              to="/register"
              className="text-primary/80 hover:text-gray-100 transition-colors"
            >
              Register
            </Link>
          </span>
          <Link to="/" className="hover:text-primary transition-colors">
            Back to start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
