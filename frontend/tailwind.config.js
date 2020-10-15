module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
        // defaultLineHeights: true,
        // standardFontWeights: true
    },
    purge: {
        mode: 'all',
        content: ['./src/_includes/**/*.html'],
    },
    theme: {
        extend: {
            colors: {
                primaryColor: '#80495b',
                primaryColorDark: '#5F3644',
                secondaryColor: '#AF7D8E',
                secondaryColorDark: '#8C5668',
                headerDark: '#202020',
                headerLight: '#404040',
                bodyCopyDark: '#606060',
                bodyCopyLight: '#808080',
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
}
