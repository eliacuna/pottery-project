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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Enter the World of Southwestern Native Pottery</h2>
          <h4 className={classes.description} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>
          The Pottery Project celebrates the Indigenous pottery-making traditions in the U.S. Southwest 
          and northwest Mexico by showcasing choice specimens from Arizona State Museum's renowned collection of 
          24,000 whole vessels.
          </h4>
          <h5 className={classes.description} style={{textAlign:'left', color:'red', fontFamily:'serif'}}>
          We respectfully acknowledge the University of Arizona is on the land and territories of Indigenous peoples. Today, Arizona 
          is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui. Committed to diversity and 
          inclusion, the University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities 
          through education offerings, partnerships, and community service.
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
