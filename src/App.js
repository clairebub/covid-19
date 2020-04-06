import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'COVID-19', url: '#' },
  { title: 'About', url: '#' },
];

const mainFeaturedPost = {
  title: '',
  description:
    "",
  image: 'https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-sun-exposure.tmb-1920v.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Should I wear a facemask?',
    date: 'April 5th',
    description:
      'Everyone should wear a cloth face cover when they have to go out in public, for example to the grocery store or to pick up other necessities.',
    image: 'https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/cloth-face-cover.png',
    imageText: 'Image Text',
  },
  {
    title: 'Washing hands is important',
    date: 'April 3rd',
    description:
      'Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.',
    image: 'https://www.cdc.gov/coronavirus/2019-ncov/images/protect-wash-hands.png',
    imageText: 'Image Text',
  },
];

const posts = [
  post1,
  post2,
  post3,
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 2019', url: '#' },
  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline /> 
      <Container maxWidth="lg">
        <Header title="Public Health Without Borders" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Featured" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="" />
    </React.Fragment>
  );
}
