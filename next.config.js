/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	env: {
		fcdb_uri: 'mongodb+srv://fcdb_sa:fcdb_sa@fcdb-cluster.6xlhjgz.mongodb.net/?retryWrites=true&w=majority',
		fcdb_user: 'fcdb_sa',
		fcdb_pass: 'fcdb_sa'
	}
}

module.exports = nextConfig;
