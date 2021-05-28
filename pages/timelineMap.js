import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import MapSection from "pages-sections/TimelineMap-Sections/MapSection.js";
import SWNativePottery from "pages-sections/TimelineMap-Sections/SWNativePottery.js";
import Continuity from "pages-sections/TimelineMap-Sections/Continuity.js";
import DeepRoots from "pages-sections/TimelineMap-Sections/DeepRoots.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function TimelineMap(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Arizona State Museum"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter responsive image="/img/exhibit.jpeg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Timeline Map</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SWNativePottery /> 
          <MapSection />
          <DeepRoots />
          <Continuity />
        </div>
      </div>
      <Footer />
    </div>
  );
}
