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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Coil and Scrape</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif', textAlign:'left'}}>
            A potter layers narrow coils of clay, one on top of another, and seals them together using
            pressure between the thumbs and fingers. The coils are obscured, and the walls strengthened,
            by smoothing the inner and outer surfaces with a gourd scraper. This method is associated with
            the Ancestral Pueblo and Mogollon archaeological cultures and is used today by Pueblo, Diné
            (Navajo), Mayo, and Rarámuri (Tarahumara) potters. In a variation on this method, Ancestral
            Pueblo and Mogollon potters sometimes smoothed only the interiors of vessels and left the
            coils and pinches visible on the exterior, resulting in what archaeologists call “corrugated”
            pottery.<br /><br />
          </h4>
        </GridItem>
        <GridItem>
        <img src="img/c-27562_scan01.jpg" style={{height:'60%', width:'60%'}} />
        <h4 className={classes.description} style={{color:'black', fontFamily:'serif', fontSize:'12pt'}}>
          Roberta Youvella Silas (Hopi) uses a tongue depressor to smooth and thin the coiled vessel wall.<br />
          Polacca, First Mesa, Hopi Indian Reservation, AZ. Photographer, Helga Teiwes, 1989. ASM C-
          27562<br />
        </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
