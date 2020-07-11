import React from 'react';
import './workshop-page.css';

// Material components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WorkshopCardComponent from '../../components/workshop-card.component';

export class WorkshopPage extends React.Component<any, any> {
    render() {
        return (
            <div className="workshop-page-container">
                <div className="workshop-page-title">DELAVNICE</div>
                <Grid container justify="center" spacing={8}>
                    <Grid item>
                        <WorkshopCardComponent
                            title="UMETNA INTELIGENCA"
                            mentor="Peter Aleksander Bizjak"
                            contents="Na delavnici se boste naučili osnove programskega jezika Python ter machine-learning platforme Tensorflow. S pomočjo pridobljenega znanja boste računalnik naučili prepoznave objektov na sliki ali govora"
                        />
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    <span style={{ fontWeight: 'bold' }}>UMETNA INTELIGENCA</span>
                                </Typography>
                                <Typography variant="subtitle1">Peter Aleksander Bizjak</Typography>
                                <Typography variant="body2" style={{ width: '300px', marginTop: '16px' }}>
                                    Na delavnici se boste naučili osnove programskega jezika Python ter machine-learning
                                    platforme Tensorflow. S pomočjo pridobljenega znanja boste računalnik naučili
                                    prepoznave objektov na sliki ali govora.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    <span style={{ fontWeight: 'bold' }}>UMETNA INTELIGENCA</span>
                                </Typography>
                                <Typography variant="subtitle1">Peter Aleksander Bizjak</Typography>
                                <Typography variant="body2" style={{ width: '300px', marginTop: '16px' }}>
                                    Na delavnici se boste naučili osnove programskega jezika Python ter machine-learning
                                    platforme Tensorflow. S pomočjo pridobljenega znanja boste računalnik naučili
                                    prepoznave objektov na sliki ali govora.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
