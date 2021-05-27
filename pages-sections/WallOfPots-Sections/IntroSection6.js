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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Pre-Hispanic Pottery from Northern Mexico and the Arizona Mountains</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif'}}>
          Pottery making in the mountains of east-central Arizona and west-central New Mexico, and northwest Chihuahua began by 
          the first or second century CE. Clays in these regions are typically rich in iron, and potters there favored firing 
          their pots in oxidizing (oxygen-rich) atmospheres. Vessels were constructed from clays that, when fired, range in 
          color from tan to brown and red-brown, sometimes decorated with a thin layer of red clay (a slip) or red paint. About 
          1000 CE, black-on-white and black-on-red pottery was introduced, although much of this material was made on the 
          Colorado Plateau, to the north. Around 1100 CE, polychrome pottery (featuring three or more colors) was added to the 
          potters’ repertoire. Archaeological cultures in this region include Mogollon and Casas Grandes. It was previously 
          thought that a “Salado” archaeological culture developed in central Arizona and then spread throughout southern 
          Arizona, southern New Mexico, and northern Mexico. Archaeologists now believe that “Salado polychrome pottery” 
          (Roosevelt Red Ware) was developed and spread by Ancestral Pueblo (Anasazi) immigrants. <br /> <br />

          CE stands for Common Era, a chronological convention equivalent to AD.<br /> <br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
