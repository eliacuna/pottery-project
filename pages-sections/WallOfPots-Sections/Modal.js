import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";

// import sections
import ModelViwer   from "pages-sections/WallOfPots-Sections/ModelViewer.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function SectionJavascript() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
        <Dialog
            classes={{
            root: classes.center,
            paper: classes.modal,
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
            >
            <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => setClassicModal(false)}
            >
                <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>A-11451 3D Model</h4>
            </DialogTitle>
            <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
            >
            <p>
                Congrats!
            </p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
            <Button
                onClick={() => setClassicModal(false)}
                color="danger"
                simple
            >
                Close
            </Button>
            </DialogActions>
        </Dialog>
        </GridItem>
    </GridContainer>
  );
}
