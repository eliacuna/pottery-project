import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import BorderHorizontalIcon from '@material-ui/icons/BorderHorizontal';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MapIcon from '@material-ui/icons/Map';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>Continuity</h2>
          <h4 className={classes.description} style={{textAlign:'left', color:'black', fontFamily:'serif'}}>
          There is no simple, one-to-one relationship between a particular ancient group and any one modern group of Native 
          Americans. However, when links between past and present peoples can be traced, it is often pottery that demonstrates 
          these connections. Today, Native artists continue to innovate even as they preserve time-honored customs.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
