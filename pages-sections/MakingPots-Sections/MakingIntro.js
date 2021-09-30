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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Making Pottery</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
        <img src="img/c-28199_scan1.jpg" style={{height:'60%', width:'60%'}} />
        <h4 className={classes.description} style={{color:'black', fontFamily:'serif', textAlign:'left', marginLeft:'5%'}}> <br />
          Pottery making starts by collecting natural clay. Karen Charley (Hopi) collects clay from above
          Beaver Lake near Keams Canyon. Note the deep undercutting made by previous potters. Karen
          tasted this clay and found it good. This is “rich clay” which does not need temper. Helga Teiwes,
          photographer, 1992, C-28203<br /><br />
          </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif', textAlign:'left', marginLeft:'5%'}}> <br />
          This following sequence shows Roberta Youvella Silas (Hopi) making a bowl at her home in
          Polacca, Arizona. The steps go from forming the bottom, to decorating it, and finally firing it
          using sheep dung to create very high heat.<br /><br />
          </h4>
        </GridItem>
      </GridContainer>
      <div>
      </div>
    </div>
  );
}
