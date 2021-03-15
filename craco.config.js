const webpack = require('webpack');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

commitHash = require('child_process').execSync('git rev-parse --short HEAD').toString();

module.exports = {
  webpack: {
    plugins: [
      new AntdDayjsWebpackPlugin(),
      new webpack.DefinePlugin({
        GITHUB_USERNAME: JSON.stringify('vanhanenjjv'),
        GITHUB_REPOSITORY_NAME: JSON.stringify('Stonk'),
        GIT_COMMIT_HASH: JSON.stringify(commitHash)
      })
    ]
  }
};
