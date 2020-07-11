import React from 'react';
import LandingPage from './pages/landing-page';

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <LandingPage />
            </div>
        );
    }
}
