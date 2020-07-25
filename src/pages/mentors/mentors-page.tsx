import React from 'react';
import './mentors-page.css';

// Material components
import Grid from '@material-ui/core/Grid';
import { returnListOfMentors } from '../../utils';
import MentorCardComponent from '../../components/mentor-card/mentor-card.component';

export class MentorsPage extends React.Component<any, any> {
    render() {
        return (
            <div className="mentors-page-container">
                <div className="mentors-page-cards-container">
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <Grid container>
                                <div className="mentors-page-title">MENTORJI</div>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                {returnListOfMentors().map((mentor) => {
                                    return (
                                        <Grid item key={mentor.key} style={{ padding: '16px' }}>
                                            <MentorCardComponent
                                                name={mentor.name}
                                                profilePic={mentor.profileImage}
                                                instagram={mentor.instagram}
                                                bio={mentor.description}
                                            />
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