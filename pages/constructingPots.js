import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/makingPots.js";

// Sections for this page
import PaddleAndAvil  from "pages-sections/MakingPots-Sections/PaddleAndAvil.js";
import CoilAndScrape  from "pages-sections/MakingPots-Sections/CoilAndScrape.js";

//import Link from "next/link";
//import Link from '@material-ui/core/Link';
import Link from "next/link";
import Button from "components/CustomButtons/Button.js";
//import {Link} from "react-router-dom";




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

{/*target="_blank"*/} 

      <Parallax small filter responsive image="/img/exhibit.jpeg">
        <div className={classes.container}>
          <GridContainer>

            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{zIndex: 1}}>Making Pots</h1>
              <h5 className={classes.title} style={{zIndex: 1}}>Constructing Pots</h5>
              <br/>
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer justify="center"> 
                <a href="/makingPots">hi</a>
                <PaddleAndAvil/>
                <CoilAndScrape/>
            </GridContainer>
        </div>

      <Footer />
    </div>
  );
}
