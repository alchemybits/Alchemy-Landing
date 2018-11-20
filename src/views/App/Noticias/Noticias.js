import React    from "react";
import template from "./Noticias.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

class Noticias extends React.Component {
  render() {
  	const classes = this.props;
    return template.call(this);
  }
}

export default withStyles(projectsStyle)(Noticias);
