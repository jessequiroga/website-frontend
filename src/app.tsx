import React from 'react';

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return <div>Hello world!</div>;
    }
}
