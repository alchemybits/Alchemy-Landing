import "./mainPage.css";
import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Send from "@material-ui/icons/Send";

import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

import bg12 from "assets/img/bg12.jpg";
import office2 from "assets/img/examples/office2.jpg";
import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";

function template() {
	const { classes } = this.props;
	const settings = {
	    dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true
	  };
  return (
    
     <Carousel {...settings}>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6} className={classNames(
                      
                    )}>
                    <h1 className={classes.title}>Peliculas</h1>
                    <h4>
                      Consulta las películas y estrenos de cine del momento.
                    </h4>
                    <br />
                    <Button color="danger" size="lg">
                      Continuar
                    </Button>
                    
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      
                    
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Blog</h1>
                    <h4>
                      Encuentra informacion sobre una vasta coleccion de cosas interesantes.
                    </h4>
                    <br />
                    <h6>Siguenos:</h6>
                    <div>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-google-plus-g" />
                      </Button>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>Noticias</h1>
                    <h4>
                      Sea informado con algunas de las noticias mas relevantes de nuestro pais Honduras
                    </h4>
                    <br />
                    <div>
                      
                      <Button color="info" size="lg">
                        <Send /> Ver Ahora
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
        </Carousel>
    
  );
};

export default template;
