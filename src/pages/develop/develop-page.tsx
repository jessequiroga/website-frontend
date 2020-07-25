import React from 'react';
import './develop-page.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import { FirebaseProvider } from '../../firebase';
import { githubGraphQLClient, RepositoryModel } from '../../github';

interface DevelopPageProps {
    firebaseProvider: FirebaseProvider;
}

interface DevelopPageState {
    repositoriesFor: number;
    repositories: Array<RepositoryModel>;
}

export default class DevelopPage extends React.Component<DevelopPageProps, DevelopPageState> {
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
                        <div className="develop-page-mentor-name">Peter Aleksander Bizjak</div>
                        <div className="develop-page-mentor-name">Tian Jagodic</div>
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <Card className="develop-page-card-container">
                                <CardContent style={{ overflow: 'auto' }}>
                                    <List>
                                        {this.state.repositories.map((repo) => {
                                            return (
                                                <ListItem
                                                    key={repo.name}
                                                    onClick={() => {
                                                        console.log(`Should lead to ${repo.url}`);
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
                                </CardContent>
                            </Card>
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
