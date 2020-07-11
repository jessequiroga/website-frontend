import React from 'react';
import './workshop-page.css';

// Material components
import { Grid } from '@material-ui/core';

export class WorkshopPage extends React.Component<any, any> {
    render() {
        return (
            <div className="workshop-page-container">
                <div className="workshop-page-title">DELAVNICE</div>
                <Grid></Grid>
            </div>
        );
    }
}
