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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Paddle and Anvil</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif', textAlign:'left'}}>
            A potter adds thick ropes of clay to a hand-formed or molded base and then binds the added
            clay by hitting the exterior of the vessel with a wooden paddle while holding a flattened stone
            anvil or a fist against the interior of the vessel. Paddling also thins the walls and allows the
            potter to control the shape of the vessel. This technique is associated with the Hohokam and
            Patayan archaeological cultures and has been used by historic and contemporary Yuman-
            speaking and O’odham potters.<br/><br/>
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
        <img src="/img/2014-41-073_scan1.jpg" style={{height:'60%', width:'60%'}} />
        <h2 className={classes.description} style={{color:'black', fontFamily:'serif', fontSize:'12pt'}}>
          Listiana Francisco (Tohono O’odham) uses a paddle and anvil to smooth the first coil of the pot.<br />
          Bernard Fontana, photographer, 1959, ASM 2014-41-073
        </h2>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
