import React from 'react';
import './mentors.page.css';

import { Grid } from '@material-ui/core';

import { MentorComponent } from '../../components';
import { returnListOfMentors } from '../../utils';

export class MentorsPage extends React.Component<any, any> {
    render() {
        return (
            <div className="page-container">
                <div className="card-container">
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <Grid container>
                                <div className="page-title">MENTORJI</div>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                {returnListOfMentors().map((mentor) => {
                                    return (
                                        <Grid item key={mentor.key} style={{ padding: '16px' }}>
                                            <MentorComponent
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
