import { GitHub } from './types';


declare const GIT_COMMIT_HASH: string;

declare const GITHUB_USERNAME: string;

declare const GITHUB_REPOSITORY_NAME: string;


const github: GitHub = {
  username: GITHUB_USERNAME,
  repository: GITHUB_REPOSITORY_NAME,
  commitHash: GIT_COMMIT_HASH,
  link: `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPOSITORY_NAME}`
};


export default github;

