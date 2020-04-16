import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from './Footer';

export default function Culture() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <Paper variant="outlined">
                There is no single best response to COVID-19. 
                What worked in China — a highly centralized and authoritarian 
                country that deployed drones to monitor its citizens — l
                ikely will not work in Norway or the U.S. 
                
                Different countries will need to manage the pandemic with methods that 
                are generally effective, but specifically suited to their culture, 
                their politics, their demographics.

                That said, the experiences of several countries close to the 
                initial outbreak spotlight the importance of a few 
                fundamentals in containing COVID-19, along with the value of 
                modern technologies in tracking chains of transmission.

                Akin to air pollution and climate change, pandemics don’t respect national borders. 
                Countries need to connect their individual actions with much broader international cooperation.
                
              </Paper>
            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}