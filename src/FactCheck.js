import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    media: {
      height: 400,
      paddingTop: '56.25%', // 16:9
    },
  }));

export default function Blogs() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <Card>
                    <CardMedia
                        className={classes.media}
                        image="/images/mb-sun-exposure.jpg" />
                </Card>
            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}
