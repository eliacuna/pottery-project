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
import ModelViewer   from "pages-sections/WallOfPots-Sections/ModelViewer.js";
import Modal         from "pages-sections/WallOfPots-Sections/Modal.js";
import { PowerTwoTone } from "@material-ui/icons";

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
        <GridItem xs={12} sm={12} md={6} lg={4}>
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
              <iframe 
                  style={{display:'block'}} title={props.potID} frameborder='0' 
                  allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' 
                  allow='fullscreen; autoplay; vr' 
                  xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                  src={props.embed}>
                  </iframe>
            </div>
            <br />
            <div>
              {props.captionLine1}{"\n"}
              {props.captionLine2}{"\n"}
              {props.captionLine3}{"\n"}
              {props.captionLine4}{"\n"}
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
          <GridItem xs={12} sm={12} md={6} lg={4}>
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
                {props.captionLine1}{"\n"}
                {props.captionLine2}{"\n"}
                {props.captionLine3}{"\n"}
                {props.captionLine4}{"\n"}
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
            <GridItem xs={12} sm={12} md={6}>
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
                          <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="McDonald Pattern Corrugated Bowl" 
                                    embed="https://sketchfab.com/models/5866a04d3c04489d9e753c853ee6ffc8/embed"
                                    captionLine1="Mogollon, Point of Pines Province, c. 1150-1280 CE"
                                    captionLine2="Point of Pines Pueblo Graham Co., AZ"
                                    captionLine3="UA Archaelogical Field School, 1952"
                                    potID="A-11451"
                                    path="img/pot-images/Col1/Shelf1/A-11451.png"
                                    has3DModel="true"
                              />
                              
                          </GridItem>
                          <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Fourmile Polychrome Jar"
                                    captionLine1="Mogollon, Upper Little Colorado Province, c. 1330-1400 CE"
                                    captionLine2="Kinishba, Whiteriver, Gila Co., AZ"
                                    captionLine3="UA Archaelogical Project, 1931-1939"
                                    potID="A-3366"
                                    path="img/pot-images/Col1/Shelf1/A-3366.png"
                                    has3DModel="false"
                              />
                           
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                              <Pot 
                                    name="Tularosa Black-On-White Bird Effigy Canteen"
                                    captionLine1="Mogollon, Upper Little Colorado Province, c. 1200-1300 CE"
                                    captionLine2="Tonto-Roosevelt Basin, Gila Co., AZ"
                                    captionLine3="Gift of Gila Pueblo Foundation, 1950"
                                    captionLine4="Gladwin Collection"
                                    potID="GP52910"
                                    path="img/pot-images/Col1/Shelf1/GP-52910.png"
                                    has3DModel="false"
                              />
                          
                        </GridItem>
                        <GridItem xs={6} sm={3} md={3}>
                           
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
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
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
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                         
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                           
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
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                           
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>

                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
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
                        <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                           
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
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            
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
