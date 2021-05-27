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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Eastern Pueblo Ethnographic Pottery</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif'}}>
          All sixteen Eastern Pueblos, located along the Rio Grande River in northern New Mexico, made decorated or plain 
          pottery in historic times. Different clays, shapes, and decorative techniques are associated with the pottery-making 
          tradition of each community. Seven Pueblos—Cochiti, Kewa (Santo Domingo), Ohkay Owingeh (San Juan), San Ildefonso, 
          Santa Clara, Tesuque, and Zia—dominated the production of vessels intended for their own use, pots made for trade 
          with other Pueblos and local Hispanic communities, and miniature and exotic forms made specifically for sale to 
          tourists. Potters from Taos and Picuris, and to a lesser extent Nambe, historically specialized in micaceous cooking 
          pots. The last decades have witnessed a micaceous pottery renaissance, with both art pottery and culinary wares 
          produced by a number of award-winning ceramic artists from these Pueblos. The Pueblo of Jemez has a growing number 
          of potters as well. <br /> <br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
