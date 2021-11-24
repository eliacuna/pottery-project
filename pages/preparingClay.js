import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Filter1Icon from '@material-ui/icons/Filter1';
//import Filter2Icon from '@material-ui/icons/Filter2';
//import Filter3Icon from '@material-ui/icons/Filter3';
//import Filter4Icon from '@material-ui/icons/Filter4';
//import Filter5Icon from '@material-ui/icons/Filter5';
//import Filter6Icon from '@material-ui/icons/Filter6';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
//import Slide from "@material-ui/core/Slide";
//import IconButton from "@material-ui/core/IconButton";
//import Dialog from "@material-ui/core/Dialog";
//import DialogTitle from "@material-ui/core/DialogTitle";
//import DialogContent from "@material-ui/core/DialogContent";
//import DialogActions from "@material-ui/core/DialogActions";

//import Grid from "@material-ui/core/Grid";

import styles from "styles/jss/nextjs-material-kit/pages/makingPots.js";

// Sections for this page
import Introduction   from "pages-sections/MakingPots-Sections/Introduction.js";

const useStyles = makeStyles(styles);


export default function MakingPots(props) {
  const [classicModal, setClassicModal] = React.useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  
  return (
    <div>
      <Header
        color="transparent"
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
              <h1 className={classes.title} style={{zIndex: 1}}>Making Pots</h1>
              <h5 className={classes.title} style={{zIndex: 1}}>Preparing Clay</h5>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer justify="center"> 
              <Introduction />
              <GridItem>
              <h2 className={classes.cardTitle}>Gathering</h2> <br/>
              <h2 className={classes.cardTitle}>Mixing</h2> <br/>
              <h2 className={classes.cardTitle}>Tempering</h2>
              </GridItem>
            </GridContainer>
          </div>
      <Footer />
    </div>
  );
}
