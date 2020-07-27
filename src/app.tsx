import React from 'react';
import { LandingPage, MentorsPage, WorkshopPage } from './pages';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import DevelopPage from './pages/develop/develop.page';
import { FirebaseProvider } from './firebase';
import { RepresentativePage } from './pages/representative/representative.page';

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
                    <RepresentativePage />
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
