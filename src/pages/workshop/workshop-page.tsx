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
                <div className="workshop-page-title">DELAVNICE</div>
                <div className="workshop-page-cards-container"></div>
                <Grid container justify="center" spacing={8}>
                    {WorkshopsConst.returnListOfWorkshops().map((workshop) => {
                        return (
                            <Grid item key={workshop.key}>
                                <WorkshopCardComponent
                                    title={workshop.title}
                                    mentor={workshop.mentor}
                                    contents={workshop.description}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}
