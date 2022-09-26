 /* eslint-disable */
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userAction";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  function logoutUser() {
    dispatch(logout());
    alert.success("Logged Out Successfully");
  }
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`NUAUNA - ${user.name}'s Profile`} />
          <div className="profile-container">
            <h1>My Profile</h1>
            <div className="profile-flex-horizontal">
              <div className="profile-container-left">
                <img src={user.avatar.url} alt={user.name} />
              </div>
              <div className="profile-container-right">
                <div>
                  <p>
                    <b>Full Name: </b>
                  </p>
                  <p>{user.name}</p>
                </div>
                <div>
                  <p>
                    <b>Email:</b>
                  </p>
                  <p>{user.email}</p>
                </div>
                <div>
                  <p>
                    <b>Joined On:</b>
                  </p>
                  <p>{String(user.createdAt).substr(0, 10)}</p>
                </div>
              </div>
            </div>
            <div className="profile-redirect">
              <Link to="/me/update">
                <button className="home-explore-button">Update</button>
              </Link>
              <Link to="/orders">
                <button className="home-explore-button">My Orders</button>
              </Link>
              <Link to="/logout">
                <button onClick={logoutUser} className="home-explore-button">Logout</button>
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
