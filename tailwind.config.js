// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./public/*.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'loop-scroll': 'loop-scroll 50s linear infinite',
//       },
//       keyframes: {
//         'loop-scroll': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-100%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"], // Add any additional paths if needed
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}