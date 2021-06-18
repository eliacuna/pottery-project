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
          <h2 className={classes.title} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>Deep Roots</h2>
          <h4 className={classes.description} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>
          The Indigenous peoples of the Southwest developed regional pottery traditions by 500 CE using different 
          raw materials, forming techniques, shapes, and painted design styles. Archaeologists, who study pottery to 
          understand the past, refer to the ancient people of the Colorado Plateau as Ancestral Pueblo,and those of the 
          central Arizona mountains, southwestern New Mexico, and northwestern Mexico as “Mogollon.” The pre-Hispanic
          inhabitants of the Sonoran Desert are referred to as “Hohokam,” and those of the Colorado River Valley and adjacent 
          uplands are called “Patayan.”
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}

