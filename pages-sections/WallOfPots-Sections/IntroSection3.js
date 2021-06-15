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
        <GridItem xs={10} sm={10} md={16}>
          <h2 className={classes.title} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>Western Pueblo Ethnographic Pottery</h2>
          <h4 className={classes.description} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>
          Western Pueblo people—the Hopi, Zuni, Acoma, and Laguna—live on the high plateaus and mesas of northeastern Arizona 
          and northwestern New Mexico. Classic Hopi pottery has a distinct yellow cast from the type of clay used and the firing 
          conditions employed. Zuni pottery possesses a white base color and is known for its deer “heartline” and medallion 
          motifs. Acoma and Laguna vessels look very similar to each other, both being made of distinctive, white-firing clay. 
          Water jars, or “ollas,” decorated with multicolored bird and floral motifs or complex geometric designs, are traditional 
          products of Acoma and Laguna. <br /> <br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
