import React from 'react';
import './representative-page.css';

// Material components
import Grid from '@material-ui/core/Grid';

import { returnListOfRepresentatives } from '../../utils/representatives.const';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Card, CardContent, ListItemText } from '@material-ui/core';

export class RepresentativePage extends React.Component<any, any> {
    render() {
        return (
            <div className="representative-page-container">
                <div className="representative-cards-container">
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <Grid container>
                                <div className="representative-page-title">ZASTOPNIKI DRUŠTVA</div>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                {returnListOfRepresentatives().map((representative) => {
                                    return (
                                        <Grid item key={representative.name} style={{ padding: '16px' }}>
                                            <Card>
                                                <CardContent>
                                                    <Box display="flex" flexDirection="column">
                                                        <Box m="auto">
                                                            <img
                                                                src={require(`../../assets/${representative.profilePic}`)}
                                                                className="representative-card-component-image"
                                                                alt="Representative icon"
                                                            />
                                                        </Box>
                                                        <Box m="auto">
                                                            <Typography variant="h6">
                                                                <span style={{ fontWeight: 'bold' }}>
                                                                    {representative.name}
                                                                </span>
                                                            </Typography>
                                                        </Box>
                                                        <Box m="auto">
                                                            <List>
                                                                <ListItem>
                                                                    <ListItemIcon>
                                                                        <EmailIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={representative.email} />
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListItemIcon>
                                                                        <PhoneIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={representative.phoneNumber}
                                                                    />
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
