import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Header from './Header';
import Footer from './Footer';

export default function Blogs() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />

                <Paper style={{ padding: 16 }}>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="first-name">First Name:</InputLabel>
                                <Input id="first-name" aria-describedby="first-name-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="last-name">Email address</InputLabel>
                                <Input id="last-name" aria-describedby="last-name-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="email">Email address:</InputLabel>
                                <Input id="email" aria-describedby="email-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="organization">Name of Organization: *</InputLabel>
                                <Input id="organization" aria-describedby="email-text" />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Donations needed:</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox name="facemask" />}
                                    label="Facemask"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="glove" />}
                                    label="Glove"
                                />
                                <FormControlLabel
                                    control={<Checkbox name="gown" />}
                                    label="Protection gown"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Paper>

            </Container>
            <Footer title="" description="" />
        </React.Fragment>
    );
}
