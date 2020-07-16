import React from 'react';
import './workshop-page.css';

// Material components
import Grid from '@material-ui/core/Grid';
import WorkshopCardComponent from '../../components/workshop-card.component';
import { WorkshopsConst } from '../../utils/workshops.const';

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
                                {WorkshopsConst.returnListOfWorkshops().map((workshop) => {
                                    return (
                                        <Grid item key={workshop.key} style={{ padding: '16px' }}>
                                            <WorkshopCardComponent
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
