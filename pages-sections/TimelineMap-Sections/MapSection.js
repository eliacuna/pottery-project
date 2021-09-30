import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

// @material-ui/icons
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ImageMap from "image-map";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function MapSection() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  let displayMap = '';

  if (activeStep <= 2) {
    displayMap = 'img/PV_Modern_AZ_and_NM_Map01.jpg';
  } else {
    displayMap = 'img/map2.jpg';
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <GridContainer justify="center">
        <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                
                <CardMedia
                style={{height: '800px', width: '1000px'}}
                image={displayMap}
                title="Modern Map of Arizona and New Mexico"
                />
            
            </CardActionArea>
            <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1, position:'relative', margin:'auto', justify:'center' }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                Next
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
                Back
                </Button>
            }
        />
        </Card>
        
    </GridContainer>
  );
}
