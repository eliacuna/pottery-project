import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Helga Teiwes, photographer, 1989, C-27548',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta starts by smoothing out a ball of clay to form the bottom of the pot.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27551',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta adds the first coil of clay to the started base.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27553',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Making the pot wider by pressure from the inside, Roberta now uses a plastic scraper to smooth the outside, which also thins the wall and compresses the clay.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27561',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta continues to attach coils to bring height to the pot. As she lays the coil along the rim with her left hand, she uses her right forefinger and thumb to pinches it down in order to adhere it to the pot.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27562',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta smooths the pot’s shoulder with a tongue depressor while supporting the inner wall with her left hand.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27572',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Robertas left hand holds the outside of the pot’s wall while smoothing the inside with a plastic scraper. The plastic container holds water which she uses small amounts to keep the clay moist while working it.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, 82129',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'After last coil is adhered, Roberta runs her forefinger over the rim to smooth it and compress the clay.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27582',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Once the pot has dried some, Roberta uses a sponge to apply slip to the outside. While the slip is still damp, she burnishes the pot with a smooth stone. She does the upper half first and then repeats the process on the lower half. Burnishing compresses the clay and give the pot a smooth finish.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27595',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta uses a smooth river rock to burnish the just-applied slip. She always starts at the top of the pot to apply the slip, which she works down to the shoulder of the pot. Then she burnishes that section. She always applies two coats of slip and burnishes after each coat.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27607',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'After the slip has dried, Roberta starts painting her design. Using a watercolor brush, she started painting the design at the rim of the vessel. She made several circular black lines and then added triangles over the concentric lines. She then continues her design on the next section of the pot.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27635',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Once the pots have completely dried, they are ready to be fired. Roberta places the pots inside a metal bowl which has been lined with broken pieces of pottery. She covers the pots with more broken potsherds. This cradles the pots protecting them from movement during the firing. The pot sherds, if placed tightly and completely over the pots, also prevents smoke from getting in and results in the clay turning an even beige color.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27641',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta arranges pieces of sheep dung around the bowl, eventually covering it completely. Sheep dung fires at a very high temperature.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, 82207',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta puts the metal bowl with the covered pots in the middle of the layer of dung.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, 82220',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta leans metal bars and wire frames against the dung to keep the pile from falling apart.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27645',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'It takes a full hour before the flames finally catch and the smoke reduces. The fire will burn for another hour. Then it has to cool off before the pots can be removed.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27631',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Roberta removes the pot sherds and checks to see if the pots have cooled enough to pick up.',
  },
  {
    label: 'Helga Teiwes, photographer, 1989, C-27643',
    imgPath:
      '/img/c-27530_scan01_crpd.jpg',
    desc: 'Once cooled, Roberta removes the fired pots, which came out perfect.',
  },
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: '100%',
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header} xs={12} sm={12} md={8}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
              {step.desc}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);