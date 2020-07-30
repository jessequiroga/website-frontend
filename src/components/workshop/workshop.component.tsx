import React from 'react';
import './workshop.component.css';

import { Card, CardContent, Typography } from '@material-ui/core';

interface WorkshopCardComponentProps {
    title: string;
    mentor: string;
    contents: string;
}

export class WorkshopComponent extends React.Component<WorkshopCardComponentProps, any> {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}
