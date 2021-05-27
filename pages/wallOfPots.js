import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/wallOfPots.js";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Wall of Pots"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/exhibit.jpeg" />
            <GridContainer justify="center">
              <GridItem xs={10} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Column 1",
                      tabIcon: Filter1Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={6} sm={12} md={3}>
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1wVbowfrv1qMgJXh9r5z0WPGbs3ECLTj2"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1fkdA3KfT9fgF19Kz4NvHz65CAj5VMpf6"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1Pti8HljuAlCoPzeXL6P-kpDbfIbv0VNN"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1n0TIiQ1CRJRYdtuV0HiiIzOqtX37PPoB"
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={6} sm={12} md={3}>
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1zpG-BmhStvXZN6kOeN5K_gNCj0hut6d6"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=11xfqkuWpbTDHT0Tq4VeeuY4ltfdlY09D"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1lQlTjw-vuI3p4JP3f83uzS7c-Zsgh4ra"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=12hZ4VI7hqOu4o324q16iQ2LF52FkHo_N"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={6} sm={12} md={3}>
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1lMbSXCRdsM6amx7wEhtqpeutvdPsT2sK"
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1W1yL491Umr0PbcG9vgqs4pJkKaWiChV3"
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1T37x-tcaQdv9JeWlwCSPc8JCxubsYW5l"
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1064wo1SaoJBanZ5gGLjWon17VHd8LgLd"
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={6} sm={12} md={3}>
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=11NRn_z_JOtP16LQUhlYAFlT39WxwLbsg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1Rvy2MN87EscRY1axmlzk3DAmaR5y6JTO"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1vzGkW_Z4WRt8x3Fv4u_IQJMnC8AXyxPt"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1tKtAz7CtXrj7OfekTGULvZdN63p5V4tu"
                              className={navImageClasses}
                            />
                          </GridItem>
                      </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Column 2",
                      tabIcon: Filter2Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1Em2pfZHeljeVDE0R4r9GLQi0cdIMpOHK"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1OfgDE0VEqIIQhFpBgPHWbnT71bfCnDHq"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=17LV6QMWrFRdbMaGIZNL1lWUQXxtu4N2s"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1ZrNOXQYu6q1kbMFKY-BGSpaI9rnWmLc_"
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1JO5BIhWwpp5HtC1p6VCSCgLsibJN1qBP"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1KTU85hgkb60fdK3p9gtEz2kfvsVtPZj1"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1P38Ydzmegp-ExEKQdIU2W2KDqbzDb_IB"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://drive.google.com/uc?export=view&id=1_H1Y2UjIlGZccjLqNwcIYShGF2s0wnlx"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1S2IWMn8e3iCYv97g3Fp2fEsMYYoe1KUK"
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1tBots9JaKGq3Pj4U0vnKjNiIz2NnwI2c"
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1dIAtgIULV4BvlkTtuhDwEOtXIvIpp0eV"
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1chAOePZI1CtstI1f6uSla2l_4ImiBORK"
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src="https://drive.google.com/uc?export=view&id=1UPeLng-SBx9ODT6qJcz5X2JSAICummIc"
                            className={navImageClasses}
                          />
                        </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Column 3",
                      tabIcon: Filter3Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    
                    {
                      tabButton: "Column 4",
                      tabIcon: Filter4Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Column 5",
                      tabIcon: Filter5Icon,
                      tabContent: (
                        <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Column 6",
                      tabIcon: Filter6Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src=""
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=""
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
      <Footer />
    </div>
  );
}
