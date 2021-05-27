import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import BorderHorizontalIcon from '@material-ui/icons/BorderHorizontal';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MapIcon from '@material-ui/icons/Map';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Welcome!</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif'}}>
          The Pottery Project celebrates the Indigenous pottery-making traditions in the U.S. Southwest 
          and northwest Mexico by showcasing 500 choice specimens from the larger, renowned collection of 
          24,000 whole vessels. The exhibit features interactive displays, interviews with archaeologists 
          and Native potters, videos, and hands-on experiences. 
          </h4>
          <h5 className={classes.description} style={{color:'red', fontFamily:'serif'}}>
          The Arizona State Museum and the University of Arizona are located on land that has been home to 
          Indigenous peoples for 13,000 years. Today, the Tucson area is home to the Tohono O’odham and the 
          Pascua Yaqui. Currently, there are 22 federally recognized tribes with reservation lands in the 
          state of Arizona. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Wall of Pots"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={BorderHorizontalIcon}
              iconColor="info"
              fontFamily='serif'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Timeline Map"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={MapIcon}
              iconColor="success"
              fontFamily='serif'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Making Pots"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={WhatshotIcon}
              iconColor="danger"
              fontFamily='serif'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Games"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={SportsEsportsIcon}
              iconColor="danger"
              fontFamily='serif'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
