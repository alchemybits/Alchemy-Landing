import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Send from "@material-ui/icons/Send";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import Carousel from "react-slick";

// core components
import Header from "components/Header/Header.jsx";
import SignOut from "components/SignOut/SignOut";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import * as firebase from "firebase";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.jsx";
import SectionCards from "views/PresentationPage/Sections/SectionCards.jsx";
import SectionContent from "views/PresentationPage/Sections/SectionContent.jsx";
import SectionSections from "views/PresentationPage/Sections/SectionSections.jsx";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.jsx";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.jsx";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.jsx";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.jsx";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";
import pageRoutes from "routes/pageRoutes.jsx";
import "../../Firebase";

import { connect } from "react-redux";
import { getUser } from "Actions/Actions";

import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const switchRoutes = isLogged => {
  //let routes = isLogged?dashboardRoutes:LdashboardRoutes;
  let routes = pageRoutes;
  // console.log("THIS ARE THIS ROUTES",routes);
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.redirect)
          return <Redirect from={prop.path} to={prop.to} key={key} />;

        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  );
};

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      color: "dark",
      isAdmin: false
    };

    this.go = this.go.bind(this);
  }

  go(link) {
    this.props.history.push(link);
  }

  getRoute() {
    return this.props.location.pathname !== "/";
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

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLogged: true });
        this.props.getUser(user);
      } else {
        this.setState({ isLogged: false });
      }
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* HEADER 3 START */}
        <div>
          <Header
            absolute
            brand="AlchemyBits"
            color={this.state.color}
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/Noticias"
                    className={classes.navLink}
                    onClick={e => {
                      e.preventDefault();
                      this.go("/Noticias");
                    }}
                    color="transparent"
                  >
                    Noticias
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/Blog"
                    className={classes.navLink}
                    onClick={e => {
                      e.preventDefault();
                      this.go("/Blog");
                    }}
                    color="transparent"
                  >
                    Blog
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/contactanos"
                    className={classes.navLink}
                    onClick={e => {
                      e.preventDefault();
                      this.go("/Contactanos");
                    }}
                    color="transparent"
                  >
                    Contactanos
                  </Button>
                </ListItem>
                {this.state.isAdmin && this.state.isLogged ? (
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/admin"
                      className={classes.navLink}
                      onClick={e => {
                        e.preventDefault();
                        this.go("/admin");
                      }}
                      color="info"
                    >
                      Admin
                    </Button>
                  </ListItem>
                ) : (
                  <div />
                )}
                {this.state.isLogged ? (
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/SignOut"
                      className={classes.navLink}
                      onClick={e => {
                        e.preventDefault();
                        this.go("/SignOut");
                      }}
                      color="danger"
                    >
                      Signout
                    </Button>
                  </ListItem>
                ) : (
                  <div />
                )}
              </List>
            }
          />

          <div className={classes.content}>
            <div className={classes.map}>
              {switchRoutes(this.state.isLogged)}
            </div>
          </div>
        </div>
        {/* HEADER 3 END */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getUser }
)(withStyles(headersStyle)(PresentationPage));
