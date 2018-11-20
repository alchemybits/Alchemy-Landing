import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";

class SectionWork extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              We transform every bit of technology into something great!
            </h4>
            <form action="https://formspree.io/support@alchemybits.com" method="POST">
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}

                    name="name"
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}

                    name="_replyto"
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                    name: "test"
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}

                  name="message"
                />
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  className={`${classes.mrAuto} ${classes.mlAuto}`}
                >
                <input type="hidden" name="_format" value="plain" />
                <input type="hidden" name="_subject" value="New submission!" />
                  <Button color="primary" value="Send" type="submit">Send Message</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(SectionWork);
