import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>Let's talk product</h2>
            <h5 className={classes.description}>
Alchemy Bits is an organization born with the idea of being able to transform almost anything into something
exceptionally better and more productive. This transformation idea or process can happen from something as
simple as the design of a website to something complex as a big online e-commerce system hosted on Linux
servers with an ORACLE database that integrates with SAP products over a secure SSL certificate protocol
using a versioning system and applying appropriate methodologies according to your needs.

            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Transform"
                description="This transformation is possible due to our years of experience in the world of information technology, under
                the branches of expertise in programming, mobile development, analysis, consulting, auditing, agile
                methodologies, project management, strategic alignment, documentation, business models and many more.
                "
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Our mission"
                description="Transform almost anything into something great by increasing productivity aligned with the short and long-term goals of your business, as well as creating a friendship and experience that transcends the traditional business relationships.
                "
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Our vision"
                description="Change the concept of 'transform to improve' into a synonymous with the words Alchemy Bits, not just inside
                the universe of information technologies, but also outside of it, as we know time itself transform needs into
                new requirements."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
