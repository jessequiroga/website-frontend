import React from 'react';
import './develop.page.css';

import { Grid, List } from '@material-ui/core';

import { FirebaseProvider } from '../../firebase';
import { githubGraphQLClient, RepositoryModel } from '../../github';
import { RepositoryComponent } from '../../components';

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
            <div className="page-container bg-develop">
                <div className="develop-page-title">RAZVIJAJ Z NAMI!</div>
                <Grid container style={{ padding: '24px' }}>
                    <Grid item xs={3}>
                        <div
                            className="mentor-name"
                            style={{ fontWeight: this.state.repositoriesFor === 0 ? 'bold' : 'normal' }}
                            onClick={async () => {
                                this.setState({ repositoriesFor: 0 });
                                await this.fetchGitHubRepos('peter');
                            }}
                        >
                            Peter Aleksander Bizjak
                        </div>
                        <div
                            className="mentor-name"
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
                                {this.state.repositories.map((repo) => (
                                    <RepositoryComponent
                                        repositoryName={repo.name}
                                        description={repo.description}
                                        fullUrl={repo.url}
                                        primaryLanguageName={repo.language}
                                        primaryLanguageColor={repo.languageColor}
                                    />
                                ))}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }

    private async fetchGitHubRepos(user: string) {
        const token = await this.props.firebaseProvider.fetchGitHubToken(user);
        const userRepos = await githubGraphQLClient(token);
        this.setState({
            repositories: userRepos
        });
    }
}
