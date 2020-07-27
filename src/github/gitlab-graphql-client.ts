import { graphql } from '@octokit/graphql';

export interface RepositoryModel {
    name: string;
    description: string;
    url: string;
    language: string;
    languageColor: string;
}

export async function githubGraphQLClient(token: string): Promise<Array<RepositoryModel>> {
    const query: any = await graphql(
        '{viewer{repositories(first:5){nodes {nameWithOwner description url primaryLanguage{color name}}}}}',
        {
            headers: {
                authorization: `token ${token}`
            }
        }
    );
    return query['viewer']['repositories']['nodes'].map((repo: any) => ({
        name: repo['nameWithOwner'],
        description: repo['description'],
        url: repo['url'],
        language: repo['primaryLanguage']['name'],
        languageColor: repo['primaryLanguage']['color']
    }));
}
