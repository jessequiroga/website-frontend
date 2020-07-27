import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { DevelopPage, LandingPage, MentorsPage, RepresentativePage, WorkshopPage } from './pages';
import { FirebaseProvider } from './firebase';

export default class App extends React.Component<any, any> {
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
