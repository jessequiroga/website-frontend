import React from 'react';
import './mentor-card.component.css';

// Material components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface MentorCardComponentProps {
    name: string;
    profilePic: string;
    instagram: string;
    bio: string;
}

export default class MentorCardComponent extends React.Component<MentorCardComponentProps, any> {
    render() {
        return (
            <Card>
                <CardContent>
                    <Box display="flex" flexDirection="column">
                        <Box m="auto">
                            <img
                                src={require(`../../assets/${this.props.profilePic}`)}
                                className="mentor-card-component-image"
                            />
                        </Box>
                        <Box m="auto">
                            <Typography variant="h6">
                                <span style={{ fontWeight: 'bold' }}>{this.props.name}</span>
                            </Typography>
                        </Box>
                        <Box m="auto">
                            <Typography variant="subtitle1" className="mentor-card-item">
                                {this.props.instagram}
                            </Typography>
                        </Box>
                        <Typography
                            variant="body2"
                            style={{ width: '350px', marginTop: '16px' }}
                            className="mentor-card-item"
                        >
                            {this.props.bio}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}
