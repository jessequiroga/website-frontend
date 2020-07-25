import React from 'react';
import { LandingPage, MentorsPage, WorkshopPage } from './pages';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import DevelopPage from './pages/develop/develop-page';
import { FirebaseProvider } from './firebase';

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    private readonly firebaseProvider = FirebaseProvider.getInstance();

    render() {
        return (
            <MuiThemeProvider theme={this.generateTheme()}>
                <div>
                    <LandingPage />
                    <WorkshopPage />
                    <MentorsPage />
                    <DevelopPage firebaseProvider={this.firebaseProvider} />
                </div>
            </MuiThemeProvider>
        );
    }

    private generateTheme = () =>
        createMuiTheme({
            palette: {
                primary: {
                    main: '#ffffff'
                },
                secondary: {
                    main: '#00a6fb'
                }
            }
        });
}
