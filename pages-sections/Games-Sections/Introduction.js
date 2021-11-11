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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Educational Pottery Games</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif', textAlign:'left'}}>
            Match the Pot and Can You Make a Pot? are fun an educational pottery games that teach about different pottery games
            artifacts and the process of creating a pot in interactive online experiences.<br /> <br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
