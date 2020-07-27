import React from 'react';
import './representative.component.css';

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

interface RepresentativeComponentProps {
    fullName: string;
    profilePic: string;
    email: string;
    phoneNumber: string;
}

export class RepresentativeComponent extends React.Component<RepresentativeComponentProps, any> {
    render() {
        return (
            <Grid item key={this.props.fullName} style={{ padding: '16px' }}>
                <Card>
                    <CardContent>
                        <Box display="flex" flexDirection="column">
                            <Box m="auto">
                                <img
                                    src={require(`../../assets/${this.props.profilePic}`)}
                                    className="card-component-image"
                                    alt="Representative icon"
                                />
                            </Box>
                            <Box m="auto">
                                <Typography variant="h6">
                                    <span style={{ fontWeight: 'bold' }}>{this.props.fullName}</span>
                                </Typography>
                            </Box>
                            <Box m="auto">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Email />
                                        </ListItemIcon>
                                        <ListItemText primary={this.props.email} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Phone />
                                        </ListItemIcon>
                                        <ListItemText primary={this.props.phoneNumber} />
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
