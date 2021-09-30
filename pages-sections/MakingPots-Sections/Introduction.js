import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div 
        id="column-1" 
        className={classes.section}
    >
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>From Earth to Fire: Making Pottery</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif', textAlign:'left'}}>
            Most Southwest Native pottery has been made using one of two hand-building methods:
            “paddle-and-anvil" and “coil-and-scrape”. These traditional techniques are used to build up the
            sides of a vessel and to create the final shape. Although some contemporary Native potters use
            a potter’s wheel, most pottery is still made by hand.<br /> <br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
