import React from "react";
import { Link } from "react-router-dom";
const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i class='fas fa-user-circle text-primary'>Edit Profile</i>
      </Link>

      <Link to='/add-experience' class='btn btn-light'>
        <i class='fas fa-black-tie text-primary'>Add Experience</i>
      </Link>

      <Link to='/add-education' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary'>Add Education</i>
      </Link>
    </div>
  );
};

export default DashboardActions;
