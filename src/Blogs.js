import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Footer from './Footer';
import Link from '@material-ui/core/Link';
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Main from './Main';
import post4 from "./blog-post.4.md";
import post5 from "./blog-post.5.md";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    media: {           // this is the`className` passed to `CardMedia` later
    height: 5,     // as an example I am modifying width and height
    width: '100%',
    marginLeft: '33%'
  },
  }));

//const useStyles = makeStyles((theme) => ({
 //   mainGrid: {
//      marginTop: theme.spacing(3),
//    },
//    heroMedia: {
//      height: 400,
//      paddingTop: '56.25%', // 16:9
//    },
//  }));

  
  
  const posts = [
    post4,
  ];

  const posts2 = [
      post5,
  ]

export default function Blogs() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
          <Header />
          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="Recent articles" posts={posts} />
            </Grid>
          </main>

          <CardMedia
            component='iframe'
            height="400"
            width= "600"
            title=':('
            src='https://www.youtube.com/embed/hE1enPDh3nM'
          />

          <Paper variant="outlined">
            <Typography>
              <Link href="https://www.youtube.com/watch?v=hE1enPDh3nM">
                {'Link to full video on youtube'}
              </Link>
            </Typography>
          </Paper>

          <main>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="" posts={posts2} />
            </Grid>
          </main>


          <Paper variant="outlined">
            <Typography>
              <Link href="https://www.youtube.com/watch?v=huTUOek4LgU">
                {'Link to full video on youtube'}
              </Link>
            </Typography>
          </Paper>
          
          <CardMedia
            component='iframe'
            height="400"
            width= "600"
            title=':('
            src='https://www.youtube.com/embed/huTUOek4LgU'
          />

        </Container>
        <Footer title="" description="" />
      </React.Fragment>
    );
}