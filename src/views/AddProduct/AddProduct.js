import React from "react";
import template from "./AddProduct.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import * as firebase from "firebase";

// @material-ui/core components

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false,
      simpleSelect: "",
      multipleSelect: [],
      tags: ["amsterdam", "washington", "sydney", "beijing"]
    };

    

    this.handleTags = this.handleTags.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleMultiple = event => {
    this.setState({ multipleSelect: event.target.value });
  };
  handleTags(regularTags) {
    this.setState({ tags: regularTags });
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.user.Admin !== prevProps.user.Admin) {
      if (this.props.user.Admin)
        this.setState({
          isAdmin: true
        });
      else
        this.setState({
          isAdmin: false
        });
    }
  }

  render() {
    return template.call(this);
  }
}

export default withStyles(styles)(AddProduct);
