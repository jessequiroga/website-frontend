import React from 'react';
import './representative.page.css';

import {
    Box,
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core';
import { Email, Phone } from '@material-ui/icons';

import { returnListOfRepresentatives } from '../../utils/representatives.const';

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
                                                                        <Email />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={representative.email} />
                                                                </ListItem>
                                                                <ListItem>
                                                                    <ListItemIcon>
                                                                        <Phone />
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
