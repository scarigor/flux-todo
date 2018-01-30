import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import _ from 'lodash';

const UserRoute = (
  { isAuthenticated,
    component: Component,
    layout: Layout,
    ...rest
  }
) => (
  <Route {...rest} render={ props =>
    isAuthenticated ?
      <Layout>
        <Component {...props} />
      </Layout>
      : <Redirect to="/login" />}
  />
);

const mapStateToProps = state => ({
    isAuthenticated: !_.isEmpty(state.auth.user)
});

export default connect(mapStateToProps)(UserRoute);
