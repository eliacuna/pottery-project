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
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={7} justify='center'>
            <div class="sketchfab-embed-wrapper">
                <iframe style={{display:'block'}}
                    title="A-11451" frameborder="0" allowfullscreen mozallowfullscreen="true" 
                    webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" 
                    xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                    src="https://sketchfab.com/models/5866a04d3c04489d9e753c853ee6ffc8/embed">
                </iframe> 
                <p style={{fontSize: '1.2em', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}> 
                <a 
                    href="https://sketchfab.com/3d-models/a-11451-5866a04d3c04489d9e753c853ee6ffc8?utm_medium=embed&utm_campaign=share-popup&utm_content=5866a04d3c04489d9e753c853ee6ffc8" 
                    target="_blank" style={{fontWeight: 'bold', color: '#1CAAD9'}}> 
                    A-11451 
                </a>
                        {" "}by{" "}
                <a 
                    href="https://sketchfab.com/UofA-CDH?utm_medium=embed&utm_campaign=share-popup&utm_content=5866a04d3c04489d9e753c853ee6ffc8" 
                    target="_blank" style={{fontWeight: 'bold', color: '#1CAAD9'}}>
                    The Center for Digital Humanities UArizona
                </a> 
                        {" "}on{" "} 
                <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5866a04d3c04489d9e753c853ee6ffc8" 
                    target="_blank" style={{fontWeight: 'bold', color: '#1CAAD9'}}>
                    Sketchfab
                </a>
                </p>
            </div>
        </GridItem>
      </GridContainer>
  );
}
