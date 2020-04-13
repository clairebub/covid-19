import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';   
import Paper from '@material-ui/core/Paper'; 
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({

    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        flex: '0 0 auto',
    },
    heroMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    paper: {

        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
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
                <Paper>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.heroMedia}
                            image="/images/mb-sun-exposure.jpg" />
                    </Card>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>hello</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography noWrap>world</Typography>
                        </Grid>
                    </Grid>
                </Paper>
       
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Grid cell 1, 1</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Grid cell 2, 1</Paper>
                    </Grid>
                    <Grid item xs={4} />
                    {/*12 Columns used, so next grid items will be the next row*/}
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>Grid cell 1, 2</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>where</Paper>
                    </Grid>
                </Grid>


                <Grid container spacing={2}>
  
                    <Card className={classes.card}>
                        <CardHeader
                            className={classes.header}
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    R
                            </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <div className={classes.attachment}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                         </Typography>
                            </CardContent>
                            <CardMedia
                                className={classes.media}
                                image="https://www.cdc.gov/coronavirus/2019-ncov/images/protect-wash-hands.png"
                                title="Paella dish"
                            />
                        </div>
                    </Card>
                </Grid>

                <Paper>
                    <Card className={classes.card}>
                        <div className={classes.attachment}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Live From Space
                            </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Mac Miller
                            </Typography>
                            </CardContent>
                            <CardMedia
                                className={classes.cover}
                                image="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/cloth-face-cover.png"
                                title="Live from space album cover"
                            />
                        </div>
                    </Card>
                </Paper>
            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}
