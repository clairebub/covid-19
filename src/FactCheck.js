import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from './Footer';

export default function Blogs() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <Paper variant="outlined">
                    <div>To be built: the factcheck tab.</div>
                </Paper>
            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}
