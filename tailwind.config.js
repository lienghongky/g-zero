const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.vue',
                  './public/index.html'],
      },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      },
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            display: ['Gilroy', 'sans-serif'],
            body: ['Graphik', 'sans-serif'],
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '1': '1px',
            '2': '2px',
            '4': '4px',
        },
        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 0px 2px 0 rgba(0, 0, 0, .06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 -2px 4px -1px rgba(0, 0, 0, .06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 -4px 6px -2px rgba(0, 0, 0, .05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 -4px 10px -5px rgba(0, 0, 0, .04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            'none': 'none',
          },
        inset: {
            '0'  :'0px',
            '-2' : '-8px',
            '2'  : '8px',
            '4'  : '16px',
                },
        extend: {
            colors: {
                cyan: '#9cdbff',
                primary:{
                    '100':'#0069ff',
                    '200':'#0f00ff'
                }
            },
            spacing: {
                '30vh':'30vh',
                '50vh':'50vh',
                '60vh':'60vh',
                '70vh':'70vh',
                '80vh':'80vh',
                '90vh':'90vh',
                '80': '20rem',
                '96': '24rem',
                '128': '32rem',
                '200': '40rem',
                'haft': '50%',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                'full' : '100%',
            }
        }
    },
    plugins: [
        plugin(function({ addBase, config }) {
            addBase({
                'h1': { fontSize: config('theme.fontSize.3xl') },
                'h2': { fontSize: config('theme.fontSize.xl') },
                'h3': { fontSize: config('theme.fontSize.lg') },
                'p': { fontSize: config('theme.fontSize.sm') },
            })
        })
    ]
}
