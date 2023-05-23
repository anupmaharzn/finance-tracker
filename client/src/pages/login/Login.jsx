import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as routeLink from "../../routes";
import { Link } from "react-router-dom";
import "./login.scss";
import Button from "../../components/button/Button";
import { loginConfig } from "./loginConfig";
import { loginUser, clearErrors } from "../../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../../components/spinner/Spinner";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const dispatch = useDispatch();
  const { userInfo, error, loading } = useSelector((state) => state.user);
  const [togglePassword, setTogglePassword] = useState(false);
  const handlePasswordToggler = () => {
    setTogglePassword(!togglePassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (userInfo?.data?.token) {
      toast(`Welcome ${userInfo?.data?.username}`, {
        position: "top-right",
      });
      navigate("/user-portal");
    }
  }, [userInfo, navigate, dispatch, error]);

  const handleLoginForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <>
      {loading && <Spinner />}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      <div className="login">
        <div className="container">
          <div className="login-section">
            <span className="login-title">LOGIN</span>

            <form
              onSubmit={handleSubmit(handleLoginForm)}
              className="login-fields"
            >
              {/* email field */}
              <div className="login-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", loginConfig.email)}
                />
                {errors?.email && <p>{errors.email.message}</p>}
              </div>
              {/* password field */}
              <div className="login-field">
                <label htmlFor="password">Password</label>
                <input
                  type={togglePassword ? "text" : "password"}
                  name="password"
                  {...register("password", loginConfig.password)}
                />
                {togglePassword ? (
                  <svg
                    onClick={handlePasswordToggler}
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                  </svg>
                ) : (
                  <svg
                    onClick={handlePasswordToggler}
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M325.1 351.5L225.8 273.6c8.303 44.56 47.26 78.37 94.22 78.37C321.8 352 323.4 351.6 325.1 351.5zM320 400c-79.5 0-144-64.52-144-143.1c0-6.789 1.09-13.28 1.1-19.82L81.28 160.4c-17.77 23.75-33.27 50.04-45.81 78.59C33.56 243.4 31.1 251 31.1 256c0 4.977 1.563 12.6 3.469 17.03c54.25 123.4 161.6 206.1 284.5 206.1c45.46 0 88.77-11.49 128.1-32.14l-74.5-58.4C356.1 396.1 338.1 400 320 400zM630.8 469.1l-103.5-81.11c31.37-31.96 57.77-70.75 77.21-114.1c1.906-4.43 3.469-12.07 3.469-17.03c0-4.976-1.562-12.6-3.469-17.03c-54.25-123.4-161.6-206.1-284.5-206.1c-62.69 0-121.2 21.94-170.8 59.62L38.81 5.116C34.41 1.679 29.19 0 24.03 0C16.91 0 9.839 3.158 5.121 9.189c-8.187 10.44-6.37 25.53 4.068 33.7l591.1 463.1c10.5 8.203 25.57 6.333 33.69-4.073C643.1 492.4 641.2 477.3 630.8 469.1zM463.1 256c0 24.85-6.705 47.98-17.95 68.27l-38.55-30.23c5.24-11.68 8.495-24.42 8.495-38.08c0-52.1-43-96-95.1-96c-2.301 .0293-5.575 .4436-8.461 .7658C316.8 170 319.1 180.6 319.1 192c0 10.17-2.561 19.67-6.821 28.16L223.6 149.9c25.46-23.38 59.12-37.93 96.42-37.93C399.5 112 463.1 176.6 463.1 256z" />
                  </svg>
                )}
                {errors?.password && <p>{errors.password.message}</p>}
              </div>
              {/* submit button */}
              <div className="form-btn">
                <Button type="submit" theme="button">
                  LOGIN
                </Button>
                <Link to={routeLink.REGISTER_PAGE}>
                  Don&apos;t have an account yet?{" "}
                  <span className="link">Sign up</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
