import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

const useStyles = makeStyles(styles);

export default function SwitchesSize() {
  const imagePath = "img/2004-1781-14d.jpg";
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <GridContainer justify="center">
        <GridItem xs={12} s={12} md={8}>
            <img src={imagePath} style={{height:'100%', width:'90%'}}/>
        </GridItem>
        <GridItem>
         <FormGroup row>
            <FormControlLabel
                control={
                <Switch 
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Primary"
            />
            </FormGroup>
        </GridItem>
    </GridContainer>
  );
}