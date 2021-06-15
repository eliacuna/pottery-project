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
          <h2 className={classes.title} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>Pre-Hispanic and Protohistoric Pottery from the Sonoran Desert and the Lower Colorado River Valley</h2>
          <h4 className={classes.description} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>
          The earliest pottery vessels now known in the American Southwest have been found in the Sonoran Desert, in Tucson, 
          and date as early as 50 CE. Clays in the Sonoran Desert and the lower Colorado River Valley are generally rich in 
          iron and, as in the mountains to the north and east, potters preferred to fire their pots in oxidizing (oxygen-rich) 
          atmospheres. The dominant pottery traditions in these regions involved the use of pink-firing or tan-firing clays, 
          sometimes finished with a thin layer of buff-colored clay (a slip) and decorated with red paint made from hematite. 
          Occasionally, polychrome pottery (featuring three or more colors) was produced. The major archaeological cultures 
          recognized in these regions are the Early Formative and Hohokam of the Sonoran Desert, and the Patayan of the lower 
          Colorado River Valley and the adjacent uplands of western Arizona. <br /> <br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
