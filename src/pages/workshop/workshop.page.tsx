import React from 'react';
import './workshop.page.css';

import { Grid } from '@material-ui/core';

import { WorkshopComponent } from '../../components';
import { returnListOfWorkshops } from '../../utils';

export class WorkshopPage extends React.Component<any, any> {
    render() {
        return (
            <div className="workshop-page-container">
                <div className="workshop-page-cards-container">
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item>
                            <Grid container>
                                <div className="workshop-page-title">DELAVNICE</div>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                {returnListOfWorkshops().map((workshop) => {
                                    return (
                                        <Grid item key={workshop.key} style={{ padding: '16px' }}>
                                            <WorkshopComponent
                                                title={workshop.title}
                                                mentor={workshop.mentor}
                                                contents={workshop.description}
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
