
let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace('/.*?\//', '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	env: {
		fcdb_uri: 'mongodb+srv://fcdb_sa:fcdb_sa@fcdb-cluster.6xlhjgz.mongodb.net/?retryWrites=true&w=majority',
		fcdb_user: 'fcdb_sa',
		fcdb_pass: 'fcdb_sa'
	},
	assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig;
