import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab} from '@material-ui/core';
import {AppBar, Toolbar, IconButton, Typography, Link} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link as RouterLink, Router } from 'react-router-dom'

export default function Header(props) {

  return (
    <React.Fragment>
      <Tabs>
        <RouterLink to="/">
          <Tab label="Home" />
        </RouterLink>
        <RouterLink to="/factcheck">
          <Tab label="Fact Check" />
        </RouterLink>
        <RouterLink to="/culture">
          <Tab label="Culture" />
        </RouterLink>
        <RouterLink to="/donationmatch">
          <Tab label="Donation Matching" />
        </RouterLink>
        <RouterLink to="/blogs">
          <Tab label="Blogs" />
        </RouterLink>
        <RouterLink to="/about">
          <Tab label="About" />
        </RouterLink>
      </Tabs>
    </React.Fragment>
  );
}
