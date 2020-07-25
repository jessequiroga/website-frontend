import * as firebase from 'firebase';
import { firebaseConfig } from '../utils';

export class FirebaseProvider {
    private static _instance: FirebaseProvider;
    static instance = (): FirebaseProvider => {
        if (!FirebaseProvider.instance) {
            FirebaseProvider._instance = new FirebaseProvider();
        }
        return FirebaseProvider._instance;
    };

    private readonly app: firebase.app.App;
    private readonly remoteConfig: firebase.remoteConfig.RemoteConfig;
    private readonly fetchTimeout: number = 3600000;

    private constructor() {
        this.app = firebase.initializeApp(firebaseConfig);
        this.remoteConfig = this.app.remoteConfig();
        this.remoteConfig.settings = {
            fetchTimeoutMillis: Math.floor(1.5 * this.fetchTimeout),
            minimumFetchIntervalMillis: this.fetchTimeout
        };
    }

    async fetchAndActivateRemoteConfig() {
        await this.remoteConfig.fetchAndActivate();
    }

    fetchGitHubToken(user: string): string {
        return this.remoteConfig.getString(`github_token_${user}`);
    }
}
