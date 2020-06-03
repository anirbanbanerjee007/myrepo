import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getcurrentprofile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const Dashboard = ({
  getcurrentprofile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getcurrentprofile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>
          <p>You have not set up your, profile, please add some </p>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getcurrentprofile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStatetoProps, { getcurrentprofile })(Dashboard);
