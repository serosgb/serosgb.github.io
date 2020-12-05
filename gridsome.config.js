// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Portafolio',
    siteUrl: 'https://serosgb.github.io',
    plugins: [
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Documentation', // Required
                baseDir: './docs', // Where .md files are located
                pathPrefix: '/docs', // Add route prefix. Optional
                template: './src/templates/Documentation.vue', // Optional
            },
        },
    ],
};
