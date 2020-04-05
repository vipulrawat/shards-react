const path = require('path');

module.exports = {
    stories: ['../components/**/*.stories.tsx'],
    addons: [
        {
          name: '@storybook/preset-typescript',
          options: {
            tsLoaderOptions: {
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
            forkTsCheckerWebpackPluginOptions: {
              colors: false, // disables built-in colors in logger messages
            },
            include: [path.resolve(__dirname, '../components')],
            transpileManager: true,
          },
        },
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-notes/register',
      ]
};