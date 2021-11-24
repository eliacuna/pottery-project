import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import styles from "styles/jss/nextjs-material-kit/pages/makingPots.js";
import {makeStyles} from "@material-ui/core/styles"
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function ActionAreaCard({card}) {
    const classes = useStyles();
    return (
        <div>
            {/* dont know what sx={maxWidth: 345} does*/}
            <Link href={card.href}>
                <Card className={classes.card}>
                    <CardActionArea> 
                        <CardMedia component="img" image={card.img} className={classes.cardImage}/>
                        <CardContent> 
                            <Typography gutterBottom variant="h5" className={classes.cardTitle} >
                                {card.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    );
}