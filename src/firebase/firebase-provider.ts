import * as firebase from 'firebase/app';
import 'firebase/remote-config';
import { firebaseConfig } from '../utils';

export class FirebaseProvider {
    private static instance: FirebaseProvider;

    static getInstance(): FirebaseProvider {
        if (!FirebaseProvider.instance) {
            FirebaseProvider.instance = new FirebaseProvider();
        }
        return FirebaseProvider.instance;
    }

    private readonly app: firebase.app.App;
    private readonly remoteConfig: firebase.remoteConfig.RemoteConfig;
    private readonly fetchTimeout: number = 3600000;

    private constructor() {
        console.log('Initializing Firebase app...');
        this.app = firebase.initializeApp(firebaseConfig);
        this.remoteConfig = this.app.remoteConfig();
        this.remoteConfig.settings = {
            fetchTimeoutMillis: Math.floor(1.5 * this.fetchTimeout),
            minimumFetchIntervalMillis: this.fetchTimeout
        };
    }

    async fetchGitHubToken(user: string): Promise<string> {
        await this.fetchAndActivateRemoteConfig();
        return this.remoteConfig.getString(`github_token_${user}`);
    }

    private async fetchAndActivateRemoteConfig() {
        console.log('Fetching and activating Firebase Remote Config...');
        await this.remoteConfig.fetchAndActivate();
    }
}
