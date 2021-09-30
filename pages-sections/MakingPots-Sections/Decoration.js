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
          <h2 className={classes.title} style={{color:'black', fontFamily:'serif'}}>Pottery Decoration</h2>
          <h4 className={classes.description} style={{color:'black', fontFamily:'serif', textAlign:'left'}}>
            Traditional techniques used to decorate pottery include polishing (also referred to as
            burnishing), painting, carving, and appliqué. Some historic and contemporary pottery is
            embellished with beads, cloth, fiber, or gemstones.<br /> <br />
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
        <img src="img/c-27676_scan01.jpg" style={{height:'60%', width:'60%'}} />
        <h4 className={classes.description} style={{color:'black', fontFamily:'serif', fontSize:'12pt'}}>
          Johnny Martin (Hopi) uses a yucca brush to paint a pot with natural pigments such as black
          made from <br /> boiled mustard weed, yellow made of limonite and water, and black mixed with
          hematite. <br />
          Helga Teiwes, photographer, 1989, ASM C-27676
        </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
        <img src="img/lazaro--jody_2009_14.jpg" style={{height:'60%', width:'60%'}} />
        <h4 className={classes.description} style={{color:'black', fontFamily:'serif', fontSize:'12pt'}}>
          Jody Kaa Folwell-Lazaro (KahP’Owinge) uses acrylic paint and a commercial brush to paint a
          figure of a woman on a bowl. <br /> Jannelle Weakly, photographer, 2009. Uncataloged.<br />
        </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
