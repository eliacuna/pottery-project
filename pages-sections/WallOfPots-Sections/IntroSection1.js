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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Ethnographic Pottery from Arizona, New Mexico, and Northern Mexico</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif'}}>
          The Akimel O’odham (Pima) and the Pee Posh (Maricopa) live along the Salt and Gila Rivers in southern 
          Arizona, and the Tohono O’odham (Papago) live in southwestern Arizona and Sonora, Mexico. O’odham pottery 
          has traditionally included plain brown and plain red vessels, as well as brown vessels with matte red paint, 
          or green glaze paint and matte red paint. Other decorative combinations included white-on-red, black-on-white (cream), 
          black-on-red, and black-on-red-and-white. Pee Posh potters are known for distinctive red, black-on-white (cream), 
          and black-on-red pottery, as well as red-and-white pots decorated with black paint. <br /> <br />

          The Quechan and Mohave people of the lower Colorado River Valley have a tradition of red-on-buff pottery. 
          The bold geometric designs employed mirror those used for traditional beadwork and body decorations. <br /> <br />

          Indigenous potters of the Mexican states of Sonora, Sinaloa, and Chihuahua include Tarahumaras, Warihíos, and Mayos. 
          Utilitarian cooking and water-storage jars are most common, although a small industry of decorated trade pottery 
          exists within these communities. <br /> <br />

          Navajos, and Chiricahua, Jicarilla, Lipan, Mescalero, and Western Apaches are all related by culture and language. 
          Jicarilla pottery resembles that of Taos and Picuris, in terms of shapes and the use of micaceous clay. In the past, 
          Lipan, Mescalero, Chiricahua, Western Apache, and Navajo potters all made large, thin-walled, pointed-bottomed 
          plainware jars sometimes decorated with appliqué bands of clay or incised designs. In recent decades, Navajo pottery 
          has flourished and diversified, with the introduction of innovative surface treatments. <br /> <br />



          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
