import React from "react";
import { Link } from "react-router-dom";
import * as routeList from "../../routes";
import "./header.scss";
import logo from "../../assets/img/logo.png";
import login from "../../assets/img/enter.png";
import register from "../../assets/img/register.png";
import user from "../../assets/img/user.png";
import dashoard from "../../assets/img/dashboard.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    toast("Logout sucessfully");

    navigate("/");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} theme="dark" />

      <header className="header">
        <div className="container">
          <section className="main">
            <h1 className="logo">
              <Link to={routeList.HOME_PAGE}>
                <img src={logo} alt="brand" />
              </Link>
            </h1>

            {userInfo?.data?.token ? (
              <nav className="nav">
                <ul className="nav__items">
                  <li className="nav__item">
                    <Link className="nav__link" to={routeList.USER_PORTAL_PAGE}>
                      <span>Your Portal</span>{" "}
                      <img src={dashoard} alt="dashoard" />
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link className="nav__link" onClick={handleLogout}>
                      <span>Logout</span> <img src={login} alt="logout" />
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link className="nav__link">
                      <span className="user">{userInfo?.data?.username}</span>{" "}
                      <img src={user} alt="user" />
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className="nav">
                <ul className="nav__items">
                  <li className="nav__item">
                    <Link className="nav__link" to={routeList.LOGIN_PAGE}>
                      <span>Login</span> <img src={login} alt="login" />
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link className="nav__link" to={routeList.REGISTER_PAGE}>
                      <span>Sign Up</span> <img src={register} alt="register" />
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
