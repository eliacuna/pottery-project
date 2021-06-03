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

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const handleClick = () => {
const [classicModal, setClassicModal] = React.useState(false);
  DisplayInfo()
}

const DisplayInfo = (props) => {
  setClassicModal(true);
  const classes = useStyles();
  return (
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
            {props.caption}
                <br /><br />
                <ModelViewer />
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
  )
}

export default function PotsPage(props) {
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
    <DisplayInfo />
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
<<<<<<< HEAD
                          <GridItem xs={6} sm={3} md={3}>
                            <img onClick={handleClick}
=======
                        <GridItem xs={12} sm={5} md={2}>
                            <img onClick={() => setClassicModal(true)}
>>>>>>> e08cf3ebdbbb649ba5c50b8ff79e0d038f0d03da
                              alt="..."
                              src="img/pot-images/Col1/Shelf1/A-11451.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf1/A-3366.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf1/GP-52910.png"
                              className={navImageClasses}
                            />

                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                        <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/20674.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/20676.jpg"
                              className={navImageClasses}
                            />
                           <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/A-7463.jpg"
                              className={navImageClasses}
                            />
                           <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/GP-3624.jpg"
                              className={navImageClasses}
                            />
                           <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/GP-3643.jpg"
                              className={navImageClasses}
                            />
                            
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/GP-3710.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/GP-3724.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf2/GP-38474.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf3/20658.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf3/GP-3621.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf3/GP-3631j.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf3/GP-3638.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf3/GP-3640.jpg"
                              className={navImageClasses}
                            />
                           <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf3/GP-10195.jpg"
                              className={navImageClasses}
                            />
                            
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>

                        <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/6655.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-1113.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-2538.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-1854.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-4915.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-4955.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-5973.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-38509.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-38642.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf4/GP-50570.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/80-65-1.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/214462-x-2.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/A-7749.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/A-11744.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/A-16143.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/GP-3054.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/GP-8437.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col1/Shelf5/GP-42518.jpg"
                              className={navImageClasses}
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
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf1/91-39-1.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf1/A-2700.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf2/89-42-1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf2/97-194-710.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf2/A-23225.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf2/A-39022.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf3/94-134-442.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf3/97-194-695.png"
                              className={navImageClasses}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf4/94-134-148.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf4/6113.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf4/20144.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf4/A-9240.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf4/A-40223.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf4/GP-9786.png"
                              className={navImageClasses}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf5/97-194-149.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf5/97-194-562.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf5/97-194-705.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf5/23778.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col2/Shelf5/GP-6478.jpg"
                              className={navImageClasses}
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
                          <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf1/4464-x-2.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf1/GP-48325.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                        <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf2/12924.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf2/AT-76-19-1.png"
                              className={navImageClasses}
                            />
                        
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/GP-46912.png"
                              className={navImageClasses}
                            />
                         <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/98-98-1.jpg"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/A-4161.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/A-4183.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/GP-856.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/GP-5500.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/GP-5929.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/GP-9129.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/GP-50576.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf3/GP-53134.jpg"
                              className={navImageClasses}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                        <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf4/81-55-1.jpg"
                              className={navImageClasses}
                            />
                        <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf4/4096.jpg"
                              className={navImageClasses}
                            />
                       <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf4/6894.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf4/18293.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf4/23823.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf4/GP-4730.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                        <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf5/19197.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf5/A-14304.jpg"
                              className={navImageClasses}
                            />
                         <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf5/A-14360.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf5/A-14380.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf5/A-14404.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf5/GP-1079.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col3/Shelf5/GP-6108.png"
                              className={navImageClasses}
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
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf1/75-5-2.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf1/12726.png"
                              className={navImageClasses}
                            />
                          
                          </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf2/75-5-1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf2/2000-14-2911.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf2/22933.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf2/23682.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf2/E-9469.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf3/97-156-54.png"
                              className={navImageClasses}
                            />
                          <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf3/2004-351-1.jpg"
                              className={navImageClasses}
                            />
                         <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf3/4167.png"
                              className={navImageClasses}
                            />
                         <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf3/12193:E-6423.png"
                              className={navImageClasses}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                        <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf4/E-6420.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf4/88-90-19.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf4/4009.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf4/8308.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf4/GP-5899.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="img/pot-images/Col4/Shelf4/GP-52543.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                          <img
                                alt="..."
                                src="img/pot-images/Col4/Shelf5/2000-14-32.png"
                                className={navImageClasses}
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
                        <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={3}>
                           <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf1/80-64-1.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf1/2002-78-1.png"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf1/E-2847.png"
                                className={navImageClasses}
                              />
                      
                          </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf2/7377.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf2/8333.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf2/E-3649.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf2/E-3738.png"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf2/E-5518.png"
                                className={navImageClasses}
                              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf3/77-63-7.jpg"
                                className={navImageClasses}
                              />
                          <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf3/86-69-1.png"
                                className={navImageClasses}
                              />
                           <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf3/2006-1052-10.png"
                                className={navImageClasses}
                              />
                           <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf3/8271.jpg"
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf3/E-9392.png"
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf3/E-9393.png"
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf3/GP-52582.png"
                                className={navImageClasses}
                              />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf4/2006-166-1.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf4/8279.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf4/12207.png"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf4/E-5340.png"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="img/pot-images/Col5/Shelf4/GP-5902.png"
                                className={navImageClasses}
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
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf1/19179.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf1/22766.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf1/E-8736.png"
                                className={navImageClasses}
                              />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf2/77-33-14.png"
                                className={navImageClasses}
                              />
                           <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf2/78-53-88.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf2/78-53-89.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf2/80-13-8.png"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf2/98-125-10.png"
                                className={navImageClasses}
                              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/2006-918-1.jpg"
                                className={navImageClasses}
                              />
                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/2008-511-1.png"
                                className={navImageClasses}
                              />
                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/18323.png"
                                className={navImageClasses}
                              />
                         <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/8636.png"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/14465.png"
                                className={navImageClasses}
                              />

                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/22822.png"
                                className={navImageClasses}
                              />
                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/22869.png"
                                className={navImageClasses}
                              />
                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/22870.jpg"
                                className={navImageClasses}
                              />
                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/E-492.png"
                                className={navImageClasses}
                              />
                          <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf3/E-9764.png"
                                className={navImageClasses}
                              />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/80-57-2.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/81-15-2.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/81-15-15.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/87-54-1.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/210.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/218.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/4173.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/23055-X-9.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/E-3754.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf4/E-9916.jpg"
                                className={navImageClasses}
                              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/2005-338-1.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/89-81-1.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/90-74-1.png"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/2002-79-1.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/2004-348-1.png"
                                className={navImageClasses}
                              />
                           <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/2005-999-1.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/2005-999-2.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/2006-1064-1.jpg"
                                className={navImageClasses}
                              />
                            <img
                                alt="..."
                                src="img/pot-images/Col6/Shelf5/E-3674.jpg"
                                className={navImageClasses}
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
