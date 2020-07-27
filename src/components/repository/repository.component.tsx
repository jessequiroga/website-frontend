import React from 'react';
import './repository.component.css';

import { Box, ListItem } from '@material-ui/core';

interface RepositoryComponentProps {
    repositoryName: string;
    description: string;
    fullUrl: string;
    primaryLanguageName: string;
    primaryLanguageColor: string;
}

export class RepositoryComponent extends React.Component<RepositoryComponentProps, any> {
    render() {
        return (
            <div style={{ marginBottom: '16px' }}>
                <ListItem
                    key={this.props.repositoryName}
                    onClick={() => {
                        window.open(this.props.fullUrl);
                        window.focus();
                    }}
                >
                    <Box flexDirection="column">
                        <div className="repository-title">{this.props.repositoryName}</div>
                        <div className="repository-description">{this.props.description}</div>
                        <div>
                            <span
                                className="repository-language-color"
                                style={{ backgroundColor: this.props.primaryLanguageColor }}
                            />
                            <span>{this.props.primaryLanguageName}</span>
                        </div>
                    </Box>
                </ListItem>
            </div>
        );
    }
}
