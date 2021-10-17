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

import styles from "styles/jss/nextjs-material-kit/pages/wallOfPots.js";

// Sections for this page
import IntroSection1 from "pages-sections/WallOfPots-Sections/IntroSection1.js";
import IntroSection2 from "pages-sections/WallOfPots-Sections/IntroSection2.js";
import IntroSection3 from "pages-sections/WallOfPots-Sections/IntroSection3.js";
import IntroSection4 from "pages-sections/WallOfPots-Sections/IntroSection4.js";
import IntroSection5 from "pages-sections/WallOfPots-Sections/IntroSection5.js";
import IntroSection6 from "pages-sections/WallOfPots-Sections/IntroSection6.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

function Pot(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  if(props.has3DModel == "true") {
    return (
    <div>

    <img onClick={() => setClassicModal(true)}
      alt="..."
      src={props.path}
      className={navImageClasses}
    />

    <GridContainer>
        <GridItem xs={6} sm={3} md={6} lg={4}>
        <Dialog
            classes={{
            root: classes.center,
            paper: classes.modal,
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
            >
            <h4 className={classes.modalTitle}>{props.name}</h4>
            </DialogTitle>
            <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
            >
            <p>
      <GridContainer justify="center">
        <GridItem xs={7} sm={6} md={6} lg={6} justify='center'>
            <div class="sketchfab-embed-wrapper">
              <iframe 
                  style={{display:'block'}, {width:"auto"}, {height:"auto"}, {marginLeft:"-40%"}} title={props.potID} frameborder='0' 
                  allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' 
                  allow='fullscreen; autoplay; vr' 
                  xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                  width="480" height="360" 
                  src={props.embed}>
              </iframe>
            </div>
            <br />
            <div style={{width:"9000px"}}>
              {props.captionLine1}<br />
              {props.captionLine2}<br />
              {props.captionLine3}<br />
              {props.captionLine4}<br />
              {props.captionLine5}<br />
              {props.potID}
            </div>
        </GridItem>
      </GridContainer>
            </p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
            <Button
                onClick={() => setClassicModal(false)}
                color="danger"
                simple
            >
                Close
            </Button>
            </DialogActions>
        </Dialog>
        </GridItem>
    </GridContainer>
    </div>
  )
  } else {
    return (
      <div>
  
      <img onClick={() => setClassicModal(true)}
        alt="..."
        src={props.path}
        className={navImageClasses}
      />
  
      <GridContainer>
          <GridItem xs={6} sm={3} md={6} lg={4}>
          <Dialog
              classes={{
              root: classes.center,
              paper: classes.modal,
              }}
              open={classicModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setClassicModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
          >
              <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
              >
              <h4 className={classes.modalTitle}>{props.name}</h4>
              </DialogTitle>
              <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
              >
              <p>
        <GridContainer justify="center">
          <GridItem xs={6} sm={6} md={7} lg={7} justify='center'>
              <div class="sketchfab-embed-wrapper">
                <img
                    style={{display:'block', height:'100%', width:'100%', alignContent:'center'}}
                    src={props.path}
                />
              </div>
              <br />
              <div>
                {props.captionLine1}<br />
                {props.captionLine2}<br />
                {props.captionLine3}<br />
                {props.captionLine4}<br />
                {props.captionLine5}<br />
                {props.potID}
              </div>
          </GridItem>
        </GridContainer>
              </p>
              </DialogContent>
              <DialogActions className={classes.modalFooter}>
              <Button
                  onClick={() => setClassicModal(false)}
                  color="danger"
                  simple
              >
                  Close
              </Button>
              </DialogActions>
          </Dialog>
          </GridItem>
      </GridContainer>
      </div>
    )
  }
}

export default function PotsPage(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
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
            <GridItem xs={6} sm={3} md={6}>
              <h1 className={classes.title} style={{zIndex: 1}}>Wall of Pots</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    
      <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer justify="center"> 
              <GridItem xs={10} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Column 1",
                      tabIcon: Filter1Icon,
                      tabContent: (
                      <div>
                        <IntroSection1 />
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="McDonald Pattern Corrugated Bowl" 
                                    embed="https://sketchfab.com/models/5866a04d3c04489d9e753c853ee6ffc8/embed"
                                    captionLine1="Mogollon, Point of Pines Province, c. 1150-1280 CE"
                                    captionLine2="Point of Pines Pueblo, Graham Co., AZ"
                                    captionLine3="UA Archaelogical Field School, 1952"
                                    potID="A-11451"
                                    path="/pot_imgs/archaeology/c1s1/A-11451_2006-960-image008.png"
                                    has3DModel="true"
                              />
                              
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Fourmile Polychrome Jar"
                                    captionLine1="Mogollon, Upper Little Colorado Province, c. 1330-1400 CE"
                                    captionLine2="Kinishba, Whiteriver, Gila Co., AZ"
                                    captionLine3="UA Archaelogical Project, 1931-1939"
                                    potID="A-3366"
                                    path="/pot_imgs/archaeology/c1s1/A-33664_2006-960-image009.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Tularosa Black-On-White Bird Effigy Canteen"
                                    captionLine1="Mogollon, Upper Little Colorado Province, c. 1200-1300 CE"
                                    captionLine2="Tonto-Roosevelt Basin, Gila Co., AZ"
                                    captionLine3="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine4="Gladwin Collection"
                                    potID="GP52910"
                                    path="/pot_imgs/archaeology/c1s1/GP-52910_2006-960-image024.png"
                                    has3DModel="false"
                              />
                        </GridItem>
                      </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                    name="Babicora Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Sitio Colonia Enriquez, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="McGinnis Collection"
                                    potID="GP38474"
                                    path="/pot_imgs/archaeology/c1s2/GP-38474_2006-905-53_scan02.png"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Dublan Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Paquimé, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of a Museum Friend, 1949"
                                    potID="A-7463"
                                    path="/pot_imgs/archaeology/c1s2/A-7463_2006-905-70_scan1-adj.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Ramos Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3643"
                                    path="/pot_imgs/archaeology/c1s2/GP-3643_2006-905-75_scan01.png"
                                    has3DModel="false"
                              />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Ramos Polychrome hooded human effigy jar, seated woman"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Paquimé vicinity, Río Casas Grandes, Chihuahua"
                                    captionLine4="ASM Purchase, 1934"
                                    captionLine5="Ledwidge Collection"
                                    potID="20674"
                                    path="/pot_imgs/archaeology/c1s2/20674_2006-905-71_scan1-adj.png"
                                    has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Ramos Polychrome hooded human effigy jar, seated woman nursing infant"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3724"
                                    path="img/pot-images/Col1/Shelf2/GP-3724.png"
                                    has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Ramos Polychrome hooded human effigy jar, squatting man"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Paquimé vicinity, Río Casas Grandes, Chihuahua"
                                    captionLine4="ASM Purchase, 1934"
                                    captionLine5="Ledwidge Collection"
                                    potID="20676"
                                    path="/pot_imgs/archaeology/c1s2/20676_2006-905-72_scan1-adj.png"
                                    has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Villa Ahumada Polychrome effigy jar, macaw nesting pens on ends"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3710"
                                    path="/pot_imgs/archaeology/c1s2/GP-3710_2006-905-77_scan1-adj.png"
                                    has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Villa Ahumada Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3624"
                                    path="/pot_imgs/archaeology/c1s2/Untitled-1.jpg"
                                    has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                    name="Ramos Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3638"
                                    path="/pot_imgs/archaeology/c1s3/GP-3638_2006-905-69_scan1-adj.png"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Ramos Polychrome jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP-3640"
                                    path="/pot_imgs/archaeology/c1s3/GP-3640_2006-905-65_scan1-x.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Escondida Polychrome, Tonto Variant jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1350–1450 CE"
                                    captionLine3="Paquimé vicinity, Río Casas Grandes, Chihuahua"
                                    captionLine4="ASM Purchase, 1934"
                                    captionLine5="Ledwidge Collection"
                                    potID="20658"
                                    path="/pot_imgs/archaeology/c1s3/20658_2006-905-53_scan01.png"
                                    has3DModel="false"
                              />
                        </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Madera Black-on-red hooded macaw effigy jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Houghton Collection"
                                    potID="GP10195"
                                    path="/pot_imgs/archaeology/c1s3/GP-10195_2006-905-161_scan01.png"
                                    has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Ramos Polychrome jar, sculpted snakes"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3621"
                                    path="/pot_imgs/archaeology/c1s3/GP-3621_2006-960-image011.png"
                                    has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                    name="Ramos Polychrome bird effigy jar"
                                    captionLine1="Casas Grandes, Northern Sierra Province"
                                    captionLine2="C. 1250–1450 CE"
                                    captionLine3="Rancho Corralitos, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Ledwidge Collection"
                                    potID="GP3631"
                                    path="/pot_imgs/archaeology/c1s3/GP-3631_2006-905-66_scan1-adj.png"
                                    has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                    name="Tularosa Black-on-white pitcher"
                                    captionLine1="Mogollon, Upper Little Colorado Province"
                                    captionLine2="C. 1200–1300 CE"
                                    captionLine3="Zuni River, Apache Co., AZ"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Scorse Collection"
                                    potID="GP1854"
                                    path="/pot_imgs/archaeology/c1s4/GP-1854_2006-905-143_scan01.png"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Gila Polychrome bowl"
                                    captionLine1="Salado, c. 1300–1450 CE"
                                    captionLine2="Globe vicinity, Pinal Creek, Gila Co., AZ"
                                    captionLine3="Gift of a Museum Friend, 1933"
                                    potID="6655"
                                    path="/pot_imgs/archaeology/c1s4/6655_2006-960-image004.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="El Paso Polychrome jar"
                                    captionLine1="Mogollon, Jornada Province"
                                    captionLine2="c. 1200–1400 CE"
                                    captionLine3="Janos vicinity, Río Casas Grandes, Chihuahua"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="McGinnis Collection"
                                    potID="GP38642"
                                    path="/pot_imgs/archaeology/c1s4/GP-38642_2006-905-140_scan1-adj.png"
                                    has3DModel="false"
                              />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Mimbres Black-on-white (Style III) bowl"
                                        embded="https://sketchfab.com/models/c77f3be868824117aa9863607971304a/embed"
                                        captionLine2="Mogollon, Mimbres Province"
                                        captionLine3="c. 1000–1150 CE"
                                        captionLine4="Pruitt Ranch Site, Mimbres River Valley, Grant Co., NM"
                                        captionLine5="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine6="Bowen Collection"
                                        potID="GP4955"
                                        path="/pot_imgs/archaeology/c1s4/4955_2006-960-image002.png"
                                        has3DModel="true"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Reserve Black-on-white bowl"
                                        captionLine1="Mogollon, Upper Little Colorado Province"
                                        captionLine2="C. 1100–1200 CE"
                                        captionLine3="Holbrook Mesa, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Scorse Collection"
                                        potID="GP1113"
                                        path="/pot_imgs/archaeology/c1s4/GP-1113_2006-905-63_scan01.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Mimbres Black-on-white (Style III) bowl"
                                        captionLine1="Mogollon, Mimbres Province"
                                        captionLine2="c. 1000–1150 CE"
                                        captionLine3="Pruitt Ranch Site, Mimbres River Valley, Grant Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Bowen Collection"
                                        potID="GP4915"
                                        path="/pot_imgs/archaeology/c1s4/GP-4915_2006-960-image017.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Puerco Black-on-red animal effigy pitcher"
                                        captionLine1="Mogollon, Upper Little Colorado Province"
                                        captionLine2="C. 1000–1180 CE"
                                        captionLine3="Nutria Canyon, McKinley Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Cousins Collection"
                                        potID="GP5973"
                                        path="/pot_imgs/archaeology/c1s4/GP-5973_2006-905-147_scan01.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Anchondo Red-on-brown jar"
                                        captionLine1="Mogollon, Northern Sierra Province,"
                                        captionLine2="C. 650–800 CE"
                                        captionLine3="Sitio Colonia Enriquez, Río Casas Grandes, Chihuahua"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="McGinnis Collection"
                                        potID="GP38509"
                                        path="/pot_imgs/archaeology/c1s4/GP-38509_2006-960-image019.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Tonto Polychrome pitcher"
                                        captionLine1="Salado, c. 1350–1450 CE"
                                        captionLine2="Gila Pueblo, Pinal Creek, Gila Co., AZ"
                                        captionLine3="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine4="Excavated by Harold S. Gladwin, 1941"
                                        potID="GP50570"
                                        path="/pot_imgs/archaeology/c1s4/GP-50570_2006-960-image023.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Wingate Polychrome bowl"
                                        captionLine1="(Gila Pueblo Foundation logo adapted from exterior)"
                                        captionLine2="Mogollon, Upper Little Colorado Province"
                                        captionLine3="C. 1100–1200 CE"
                                        captionLine4="Atarque Wash, Apache Co., AZ"
                                        captionLine5="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine6="Scorse Collection"
                                        potID="GP2538"
                                        path="/pot_imgs/archaeology/c1s4/GP-2538_2006-960-image010.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                    name="Alma Smudged bowl"
                                    captionLine1="Mogollon, Point of Pines Province"
                                    captionLine2="C. 400–600 CE"
                                    captionLine3="Crooked Ridge Village, Point of Pines, Graham Co., AZ"
                                    captionLine4="UA Archaeological Field School, 1949"
                                    potID="A-7749"
                                    path="/pot_imgs/archaeology/c1s5/A-7749_2006-960-image006.png"
                                    has3DModel="false"
                              />
                              
                          </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Tularosa Patterned Corrugated jar"
                                    captionLine1="Mogollon, Pine Lawn Province"
                                    captionLine2="C. 1050–1250 CE"
                                    captionLine3="Mineral Creek, Apache Co., AZ"
                                    captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine5="Scorse Collection"
                                    potID="GP3054"
                                    path="/pot_imgs/archaeology/c1s5/gp3054_p1.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                    name="Alma Knobby shell trumpet effigy"
                                    captionLine1="Mogollon, Point of Pines Province"
                                    captionLine2="C. 1150–1265 CE"
                                    captionLine3="AZ W:9:118 (ASM), Graham Co., AZ"
                                    captionLine4="UA Archaeological Field School, 1952"
                                    potID="A-11744"
                                    path="/pot_imgs/archaeology/c1s5/A-11744_2006-905-149_scan1-adj.png"
                                    has3DModel="false"
                              />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Ramos Black bowl"
                                        captionLine1="Casas Grandes, Northern Sierra Province"
                                        captionLine2="C. 1250–1450 CE"
                                        captionLine3="Paquimé, Río Casas Grandes, Chihuahua"
                                        captionLine4="ASM Purchase, 1926"
                                        captionLine5="Gray Collection"
                                        potID="214462-X-2"
                                        path="/pot_imgs/archaeology/c1s5/2006-960-image005.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Kinishba Red jar"
                                        captionLine1="Mogollon, Point of Pines Province"
                                        captionLine2="C. 1265–1400 CE"
                                        captionLine3="Red Bow Cliff Dwelling"
                                        captionLine4="Point of Pines, Graham Co., AZ"
                                        captionLine5="UA Archaeological Field School, 1955"
                                        potID="A-16143"
                                        path="/pot_imgs/archaeology/c1s5/A-16143_2006-905-145_scan01.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="San Francisco Red seed jar"
                                        captionLine1="Mogollon, Mimbres Province,"
                                        captionLine2="C. 550–1000 CE"
                                        captionLine3="Harris Village, Mimbres Valley, Grant Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Excavated by Emil W. Haury, 1934"
                                        potID="GP42518"
                                        path="/pot_imgs/archaeology/c1s5/GP-42518_2006-905-64_scan01.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Tularosa Fillet Rim bowl"
                                        captionLine1="Mogollon, Pine Lawn Province"
                                        captionLine2="C. 1100–1300 CE"
                                        captionLine3="Provenience unknown"
                                        captionLine4="Gift of Museum Friends, 1980"
                                        potID="80-65-1"
                                        path="/pot_imgs/archaeology/c1s5/80-65-1_2006-960-image001.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                        name="Reserve Plain Corrugated Jar"
                                        captionLine1="Mogollon, Pine Lawn Province"
                                        captionLine2="C. 1100–1300 CE"
                                        captionLine3="Centerfire Creek, Catron Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Coit Collection"
                                        potID="GP8437"
                                        path="/pot_imgs/archaeology/c1s5/GP-8437_2006-960-image018.png"
                                        has3DModel="false"
                                  />
                        </GridItem>
                      </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 2",
                      tabIcon: Filter2Icon,
                      tabContent: (
                        <div>
                        <IntroSection2 />
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tizon Brown Ware jar"
                                        captionLine1="Upland Patayan or historic Yavapai"
                                        captionLine2="Hassayampa Province"
                                        captionLine3="C. 1600?–1900? CE"
                                        captionLine4="Date Creek Mountains, Yavapai Co., AZ"
                                        captionLine5="ASM Archaeological Project, 1991"
                                        potID="91-39-1"
                                        path="/pot_imgs/archaeology/c2s1/91-39-1_2006-960-image052.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tizon Brown Ware jar, native repairs with lac"
                                        captionLine1="Upland Patayan or historic Hualapai"
                                        captionLine2="Harquahala Province"
                                        captionLine3="C. 1600?–1900? CE"
                                        captionLine4="Harquahala Mountains, Maricopa Co., AZ"
                                        captionLine5="Gift of a Museum Friend, 1942"
                                        potID="A-2700"
                                        path="/pot_imgs/archaeology/c2s1/A-2700_2006-960-image053.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tumco Buff jar, formerly sealed with lac"
                                        captionLine1="Lowland Patayan, Lower Colorado Province"
                                        captionLine2="C. 1000–1650 CE"
                                        captionLine3="Cibola Valley, Lower Colorado River, Yuma Co., AZ"
                                        captionLine4="BLM Repository Collection, 1970"
                                        potID="A-39022"
                                        path="/pot_imgs/archaeology/c2s2/A-39022_2006-905-86_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tumco Buff jar, formerly sealed with lac"
                                        captionLine1="Lowland Patayan, Lower Colorado Province"
                                        captionLine2="C. 1000–1650 CE"
                                        captionLine3="Trigo Mountains, Yuma Co., AZ"
                                        captionLine4="BLM Repository Collection, 1989"
                                        potID="89-42-1"
                                        path="/pot_imgs/archaeology/c2s2/89-42-1_2006-905-84_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Palomas Stucco wide-mouth jar"
                                        captionLine1="Lowland Patayan, Lower Colorado Province"
                                        captionLine2="C. 1650–1900 CE"
                                        captionLine3="Heart Tank/Heart Tank Trail, Sierra Pinta, Yuma Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1963"
                                        potID="A-23225"
                                        path="/pot_imgs/archaeology/c2s2/A-23225_2006-905-83_scan01.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Gila Plain jar\"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 650–1150 CE"
                                        captionLine3="Three Mile Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-710"
                                        path="/pot_imgs/archaeology/c2s2/1997-194-710_2006-960-image063.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Santa Cruz Red-on-buff jar, burden carrier motifs"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 850–1000 CE"
                                        captionLine3="Zeta Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-695"
                                        path="/pot_imgs/archaeology/c2s3/97-194-695_2006-960-image060.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Santa Cruz Red-on-buff jar, burden carrier motifs"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 850–1000 CE"
                                        captionLine3="Four Mile Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Norton Allen and Ethel Crane Allen, 1994"
                                        captionLine5="Allen Collection"
                                        potID="94-134-442"
                                        path="/pot_imgs/archaeology/c2s3/94-134-442_2006-960-image058.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Rincon Red-on-brown bowl"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 950–1150 CE"
                                        captionLine3="Red Cave, Whetstone Mountains, Pima Co., AZ"
                                        captionLine4="Coronado National Forest Repository Collection, 1973"
                                        potID="A-40223"
                                        path="/pot_imgs/archaeology/c2s4/A-40223_2006-905-153_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tanque Verde Red-on-brown bighorn sheep effigy jar"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 1150–1450 CE"
                                        captionLine3="Hodges Ruin, Tucson, Pima Co., AZ"
                                        captionLine4="Gift of Wetmore Hodges, 1944"
                                        captionLine5="Excavated by Isabel Kelly and Carl Miller, 1936"
                                        potID="A-9240"
                                        path="/pot_imgs/archaeology/c2s4/A-9240_2006-960-image071.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Rincon Polychrome jar"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 1000–1100 CE"
                                        captionLine3="St. Mary’s Hospital Site, Tucson, Pima Co., AZ"
                                        captionLine4="UA Archaeological Project, 1920"
                                        potID="20144"
                                        path="/pot_imgs/archaeology/c2s4/20144_2006-960-image068.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Casa Grande Red-on-buff jar"
                                        captionLine1="Hohokam, Salt-Gila Province"
                                        captionLine2="C. 1150–1450 CE"
                                        captionLine3="Germann’s Ranch, Queen Creek, Maricopa Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1921"
                                        potID="6113"
                                        path="/pot_imgs/archaeology/c2s4/6113_2006-960-image077.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Sacaton Red-on-buff jar"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 950–1150 CE"
                                        captionLine3="Gatlin Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Norton Allen and Ethel Crane Allen, 1994"
                                        captionLine5="Allen Collection"
                                        potID="94-134-148"
                                        path="/pot_imgs/archaeology/c2s4/94-134-148_2006-960-image057.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Casa Grande Red-on-buff pitcher"
                                        captionLine1="Hohokam, Salt-Gila Province"
                                        captionLine2="C. 1150–1450 CE"
                                        captionLine3="La Ciudad, Phoenix, Maricopa Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Showalter Collection"
                                        potID="GP9786"
                                        path="/pot_imgs/archaeology/c2s4/GP-9786_2006-960-image066.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Sacaton Red-on-buff plate, water bird with fish"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2=" C. 950–1150 CE"
                                        captionLine3="Escuela Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-149"
                                        path="/pot_imgs/archaeology/c2s5/97-194-149_2006-960-image059.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Gila Butte Red-on-buff bowl, pelican motifs"
                                        captionLine1="Hohokam, Salt-Gila Province"
                                        captionLine2=" C. 750–900 CE"
                                        captionLine3="La Ciudad, Phoenix, Maricopa Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Johnson Collection"
                                        potID="GP6478"
                                        path="/pot_imgs/archaeology/c2s5/GP-6748_2006-960-image073.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Gila Plain jar"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 650–1150 CE"
                                        captionLine3="Three Mile Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-562"
                                        path="/pot_imgs/archaeology/c2s5/97-194-562_2006-905-88_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Gila Plain: Tucson Variety boot pitcher"
                                        captionLine1="Hohokam, Tucson Province"
                                        captionLine2="C. 1300–1450 CE"
                                        captionLine3="University Indian Ruin, Tucson, Pima Co., AZ"
                                        captionLine4="UA Archaeological Project, 1931–1937"
                                        potID="23778"
                                        path="/pot_imgs/archaeology/c2s5/23778_14.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Sacaton Red bowl"
                                        captionLine1="Hohokam, Gila Bend Province"
                                        captionLine2="C. 950–1150 CE"
                                        captionLine3="Three Mile Site, Painted Rock Reservoir, Maricopa Co., AZ"
                                        captionLine4="Gift of Ethel Crane Allen, 1997"
                                        captionLine5="Allen Collection"
                                        potID="97-194-705"
                                        path="/pot_imgs/archaeology/c2s5/97-194-705_2006-960-image020.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 3",
                      tabIcon: Filter3Icon,
                      tabContent: (
                      <div>
                        <IntroSection3 />
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Moenkopi Corrugated jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 1075–1300 CE"
                                        captionLine3="Northern Arizona"
                                        captionLine4="Gift of the Arizona Archaeological and Historical Society, 1917"
                                        captionLine5="Miller Collection"
                                        potID="4464-X-2"
                                        path="/pot_imgs/archaeology/c3s1/4454-x-2_2006-905-150_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Chapin Gray jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Mesa Verde Province"
                                        captionLine2="C. 575–900 CE"
                                        captionLine3="Durango vicinity, La Plata Co., CO"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Flora Collection"
                                        potID="GP48325"
                                        path="/pot_imgs/archaeology/c3s1/GP-48325_2006-905-137_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Sosi Black-on-white jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 1050–1180 CE"
                                        captionLine3="Turkey Cave, Tsegi Canyon, Navajo Co., AZ"
                                        captionLine4="Loaned by Grand Canyon National Park, 1976"
                                        captionLine5="Excavated by Harold S. Gladwin, 1929"
                                        potID="AT-76-19-1"
                                        path="/pot_imgs/archaeology/c3s2/AT-76-19-1_2006-960-image042.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Sosi Black-on-white jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 1050–1180 CE"
                                        captionLine3="Turkey Cave, Tsegi Canyon, Navajo Co., AZ"
                                        captionLine4="UA Archaeological Project, c. 1920"
                                        captionLine5="Excavated by Byron Cummings"
                                        potID="12924"
                                        path="/pot_imgs/archaeology/c3s2/12924_2006-905-136_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Chupadero Black-on-white pitcher"
                                        captionLine1="Ancestral Pueblo (Anasazi), Rio Grande Province"
                                        captionLine2="C. 1150–1675 CE"
                                        captionLine3="Provenience unknown"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Gladwin Collection"
                                        potID="GP53134"
                                        path="/pot_imgs/archaeology/c3s3/GP-53134_2006-960-image051.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Mesa Verde Black-on-white mug"
                                        captionLine1="Ancestral Pueblo (Anasazi), Mesa Verde Province"
                                        captionLine2="C. 1200–1300 CE"
                                        captionLine3="Mesa Verde, Montezuma Co., CO"
                                        captionLine4="Gift of a Museum Friend, 1946"
                                        captionLine5="Wetherill Collection"
                                        potID="A-4183"
                                        path="/pot_imgs/archaeology/c3s3/A-4138_2006-960-image038.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tuwiuca Black-on-orange bowl"
                                        captionLine1="Early Hopi, Winslow Province"
                                        captionLine2="C. 1250–1350 CE"
                                        captionLine3="Chavez Pass Ruin, Chavez Pass; Coconino Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Toelle Collection"
                                        potID="GP9129"
                                        path="/pot_imgs/archaeology/c3s3/GP-9192_2006-905-152_scan1-x.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Chaco Black-on-white pitcher"
                                        captionLine1="Ancestral Pueblo (Anasazi), Chaco Province"
                                        captionLine2="c. 1050–1125 CE"
                                        captionLine3="Gallup vicinity, McKinley Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Gladwin Collection"
                                        potID="GP5929"
                                        path="/pot_imgs/archaeology/c3s3/GP-5929_2006-960-image047.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Mesa Verde Black-on-white double mug"
                                        captionLine1="Ancestral Pueblo (Anasazi), Mesa Verde Province"
                                        captionLine2="c. 1200–1300 CE"
                                        captionLine3="Dove Creek vicinity, Dolores Co., CO"
                                        captionLine4="Gift of Ethel Crane Allen, 1998"
                                        captionLine5="Allen Collection"
                                        potID="98-98-1"
                                        path="/pot_imgs/archaeology/c3s3/98-98-1_2006-905-129_scan001.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Chapin Black-on-white bowl"
                                        captionLine1="Ancestral Pueblo (Anasazi), Mesa Verde Province"
                                        captionLine2="c. 575–900 CE"
                                        captionLine3="Animas Mountain, La Plata Co., CO"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Flora Collection"
                                        potID="GP46912"
                                        path="/pot_imgs/archaeology/c3s3/GP-46912_2006-960-image049.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Kiet Siel Polychrome canteen"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="c. 1250–1300 CE"
                                        captionLine3="Flagstaff vicinity, Coconino Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Babbitt Brothers Collection"
                                        potID="GP5500"
                                        path="/pot_imgs/archaeology/c3s3/GP-5500_2006-960-image044.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tusayan Black-on- red seed jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="c. 1050–1200 CE"
                                        captionLine3="Kayenta vicinity, Navajo Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1946"
                                        captionLine5="Wetherill Collection"
                                        potID="A-4161"
                                        path="/pot_imgs/archaeology/c3s3/A-4161_2006-960-image037.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="White Mound Black-on white bird effigy jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Chaco Province"
                                        captionLine2="C. 675–900 CE"
                                        captionLine3="White Mound Village, Rio Puerco, Apache Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Excavated by Emil W. Haury and E. B. Sayles, 1936"
                                        potID="GP50576"
                                        path="/pot_imgs/archaeology/c3s3/GP-50576_2006-960-image050.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Jeddito Black-on-yellow bowl (not visible)"
                                        captionLine1="Early Hopi, Tusayan Province"
                                        captionLine2="C. 1375–1630 CE"
                                        captionLine3="Awat’ovi, Antelope Mesa, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Gladwin Collection"
                                        potID="GP856"
                                        path="/pot_imgs/archaeology/c3s3/GP-856_2006-905-110_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Pinnawa Glaze-on-white jar"
                                        captionLine1="Early Zuni, White River Province"
                                        captionLine2="C. 1350–1500 CE"
                                        captionLine3="Clear Creek, White Mountains, Gila Co., AZ"
                                        captionLine4="Gift of a Museum Friend, 1933"
                                        potID="6894"
                                        path="/pot_imgs/archaeology/c3s4/6894_2006-960-image031.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Sikyatki Polychrome jar, late style"
                                        embed="https://sketchfab.com/models/a01b98d038f042bda2efe0197c618808/embed"
                                        captionLine1="Early Hopi, Tusayan Province"
                                        captionLine2="C. 1450–1630 CE"
                                        captionLine3="Keams Canyon, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="McAdams Collection"
                                        potID="GP4730"
                                        path="/pot_imgs/archaeology/c3s4/GP-4730_2006-960-image029.png"
                                        has3DModel="true"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Kwakina Polychrome bowl"
                                        captionLine1="Early Zuni, White River Province"
                                        captionLine2="C. 1275–1500 CE"
                                        captionLine3="Kinishba, Whiteriver, Gila Co., AZ"
                                        captionLine4="UA Archaeological Project, 1931–1939"
                                        potID="23823"
                                        path="/pot_imgs/archaeology/c3s4/23823_2006-960-image036.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Matsaki Polychrome jar"
                                        captionLine1="Early Zuni, Zuni Province"
                                        captionLine2="C. 1400–1680 CE"
                                        captionLine3="Mats’a:kya, Zuni River, McKinley Co., NM"
                                        captionLine4="Gift of Museum Friends, 1981"
                                        potID="81-55-1"
                                        path="/pot_imgs/archaeology/c3s4/81-55-1_2006-960-image026.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Jeddito Stippled bowl, hand motif"
                                        captionLine1="Early Hopi, Tusayan Province"
                                        captionLine2="C. 1375–1630 CE"
                                        captionLine3="Hopi Mesas, Navajo Co., AZ"
                                        captionLine4="Gift of the Arizona Archaeological and Historical Society, 1917"
                                        captionLine5="Miller Collection"
                                        potID="4096"
                                        path="/pot_imgs/archaeology/c3s4/4096_2006-905-115_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Awatovi Black-on-yellow ladle (not visible)"
                                        captionLine1="Early Hopi, Tusayan Province"
                                        captionLine2="C. 1300–1375 CE"
                                        captionLine3="Hopi Mesas, Navajo Co., AZ"
                                        captionLine4="Gift of the Arizona Archaeological and Historical Society, 1917"
                                        captionLine5="Miller Collection"
                                        potID="18293"
                                        path="/pot_imgs/archaeology/c3s4/18293_2006-960-image032.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Basketmaker Mudware bowl"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 575–700 CE"
                                        captionLine3="Broken Flute Cave, Prayer Rock District, Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14380"
                                        path="/pot_imgs/archaeology/c3s5/A-14380_2006-960-image039.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Obelisk Gray seed jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 450-800 CE"
                                        captionLine3="Cave II, Prayer Rock District, Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14304"
                                        path="/pot_imgs/archaeology/c3s5/A-14304_2006-905-109_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Potsuwi'i Incised canteen"
                                        captionLine1="Early Tewa, Chama Province"
                                        captionLine2="C. 1450–1500 CE"
                                        captionLine3="Poshu'ouinge, Rio Chama, Rio Arriba Co., NM"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Fred Harvey Co. Collection"
                                        potID="GP6108"
                                        path="/pot_imgs/archaeology/c3s5/GP-6108_2006-960-image048.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Tusayan Corrugated jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 950-1300 CE"
                                        captionLine3="Broken Flute Cave, Prayer Rock District, Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14404"
                                        path="/pot_imgs/archaeology/c3s5/A-14404_2006-960-image041.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                        <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Lino Gray seed jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 575-875 CE"
                                        captionLine3="Cave VIII, Prayer Rock District, Apache Co., AZ"
                                        captionLine4="Gift of Carnegie Institution, 1957"
                                        captionLine5="Excavated by Earl H. Morris, 1931"
                                        potID="A-14360"
                                        path="/pot_imgs/archaeology/c3s5/A-14360_2006-905-117_scan001.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Kana-a Gray pitcher"
                                        captionLine1="Ancestral Pueblo (Anasazi), Kayenta Province"
                                        captionLine2="C. 760-900 CE"
                                        captionLine3="Kayenta vicinity, Navajo Co., AZ"
                                        captionLine4="ASM Purchase, 1930"
                                        captionLine5="Warren Collection"
                                        potID="19197"
                                        path="/pot_imgs/archaeology/c3s5/19197_2006-960-image034.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                        name="Little Colorado Corrugated jar"
                                        captionLine1="Ancestral Pueblo (Anasazi), Little Colorado Province"
                                        captionLine2="C. 1080-1275 CE"
                                        captionLine3="Painted Desert, Navajo Co., AZ"
                                        captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                        captionLine5="Scorse Collection"
                                        potID="GP1079"
                                        path="/pot_imgs/archaeology/c3s5/GP-1079_2006-905-148_scan1-adj.png"
                                        has3DModel="false"
                                  />
                          </GridItem>
                        </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 4",
                      tabIcon: Filter4Icon,
                      tabContent: (
                      <div>
                        <IntroSection4 />
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi Polychrome jar"
                                          captionLine1="Palhikwmana (Moisture-drinking Maiden) Katsina design"
                                          captionLine2="C. 1920"
                                          captionLine3="Hopi Mesas, AZ"
                                          captionLine4="Collector Unknown"
                                          potID="12726"
                                          path="/pot_imgs/ethnology/c4s1/12726_2006-960-image139.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Laguna Polychrome jar"
                                          captionLine1="Possibly by Triz-Ray (Louise Beeker or Beecher)"
                                          captionLine2="C. 1900"
                                          captionLine3="Pueblo Laguna, NM"
                                          captionLine4="Gift of Mary T. Fitzmaurice"
                                          captionLine5="Collected by Henry G. Peabody"
                                          potID="75-5-2"
                                          path="/pot_imgs/ethnology/c4s1/1975-5-2_2006-960-image080.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Acoma Polychrome jar"
                                          captionLine1="C. 1890"
                                          captionLine2="Pueblo of Acoma, NM"
                                          captionLine3="Gift of B.D. Butler"
                                          potID="22933"
                                          path="/pot_imgs/ethnology/c4s2/22933_2006-960-image088.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Laguna Polychrome jar"
                                          embed="https://sketchfab.com/models/5ab8d1b3ec944c1e87725835f617ec7b/embed"
                                          captionLine1="Possibly by Tzu-chey (Minnie Sice)"
                                          captionLine2="C. 1900"
                                          captionLine3="Pueblo Laguna, NM"
                                          captionLine4="Gift of Mary T. Fitzmaurice"
                                          captionLine5="Collected by Henry G. Peabody"
                                          potID="75-5-1"
                                          path="/pot_imgs/ethnology/c4s2/75-5-1_2006-905-4_scan1-x.png"
                                          has3DModel="true"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Acoma Polychrome jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Pueblo of Acoma, NM"
                                          captionLine3="Collected by Nelle A. Dermont"
                                          potID="23682"
                                          path="/pot_imgs/ethnology/c4s2/2006-960-image089.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Acoma Wedding jar"
                                          captionLine1="Jessie C. Garcia"
                                          captionLine2="1970"
                                          captionLine3="Pueblo of Acoma, NM"
                                          captionLine4="Collected by Thomas Bahti"
                                          potID="E-9469"
                                          path="/pot_imgs/ethnology/c4s2/E-9469_2006-960-image092.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Acoma Fine-Line jar"
                                          captionLine1="Lucy Lewis"
                                          captionLine2="C. 1970"
                                          captionLine3="Pueblo of Acoma, NM"
                                          captionLine4="Gift of Margaret Beecher"
                                          potID="2000-14-2911"
                                          path="/pot_imgs/ethnology/c4s2/2000-14-291_2006-960-image293.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Zuni Polychrome jar"
                                          captionLine1="C. 1870"
                                          captionLine2="Pueblo of Zuni, NM"
                                          captionLine3="Probably collected by Byron Cummings"
                                          potID="12193"
                                          path="/pot_imgs/ethnology/c4s3/2006-905-44_12193_scan1-x.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Zuni Polychrome jar"
                                          captionLine1="Noreen Simplicio"
                                          captionLine2="2004"
                                          captionLine3="Pueblo of Zuni, NM"
                                          captionLine4="ASM Purchase, VP for Research"
                                          captionLine5="Richard Powell funds"
                                          potID="2004-351-1"
                                          path="/pot_imgs/ethnology/c4s3/2004-351-1_2006-905-46_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Zuni jar with appliqué frogs"
                                          captionLine1="C. 1930"
                                          captionLine2="Pueblo of Zuni, NM"
                                          captionLine3="Gift of Toni Elmore"
                                          captionLine4="Collected by Francis H. Elmore"
                                          potID="97-156-54"
                                          path="/pot_imgs/ethnology/c4s3/97-156-54_2006-960-image286.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Zuni Polychrome jar"
                                          captionLine1="C. 1890"
                                          captionLine2="Pueblo of Zuni, NM"
                                          captionLine3="Gift of Arizona Archaeological and Historical Society"
                                          captionLine4="Collected by Dr. Joshua A. Miller"
                                          potID="4167"
                                          path="/pot_imgs/ethnology/c4s3/4167_2006-960-image273.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Zuni Owl Figure"
                                          captionLine1="C. 1880"
                                          captionLine2="Pueblo of Zuni, NM"
                                          captionLine3="Gift of Emily, Elizabeth, and George Brown"
                                          captionLine4="Collected by Dr. Daniel Webster Prentiss Jr."
                                          captionLine5="Possibly from John Wesley Powell"
                                          potID="E-6423"
                                          path="/pot_imgs/ethnology/c4s3/e-6423_p1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi Polacca Polychrome Ladle Taawakatsina (Sun Katsina)"
                                          captionLine1="C. 1880"
                                          captionLine2="Hopi Mesas, AZ"
                                          captionLine3="Gift of Emily, Elizabeth, and George Brown"
                                          captionLine4="Collected by Dr. Daniel Webster Prentiss Jr."
                                          captionLine5="Possibly from John Wesley Powell"
                                          potID="E-6420"
                                          path="/pot_imgs/ethnology/c4s4/e-6420_p1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi-Tewa Polychrome jar"
                                          embed="https://sketchfab.com/models/54a941f9366a49a4a40c7131ad5c926c/embed"
                                          captionLine1="Nampeyo"
                                          captionLine2="C. 1920"
                                          captionLine3="Hopi Mesas, AZ"
                                          captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                          potID="GP52543"
                                          path="/pot_imgs/ethnology/c4s4/gp52543_image2.png"
                                          has3DModel="true"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi Polacca Polychrome jar"
                                          captionLine1="C. 1880"
                                          captionLine2="Hopi Mesas, AZ"
                                          captionLine3="ASM Purchase"
                                          captionLine4="Collected by Nelle A. Dermont"
                                          potID="8308"
                                          path="/pot_imgs/ethnology/c4s4/8308_2006-905-29_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi Polychrome vase"
                                          captionLine1="C. 1928"
                                          captionLine2="Hopi Mesas, AZ"
                                          captionLine3="Gift of Gila Pueblo Foundation, 1950"
                                          captionLine4="Collected by B.I. Staples"
                                          potID="GP5899"
                                          path="/pot_imgs/ethnology/c4s4/5899_2006-960-image153.png"
                                          has3DModel="true"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi Polychrome vase"
                                          captionLine1="C. 1920"
                                          captionLine2="Hopi Mesas, AZ"
                                          captionLine3="Gift of Faith M. Odom"
                                          captionLine4="Collected by Mr. and Mrs. Charles Minor"
                                          potID="88-90-19"
                                          path="/pot_imgs/ethnology/c4s4/88-90-19_image1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi Polychrome jar"
                                          captionLine1="C. 1870"
                                          captionLine2="Hopi Mesas, AZ"
                                          captionLine3="Gift of the Arizona Archaeological and Historical Society"
                                          captionLine4="Collected by Dr. Joshua A. Miller"
                                          potID="4009"
                                          path="/pot_imgs/ethnology/c4s4/4009_p4.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi-Tewa Polychrome jar"
                                          captionLine1="Nampeyo and Possibly Fannie or Rachael Nampeyo"
                                          captionLine2="C. 1930"
                                          captionLine3="Hopi Mesas, AZ"
                                          captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                          potID="GP52534-X-2"
                                          path="/pot_imgs/ethnology/c4s5/2006-905-30_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi-Tewa Polychrome jar"
                                          captionLine1="Nampeyo and Fannie Nampeyo"
                                          captionLine2="1923"
                                          captionLine3="Hopi Mesas, AZ"
                                          captionLine4="Gift of Mrs. Charles Morgan (Nan) Wood"
                                          captionLine5="Collected by Charles Morgan Wood"
                                          potID="E-2031"
                                          path="/pot_imgs/ethnology/c4s5/E-2031_2006-905-31_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi/Isleta Polychrome jar"
                                          captionLine1="Karen Abeita"
                                          captionLine2="2006"
                                          captionLine3="Hopi Mesas, AZ"
                                          captionLine4="Gift of Milton and Anita Katz"
                                          potID="2006-1052-23"
                                          path="/pot_imgs/ethnology/c4s5/2006-1052-23_image1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi-Tewa Polychrome seed jar"
                                          captionLine1="Hisi Nampeyo"
                                          captionLine2="2000"
                                          captionLine3="Hopi Mesas, AZ"
                                          captionLine4="Gift of Milton and Anita Katz"
                                          potID="2006-1052-19"
                                          path="/pot_imgs/ethnology/c4s5/2006-1052-19.png"
                                          has3DModel="true"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi Polacca Polychrome Canteen Kooninkatsina (Havasupai Katsina)"
                                          captionLine1="C. 1890"
                                          captionLine2="Hopi Mesas, AZ"
                                          captionLine3="Gift of The Arizona Archaeological and Historical Society"
                                          captionLine4="Collected by Dr. Joshua A. Miller"
                                          potID="18243"
                                          path="/pot_imgs/ethnology/c4s5/18243_2006-905-27_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Hopi-Tewa Polychrome jar"
                                          captionLine1="Leah Nampeyo"
                                          captionLine2="1970"
                                          captionLine3="Hopi Mesas, AZ"
                                          captionLine4="Gift of Margaret Beecher"
                                          potID="2004-14-32"
                                          path="/pot_imgs/ethnology/c4s5/2000-14-32_2006-960-image157.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                          </GridContainer>
                        </div>
                        ),
                      },
                      {
                        tabButton: "Column 5",
                        tabIcon: Filter5Icon,
                        tabContent: (
                        <div>
                          <IntroSection5 />
                          <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Zia Polychrome jar"
                                          captionLine1="Andrea Gachupin"
                                          captionLine2="C. 1930"
                                          captionLine3="Pueblo of Zia, NM"
                                          captionLine4="Gift of Fred Hawley"
                                          potID="E-2847"
                                          path="/pot_imgs/ethnology/c5s1/E-2847_2006-960-image260.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Zia Polychrome jar"
                                          captionLine1="Ruby Panana"
                                          captionLine2="2002"
                                          captionLine3="Pueblo of Zia, NM"
                                          captionLine4="ASM Purchase"
                                          potID="2002-78-1"
                                          path="/pot_imgs/ethnology/c5s1/2002-78-1_2006-960-image257.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Zia Dough Bowl"
                                          captionLine1="C. 1900"
                                          captionLine2="Pueblo of Zia, NM"
                                          captionLine3="Gift of Dr. and Mrs. George Gaylord Simpson"
                                          potID="80-64-1"
                                          path="/pot_imgs/ethnology/c5s1/80-64-1_2006-960-image255.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="San Ildefonso Polychrome jar"
                                          captionLine1="Attributed to Crescencio and Maria Martinez"
                                          captionLine2="C. 1915"
                                          captionLine3="Pueblo of San Ildefonso, NM"
                                          captionLine4="Purchased at Rasmussen's Curios, Tucson, 1930s"
                                          captionLine5="Gift of Mrs. Arthur Hamilton Otis"
                                          potID="E-5518"
                                          path="/pot_imgs/ethnology/c5s2/E-5518_2006-960-image241.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Zia Polychrome jar"
                                          captionLine1="C. 1910"
                                          captionLine2="Pueblo of Zia, NM"
                                          captionLine3="Exchange with Museum of New Mexico"
                                          potID="7377"
                                          path="/pot_imgs/ethnology/c5s2/7377_2006-960-image258.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Santo Domingo Polychrome jar"
                                          captionLine1="C. 1914"
                                          captionLine2="Kewa Pueblo, NM"
                                          captionLine3="Gift of William Donner"
                                          potID="E-3738"
                                          path="/pot_imgs/ethnology/c5s2/E-3738_2006-960-image119.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="San Ildefonso Polychrome jar"
                                          captionLine1="C. 1910"
                                          captionLine2="Pueblo of San Ildefonso, NM"
                                          captionLine3="ASM Purchase"
                                          captionLine4="Collected by Nelle A. Dermont"
                                          potID="8333"
                                          path="/pot_imgs/ethnology/c5s2/8333_2006-960-image239.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Santo Domingo Polychrome jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Kewa Pueblo, NM"
                                          captionLine3="Gift of Dr. Robert H. Forbes"
                                          potID="E-3649"
                                          path="/pot_imgs/ethnology/c5s2/E-3649_2006-960-image117.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="San Ildefonso Polychrome jar"
                                          captionLine1="Maria and Julian Martinez"
                                          captionLine2="C. 1920"
                                          captionLine3="Pueblo of San Ildefonso, NM"
                                          captionLine4="Gift of Gila Pueblo Foundation, 1950"
                                          potID="GP52582"
                                          path="/pot_imgs/ethnology/c5s3/GP-52582_2006-960-image251.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="San Ildefonso Terraced Serving Bowl"
                                          captionLine1="Maria and Julian Martinez"
                                          captionLine2="C. 1929"
                                          captionLine3="Pueblo of San Ildefonso, NM"
                                          captionLine4="Gift of Ansel and Virginia Adams"
                                          potID="77-63-7"
                                          path="/pot_imgs/ethnology/c5s3/77-63-7_2006-905-14_scan1-x.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Cochiti Storyteller Figure"
                                          captionLine1="Delfino Trancosa"
                                          captionLine2="1978"
                                          captionLine3="Pueblo of Cochiti, NM"
                                          captionLine4="Gift of Dr. Barbara Babcock"
                                          potID="86-69-1"
                                          path="/pot_imgs/ethnology/c5s3/86-69-1_2006-960-image110.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="San Ildefonso Black-On-Black Terraced Jar"
                                          captionLine1="Carmelita Dunlap"
                                          captionLine2="C. 1970"
                                          captionLine3="Pueblo of San Ildefonso, NM"
                                          captionLine4="Gift of Thomas Bahti"
                                          potID="E-9392"
                                          path="/pot_imgs/ethnology/c5s3/E-9392_2006-960-image245.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Santa Clara Wedding jar"
                                          captionLine1="C. 1910"
                                          captionLine2="Pueblo of Santa Clara, NM"
                                          captionLine3="ASM Purchase"
                                          captionLine4="Collected by Nelle A. Dermont"
                                          potID="8271"
                                          path="/pot_imgs/ethnology/c5s3/8271_2006-960-image236.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Santa Clara jar with Painted Matachin Dance"
                                          captionLine1="Lois Gutierrez de la Cruz"
                                          captionLine2="2002"
                                          captionLine3="Pueblo of Santa Clara, NM"
                                          captionLine4="Gift of Milton and Anita Katz"
                                          potID="2006-1052-10"
                                          path="/pot_imgs/ethnology/c5s3/2006-1052-1_2006-960-image235.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Santa Clara Seed Jar with Medallion"
                                          captionLine1="Grace Medicine Flower and Camilio Tafoya"
                                          captionLine2="C. 1970"
                                          captionLine3="Pueblo of Santa Clara, NM"
                                          captionLine4="Gift of Thomas Bahti"
                                          potID="E-9393"
                                          path="/pot_imgs/ethnology/c5s3/E-9393_2006-960-image246.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Zia Polychrome jar"
                                          captionLine1="C. 1928"
                                          captionLine2="Pueblo of Zia, NM"
                                          captionLine3="Purchased from Wichmiller"
                                          captionLine4="Gallup Ceremonial First Prize Winner"
                                          captionLine5="Gift of Gila Pueblo Foundation, 1950"
                                          potID="GP5902"
                                          path="/pot_imgs/ethnology/c5s4/GP-5902_2006-960-image264.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="San Ildefonso Polychrome jar"
                                          captionLine1="Maria and Julian Martinez"
                                          captionLine2="1920"
                                          captionLine3="Pueblo of San Ildefonso, NM"
                                          captionLine4="Collected by Byron Cummings"
                                          potID="12207"
                                          path="/pot_imgs/ethnology/c5s4/12207_2006-960-image240.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Jemez Bat Bowl"
                                          captionLine1="Verda Toledo"
                                          captionLine2="2006"
                                          captionLine3="Pueblo of Jemez, NM"
                                          captionLine4="Gift of a Museum Friend"
                                          potID="2006-166-1"
                                          path="/pot_imgs/ethnology/c5s4/2006-166-1_2006-960-image231.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Santa Clara jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Pueblo of Santa Clara, NM"
                                          captionLine3="ASM Purchase"
                                          captionLine4="Collected by Nelle A. Dermont"
                                          potID="8279"
                                          path="/pot_imgs/ethnology/c5s4/2006-960-image238.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Cochiti Ram Effigy Pitcher"
                                          captionLine1="Teresita Romero"
                                          captionLine2="1962"
                                          captionLine3="Pueblo of Cochiti, NM"
                                          captionLine4="ASM Purchase by Wilma Kaemlein"
                                          potID="E-5340"
                                          path="/pot_imgs/ethnology/c5s4/E-5340_2006-960-image125.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                      </div>
                      ),
                    },
                    {
                      tabButton: "Column 6",
                      tabIcon: Filter6Icon,
                      tabContent: (
                      <div>
                        <IntroSection6 />
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="O'odham (?) Black-on-cream jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Southern Arizona"
                                          captionLine3="Gift of the Estate of Walter Scott Lieber"
                                          potID="E-8736"
                                          path="/pot_imgs/ethnology/c6s1/E-8736_2006-960-image220.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Pee Posh human effigy jar"
                                          embded="https://sketchfab.com/models/be9ec6f5613e48ad86d67049011c1cb3/embed"
                                          captionLine1="C. 1900"
                                          captionLine2="Laveen, AZ"
                                          captionLine3="Gift of B.D Butler"
                                          captionLine4="Collected by Caroline Smurthwaite and Ann Eliza Connell"
                                          potID="22766"
                                          path="/pot_imgs/ethnology/c6s1/22766_2006-960-image163.png"
                                          has3DModel="true"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Mojave Red-on-brown jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Lower Colorado River"
                                          potID="19179"
                                          path="/pot_imgs/ethnology/c6s1/19179_2006-960-image332.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Warihío appliqué jar"
                                          captionLine1="C. 1980"
                                          captionLine2="Loreto, Chihuahua"
                                          captionLine3="Gift of the UA Foundation President's Club"
                                          captionLine4="Collected by Roberto Ruiz and Edmond Faubert"
                                          potID="80-13-8"
                                          path="/pot_imgs/ethnology/c6s2/80-13-8_2006-960-image196.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Mayo painted jar"
                                          captionLine1="C. 1998"
                                          captionLine2="Capomos, Sinaloa"
                                          captionLine3="Collected by Jan Bell"
                                          potID="98-125-10"
                                          path="/pot_imgs/ethnology/c6s2/98-125-10_2006-960-image197.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Tarahumara (Rarámuri) painted jar"
                                          captionLine1="Juana Peinado"
                                          captionLine2="C. 1972"
                                          captionLine3="Guachochi, Chihuahua"
                                          captionLine4="Gift of the UA President's Club"
                                          captionLine5="Collected by Edmond Faubert"
                                          potID="78-53-88"
                                          path="/pot_imgs/ethnology/c6s2/78-53-88_2006-960-image192.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Tarahumara (Rarámuri) painted jar"
                                          captionLine1="Rosa Nava"
                                          captionLine2="C. 1977"
                                          captionLine3="Panalachic, Chihuahua"
                                          captionLine4="Gift of the UA President's Club"
                                          captionLine5="Collected by Edmond Faubert"
                                          potID="77-33-14"
                                          path="/pot_imgs/ethnology/c6s2/77-33-14_2006-960-image187.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Tarahumara (Rarámuri) pitcher and lid"
                                          captionLine1="C. 1979"
                                          captionLine2="Guachochi, Chihuahua"
                                          captionLine3="Gift of the UA President's Club"
                                          captionLine4="Collected by Edmond Faubert"
                                          potID="78-53-89"
                                          path="/pot_imgs/ethnology/c6s2/78-53-80_2006-960-image194.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Tohono O'odham human effigy figure"
                                          captionLine1="C. 1900"
                                          captionLine2="Southern Arizona"
                                          potID="18323"
                                          path="/pot_imgs/ethnology/c6s3/18323_2006-960-image213.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Tohono O'odham Red-on-brown jar"
                                          captionLine1="C. 1890"
                                          captionLine2="Santa Rosa, AZ"
                                          captionLine3="Gift of Muriel W. Hanna"
                                          potID="8636"
                                          path="/pot_imgs/ethnology/c6s3/8636_2006-905-33_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Tohono O'odham singing figure"
                                          captionLine1="Rupert Angea"
                                          captionLine2="C. 2006"
                                          captionLine3="Hickiwan, AZ"
                                          captionLine4="Loaned by Reuben Naranjo"
                                          potID="2008-511-1"
                                          path="/pot_imgs/ethnology/c6s3/2008-511-1_2006-960-image200.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Tohono O'odham friendship jar"
                                          captionLine1="Rupert Angea"
                                          captionLine2="C. 1970"
                                          captionLine3="Hickiwan, AZ"
                                          captionLine4="ASM Purchase, John Tanner Fund"
                                          captionLine5="From Michael Higgins"
                                          potID="2006-918-1"
                                          path="/pot_imgs/ethnology/c6s3/2006-918-1_2006-905-35_scan1-adj.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Pee Posh Black-on-white jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Laveen, AZ"
                                          captionLine3="Gift of B.D. Butler"
                                          captionLine4="Collected by Caroline Smurthwaite and Ann Eliza Connell"
                                          potID="22869"
                                          path="/pot_imgs/ethnology/c6s3/22869_2006-960-image224.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Pee Posh Black-on-red pitcher"
                                          captionLine1="C. 1885"
                                          captionLine2="Laveen, AZ"
                                          captionLine3="Gift of B.D. Butler"
                                          captionLine4="Collected by Caroline Smurthwaite and Ann Eliza Connell"
                                          potID="22822"
                                          path="/pot_imgs/ethnology/c6s3/22822_2006-960-image167.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Tohono O'odham (?) human effigy jar"
                                          captionLine1="C. 1920"
                                          captionLine2="Southern Arizona"
                                          captionLine3="Collected by Douglas Gray"
                                          potID="14465"
                                          path="/pot_imgs/ethnology/c6s3/14465_2006-960-image206.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Pee Posh human effigy figure"
                                          captionLine1="C. 1900"
                                          captionLine2="Laveen, AZ"
                                          captionLine3="Gift of B.D. Butler"
                                          captionLine4="Collected by Caroline Smurthwaite and Ann Eliza Connell"
                                          potID="22870"
                                          path="/pot_imgs/ethnology/c6s3/22870_2006-960-image172.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Pee Posh double-spouted jar"
                                          captionLine1="C 1900"
                                          captionLine2="Central Arizona"
                                          captionLine3="Gift of Adela C. Van Horn"
                                          potID="E-492"
                                          path="/pot_imgs/ethnology/c6s3/E-492_2006-960-image176.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Pee Posh wedding jar"
                                          captionLine1="Mabel Sunn"
                                          captionLine2="C. 1971"
                                          captionLine3="ASM Purchase"
                                          captionLine4="Arzona Archaeological and Historical Discretionary Fund"
                                          potID="E-9764"
                                          path="/pot_imgs/ethnology/c6s3/E-9764_2006-960-image183.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Mojave doll figures"
                                          captionLine1="Attributed to Annie Fields"
                                          captionLine2="Left: C. 1960, Right: C. 1961"
                                          captionLine3="Needles, CA"
                                          captionLine4="Left: Collected by Sally Harris Pierce"
                                          captionLine5="Right: ASM Purchase, Arizona Archaeological and Historical Society Discretionary Fund"
                                          potID="Left: 81-15-2, Right: E-4790"
                                          path="/pot_imgs/ethnology/c6s4/81-15-2_E-4790_2006-960-image325.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Mojave effigy jar"
                                          captionLine1="C. 1917"
                                          captionLine2="Lower Colorado River"
                                          captionLine3="Gift of the Arizona Archaeological and Historical Society"
                                          captionLine4="Collected by Dr. Joshua A. Miller"
                                          potID="4173"
                                          path="/pot_imgs/ethnology/c6s4/4173_2006-960-image327.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Mojave bowl with handle and figures"
                                          captionLine1="Annie Fields"
                                          captionLine2="C. 1959"
                                          captionLine3="Needles, CA"
                                          captionLine4="Gift of Paul Long"
                                          potID="E-3754"
                                          path="/pot_imgs/ethnology/c6s4/e-3754_p1.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                          name="Mojave female effigy jar"
                                          captionLine1="Annie Fields"
                                          captionLine2="C. 1962"
                                          captionLine3="Parker, AZ"
                                          captionLine4="Collected by Sally Pierce Harris"
                                          potID="81-15-1"
                                          path="/pot_imgs/ethnology/c6s4/81-15-1_2006-960-image323.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Quechan Red-on-buff pitcher"
                                          captionLine1="C. 1900"
                                          captionLine2="Lower Colorado River"
                                          captionLine3="Collected by Herbert Brown"
                                          potID="218"
                                          path="/pot_imgs/ethnology/c6s4/218_2006-905-06_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Mojave female effigy jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Lower Colorado River"
                                          captionLine3="Collected by Gary White"
                                          potID="87-54-1"
                                          path="/pot_imgs/ethnology/c6s4/87-54-1_2006-905-08_scan001.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Mojave Red-on-buff jar"
                                          captionLine1="Elmer Gates"
                                          captionLine2="1971"
                                          captionLine3="Parker, AZ"
                                          captionLine4="Collected by Mrs. Dorothy Hall"
                                          potID="E-9916"
                                          path="/pot_imgs/ethnology/c6s4/e-9916_p1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Quechan Red-on-buff jar"
                                          captionLine1="C. 1900"
                                          captionLine2="Fort Yuma, AZ"
                                          captionLine3="Collected by Herbert Brown"
                                          potID="210"
                                          path="/pot_imgs/ethnology/c6s4/210_2006-905-9_scan1.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                          name="Quechan doll figures"
                                          captionLine1="C. 1900"
                                          captionLine2="Left: Lower Colorado River"
                                          captionLine3="Right: Fort Yuma Reseveration"
                                          captionLine4="Left: Gift of Ellyn Teskey"
                                          captionLine5="Right: Collected by Herbert Brown"
                                          potID="Left: 80-57-2, Right: 23055-X-9"
                                          path="/pot_imgs/ethnology/c6s4/80-57-2_23055-x-9_2006-960-image335-Edit.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Navajo jar with sculpted rim"
                                          captionLine1="Sue Ann Williams"
                                          captionLine2="C. 2005"
                                          captionLine3="Shonto, AZ"
                                          captionLine4="Gift of Bobette Levy"
                                          potID="2005-999-1"
                                          path="/pot_imgs/ethnology/c6s5/2005-999-1_p2.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Navajo squash jar"
                                          captionLine1="Samuel Manymules"
                                          captionLine2="C. 2006"
                                          captionLine3="Shonto, AZ"
                                          potID="2006-1052-6"
                                          path=""
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Navajo drum pot"
                                          captionLine1="Rose Williams"
                                          captionLine2="C. 2005"
                                          captionLine3="Shonto, AZ"
                                          captionLine4="Collected from the artist"
                                          potID="2005-338-1"
                                          path="/pot_imgs/ethnology/c6s5/2005-338-1_p1.png"
                                          has3DModel="false"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                          name="Navajo cooking-style jar"
                                          captionLine1="Alice Cling"
                                          captionLine2="C. 1990"
                                          captionLine3="Shonto, AZ"
                                          captionLine4="Collected by Jan Bell"
                                          potID="90-74-1"
                                          path="/pot_imgs/ethnology/c6s5/90-74-1_2006-960-image302.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Picuris Pueblo micaceous 'rain god'"
                                          captionLine1="Pueblo of Picuris, NM"
                                          captionLine2="Arizona Arizona Archaeological and Historical Society"
                                          captionLine3="Discrentionary Fund Purchase"
                                          captionLine4="by Wilma Kaemlein, 1958"
                                          potID="E-3674"
                                          path="/pot_imgs/ethnology/c6s5/e-3674_image1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify='center'>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Nambe Pueblo micaceous jar and lid"
                                          captionLine1="Lonnie Vigil"
                                          captionLine2="C. 1988"
                                          captionLine3="Pueblo of Nambe, NM"
                                          captionLine4="Collected by Jan Bell"
                                          potID="89-81-1"
                                          path="/pot_imgs/ethnology/c6s5/89-81-1a-b_image1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                            <Pot 
                                          name="Picuris micaceous jar"
                                          captionLine1="Anthony Durand"
                                          captionLine2="Pueblo of Picuris, NM"
                                          captionLine3="Gift of Richard and Lynne Spivey"
                                          potID="2006-1064-1"
                                          path="/pot_imgs/ethnology/c6s5/2006-1064-1_p1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                              <Pot 
                                          name="Jicarilla Apache micaceous jar and lid"
                                          embed="https://sketchfab.com/models/fcbeaa75a9e745b283a8175fadfb2131/embed"
                                          captionLine1="Sheldon Nunez-Velarde"
                                          captionLine2="C. 2004"
                                          captionLine3="Dulce, NM"
                                          captionLine4="ASM Purchase"
                                          captionLine5="VP for Research Richard Powell funds"
                                          potID="2004-348-1"
                                          path="/pot_imgs/ethnology/c6s5/2004-348-1_2006-960-image105.png"
                                          has3DModel="true"
                                    />
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                          name="Santa Clara Pueblo jar and lid"
                                          captionLine1="Edna Romero"
                                          captionLine2="C. 2002"
                                          captionLine3="Pueblo of Taos, NM"
                                          captionLine4="ASM Purchase from the artist"
                                          potID="2002-79-1"
                                          path="/pot_imgs/ethnology/c6s5/2002-79-1a-b_image1.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                            <GridItem xs={6} sm={3} md={3} lg={4}>
                          <Pot 
                                          name="Navajo terraced jar"
                                          captionLine1="Michelle Willams"
                                          captionLine2="C. 2005"
                                          captionLine3="Shonto, AZ"
                                          captionLine4="Gift of Bobette Levy"
                                          potID="2005-999-2"
                                          path="/pot_imgs/ethnology/c6s5/2005-999-2_2006-960-image311.png"
                                          has3DModel="false"
                                    />
                            </GridItem>
                        </GridContainer>
                      </div>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
      <Footer />
    </div>
    </div>
  );
}
