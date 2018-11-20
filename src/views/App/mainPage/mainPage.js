import React from "react";
import template from "./mainPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

class mainPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    return template.call(this);
  }
}

export default withStyles(headersStyle)(mainPage);
