import React from 'react';
import './representative.page.css';

import { Grid } from '@material-ui/core';

import { returnListOfRepresentatives } from '../../utils/representatives.const';
import { RepresentativeComponent } from '../../components';

export class RepresentativePage extends React.Component<any, any> {
    render() {
        return (
            <div className="page-container bg-representative">
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
                                <div className="page-title">ZASTOPNIKI DRUŠTVA</div>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                {returnListOfRepresentatives().map((representative) => (
                                    <RepresentativeComponent
                                        fullName={representative.name}
                                        profilePic={representative.profilePic}
                                        email={representative.email}
                                        phoneNumber={representative.phoneNumber}
                                    />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
