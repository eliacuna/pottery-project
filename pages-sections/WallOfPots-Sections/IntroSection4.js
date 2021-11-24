import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
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
          <h2 className={classes.title} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>Pre-Hispanic Pottery from the Colorado Plateau and the Northern Rio Grande</h2>
          <Button color="primary">Listen to ASM Speaker</Button>
	  <h4 className={classes.description} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>
          Pottery making on the Colorado Plateau, as in the central mountains, began by the first or second century CE. A 
          variety of clays suitable for making pottery are available there. Iron-bearing clays were used by potters who fired 
          their pots in reducing (oxygen-poor) atmospheres. These pots are typically gray. Vessels were sometimes constructed of 
          white-firing clay, which lacks iron. Sometimes, a thin layer of white-firing clay (a slip) was applied to darker clay 
          used to build pots, creating a background that would contrast with and improve the visibility of black painted 
          decoration. Black-on-gray pottery appeared by 600 CE, red-on-orange by 700 CE, and black-on-white by 825 CE. 
          Black-on-red, black-on-orange, and polychrome pottery (featuring three or more colors) was also made on the Plateau. 
          By 1300 CE, potters on the Hopi Mesas began producing yellow pottery, which they fired using coal. The Pueblo Indians 
          of northern Arizona and New Mexico are descendants of the Ancestral Pueblo (Anasazi) archaeological culture of the 
          Colorado Plateau, as well as other ancient groups. <br /> <br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
