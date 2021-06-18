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
          <h2 className={classes.title} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>Southwest Native Pottery</h2>
          <h4 className={classes.description} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>
          Southwest Native pottery is renowned for its beauty and for its ability to tell the stories of Indigenous peoples. 
          Pottery vessels became common in the region by 150 CE and though the craft has changed in many ways, it has always 
          been a tradition handed down through the generations. This timeline, composed of examples from the Arizona State 
          Museum’s collection, illustrates continuity and change in the region’s ceramics.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
