import React from 'react';
import './mentor.component.css';

import { Box, Card, CardContent, Typography } from '@material-ui/core';

interface MentorCardComponentProps {
    name: string;
    profilePic: string;
    instagram: string;
    bio: string;
}

export class MentorComponent extends React.Component<MentorCardComponentProps, any> {
    render() {
        return (
            <Card>
                <CardContent>
                    <Box display="flex" flexDirection="column">
                        <Box m="auto">
                            <img
                                src={require(`../../assets/${this.props.profilePic}`)}
                                className="card-component-image"
                                alt="Mentor icon"
                            />
                        </Box>
                        <Box m="auto">
                            <Typography variant="h6">
                                <span style={{ fontWeight: 'bold' }}>{this.props.name}</span>
                            </Typography>
                        </Box>
                        <Box m="auto">
                            <Typography variant="subtitle1">
                                <span style={{ fontWeight: 'normal' }}>{this.props.instagram}</span>
                            </Typography>
                        </Box>
                        <Typography variant="body2" style={{ width: '350px', marginTop: '16px' }}>
                            <span style={{ fontWeight: 'normal' }}>{this.props.bio}</span>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}
