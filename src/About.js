import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from './Footer';

export default function About() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <Paper variant="outlined">
                Public Health Without Borders is an organization dedicated 
                to informing people on the truth about COVID-19, promoting 
                best practices from different cultures around the world, 
                matching their donations with the organizations that need it 
                most, understanding people’s concerns, and spreading positive 
                stories of what people are doing in these difficult times. 
                We believe that through uniting our effort and promoting 
                positive actions, we can give hope and come out of this 
                crisis stronger than before.

              </Paper>
            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}