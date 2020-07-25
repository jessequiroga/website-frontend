import React from 'react';
import { LandingPage, MentorsPage, WorkshopPage } from './pages';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    render() {
        return (
            <MuiThemeProvider theme={this.generateTheme()}>
                <div>
                    <LandingPage />
                    <WorkshopPage />
                    <MentorsPage />
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
