import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: isGitHubPages ? 'https://mdemeczk.github.io' : 'http://new.finnclass.hu',
  base: isGitHubPages ? '/finnclass-web' : '/',
});
