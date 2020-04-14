import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    card: {
        justifyContent: 'center',
        alignItems: "center",
        padding: theme.spacing(2),
        margin: theme.spacing(1),
      },
      paper: {
        justifyContent: 'center',
        alignItems: "center",
        padding: theme.spacing(2),
        margin: theme.spacing(1),
      },
}));

export default function FactCheck() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
 
                <Card classes={classes.card}>
                    <Grid container>
                        <Grid item xs={4}>
                            <img src="/images/cloth-face-cover.png" alt="wear face mask" />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                'Should I wear a facemask?',
                            </Typography>
                            <Typography>
                                date: 'April 5th',
                            </Typography>
                            <Typography>
                                Everyone should wear a cloth face cover when they have to go out in public, for example to the grocery store or to pick up other necessities.
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>

                <Card classes={classes.card}>
                    <Grid container classes={classes.card}>
                        <Grid item xs={4}>
                            <img src="images/protect-wash-hands.png" alt="wash your hands" />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.',</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}
