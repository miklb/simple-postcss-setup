module.exports = (ctx) => ({
    map: ctx.options.map,
    plugins: {
        'postcss-import': { path: 'css' },
        'postcss-preset-env': {},
        cssnano: { preset: 'default' },
    }
})