import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Grid from "@material-ui/core/Grid";

import styles from "styles/jss/nextjs-material-kit/pages/makingPots.js";

// Sections for this page
import Introduction   from "pages-sections/MakingPots-Sections/Introduction.js";
import Decoration     from "pages-sections/MakingPots-Sections/Decoration.js";
import PaddleAndAvil  from "pages-sections/MakingPots-Sections/PaddleAndAvil.js";
import CoilAndScrape  from "pages-sections/MakingPots-Sections/CoilAndScrape.js";
import MakingIntro from "pages-sections/MakingPots-Sections/MakingIntro.js";
import Sequence from "pages-sections/MakingPots-Sections/Sequence.js";
import SectionCard from "pages-sections/MakingPots-Sections/SectionCard.js";

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
  
  const cards = [
    {
        img:"/img/2014-41-073_scan1.jpg",
        desc:"Paddle and Anvil",
        href: "../pages-sections/MakingPots-Sections/PaddleAndAvil.js"
        
    },
    {
        img:"img/c-27562_scan01.jpg",
        desc:"Coil and Scrape",
        href: "../pages-sections/MakingPots-Sections/CoilAndScrape.js"
    },
    {
        img:"img/c-27676_scan01.jpg",
        desc:"Pottery Decoration",
        href: "../pages-sections/MakingPots-Sections/Decoration.js"
    },
    {
        img:"img/c-28199_scan1.jpg",
        desc:"Making Pottery",
        href: "../pages-sections/MakingPots-Sections/MakingIntro.js"
    }
];
  
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
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>

      <Introduction />     

      <Grid container spacing={4} justify="center">
        {cards.map(card => (
          <Grid item key={card}>
            <SectionCard card={card}/>
          </Grid>
        ))}
      </Grid>
      
            
            <GridContainer justify="center"> 
              
              <PaddleAndAvil />
              <CoilAndScrape />
              <Decoration />
              <MakingIntro />
              <Sequence />
            </GridContainer>
          </div>
      <Footer />
    </div>
  );
}
