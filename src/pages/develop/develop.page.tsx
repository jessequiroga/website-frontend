import React from 'react';
import './develop.page.css';

import { Box, Grid, List, ListItem } from '@material-ui/core';

import { FirebaseProvider } from '../../firebase';
import { githubGraphQLClient, RepositoryModel } from '../../github';

interface DevelopPageProps {
    firebaseProvider: FirebaseProvider;
}

interface DevelopPageState {
    repositoriesFor: number;
    repositories: Array<RepositoryModel>;
}

export class DevelopPage extends React.Component<DevelopPageProps, DevelopPageState> {
    constructor(props: DevelopPageProps) {
        super(props);
        this.state = {
            repositoriesFor: 0,
            repositories: []
        };
    }

    componentDidMount() {
        this.fetchGitHubRepos('peter');
    }

    render() {
        return (
            <div className="develop-page-container">
                <div className="develop-page-title">RAZVIJAJ Z NAMI!</div>
                <Grid container style={{ padding: '24px' }}>
                    <Grid item xs={3}>
                        <div
                            className="develop-page-mentor-name"
                            style={{ fontWeight: this.state.repositoriesFor === 0 ? 'bold' : 'normal' }}
                            onClick={async () => {
                                this.setState({ repositoriesFor: 0 });
                                await this.fetchGitHubRepos('peter');
                            }}
                        >
                            Peter Aleksander Bizjak
                        </div>
                        <div
                            className="develop-page-mentor-name"
                            style={{ fontWeight: this.state.repositoriesFor === 1 ? 'bold' : 'normal' }}
                            onClick={async () => {
                                this.setState({ repositoriesFor: 1 });
                                await this.fetchGitHubRepos('tian');
                            }}
                        >
                            Tian Jagodic
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <List>
                                {this.state.repositories.map((repo) => {
                                    return (
                                        <ListItem
                                            key={repo.name}
                                            onClick={() => {
                                                window.open(repo.url);
                                                window.focus();
                                            }}
                                        >
                                            <Box flexDirection="column">
                                                <div className="develop-page-repository-title">{repo.name}</div>
                                                <div className="develop-page-repository-description">
                                                    {repo.description}
                                                </div>
                                                <div>
                                                    <span
                                                        className="develop-page-language-color"
                                                        style={{ backgroundColor: repo.languageColor }}
                                                    />
                                                    <span>{repo.language}</span>
                                                </div>
                                            </Box>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }

    private async fetchGitHubRepos(user: string) {
        if (this.props.firebaseProvider !== undefined) {
            const token = await this.props.firebaseProvider.fetchGitHubToken(user);
            const userRepos = await githubGraphQLClient(token);
            this.setState({
                repositories: userRepos
            });
        }
    }
}
