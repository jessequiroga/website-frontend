import React from 'react';
import './develop-page.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';

export default class DevelopPage extends React.Component<any, any> {
    render() {
        return (
            <div className="develop-page-container">
                <div className="develop-page-title">RAZVIJAJ Z NAMI!</div>
                <Grid container style={{ padding: '24px' }}>
                    <Grid item xs={3}>
                        <div className="develop-page-mentor-name">Peter Aleksander Bizjak</div>
                        <div className="develop-page-mentor-name">Tian Jagodic</div>
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <Card className="develop-page-card-container">
                                <CardContent style={{ overflow: 'auto' }}>
                                    <List>
                                        <ListItem>
                                            <Box flexDirection="column">
                                                <div className="develop-page-repository-title">
                                                    username/Repository-Title
                                                </div>
                                                <div className="develop-page-repository-description">
                                                    Short repository description, containing stuff, I guess...
                                                </div>
                                                <div>
                                                    <span className="develop-page-language-color" />
                                                    <span>TypeScript</span>
                                                </div>
                                            </Box>
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
