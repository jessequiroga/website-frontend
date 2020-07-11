import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

interface WorkshopCardComponentProps {
    title: string;
    mentor: string;
    contents: string;
}

export default class WorkshopCardComponent extends React.Component<WorkshopCardComponentProps, any> {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h6">
                        <span style={{ fontWeight: 'bold' }}>{this.props.title}</span>
                    </Typography>
                    <Typography variant="subtitle1">{this.props.mentor}</Typography>
                    <Typography variant="body2" style={{ width: '350px', marginTop: '16px' }}>
                        {this.props.contents}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
