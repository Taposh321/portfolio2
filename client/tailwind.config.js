export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Adjust according to your file types
  ],
  theme: {
    extend: {
      keyframes:{
        flicker:{
          '0%':{
          background:"linear-gradient(to left, #000319 10%,rgba(246, 244, 244, 0)),  linear-gradient(to bottom, #000319 10% ,rgba(246, 244, 244, 0) 40% ),  linear-gradient(to top, #000319 1% ,rgba(246, 244, 244, 0) ), conic-gradient(from 92deg at var(--t) var(--t),#6d090900 25%,#3f71c7  0) 0 0/var(--s) var(--s)  ,rgb(9, 21, 55)"
        },
        '50%':{
          background:"linear-gradient(to left, #000319 100%,rgba(246, 244, 244, 0)),  linear-gradient(to bottom, #000319 10% ,rgba(246, 244, 244, 0) 40% ), linear-gradient(to top, #000319 1% ,rgba(246, 244, 244, 0) ), conic-gradient(from 92deg at var(--t) var(--t),#6d090900 25%,#3f71c7  0) 0 0/var(--s) var(--s)  ,rgb(9, 21, 55)"
        },
        '53%':{
          background:"linear-gradient(to left, #000319 10%,rgba(246, 244, 244, 0)),  linear-gradient(to bottom, #000319 10% ,rgba(246, 244, 244, 0) 40% ), linear-gradient(to top, #000319 1% ,rgba(246, 244, 244, 0) ), conic-gradient(from 92deg at var(--t) var(--t),#6d090900 25%,#3f71c7  0)0 0/var(--s) var(--s)  ,rgb(9, 21, 55)"
        },
        '70%':{
          background:"linear-gradient(to left, #000319 100%,rgba(246, 244, 244, 0)),  linear-gradient(to bottom, #000319 10% ,rgba(246, 244, 244, 0) 40% ), linear-gradient(to top, #000319 1% ,rgba(246, 244, 244, 0) ), conic-gradient(from 92deg at var(--t) var(--t),#6d090900 25%,#3f71c7  0) 0 0/var(--s) var(--s)  ,rgb(9, 21, 55)"
        },
        '100%':{
          background:"linear-gradient(to left, #000319 10%,rgba(246, 244, 244, 0)),   linear-gradient(to bottom, #000319 10% ,rgba(246, 244, 244, 0) 40% ),  linear-gradient(to top, #000319 1% ,rgba(246, 244, 244, 0) ), conic-gradient(from 92deg at var(--t) var(--t),#6d090900 25%,#3f71c7  0) 0 0/var(--s) var(--s)  ,rgb(9, 21, 55)"
        }
        }

      },
      animation:{
        flicker:'flicker 1s ease-in-out'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-paused': {
          'animation-play-state': 'paused',
        },
        '.animation-running': {
          'animation-play-state': 'running',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
