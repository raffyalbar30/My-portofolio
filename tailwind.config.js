/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'handphone' : '375px',
    //   'iphone' : '390px',
    //   'iphone-xr' : '414px',
    //   'iphone-14' : '430px',
    //   'tablet': '640px',
    //   'ipad'  : '768px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },

    extend: {
      animation: {
          'ping-slow' : 'ping 30s '
      },
      fontFamily: {
        sans: ['Space Mono', 'sans-serif'],
      },
      backgroundImage: {
        "boxes-light":
          "linear-gradient(rgb(199 210 254 / 0.4) 1px, transparent 1px), linear-gradient(to right, rgb(199 210 254 / 0.4) 1px, rgb(224 231 255 / 0.4) 1px)",
        "boxes-dark":
          "linear-gradient(rgb(63 63 70 / 0.4) 1px, transparent 1px), linear-gradient(to right, rgb(63 63 70 / 0.4) 1px, rgb(39 39 42 / 0.4) 1px)",
        "radial-fade":
          "radial-gradient(circle, rgba(33,33,33,0.24) 20%, rgba(33,33,33,0.5) 90%)",
        "main-gradient":
          "linear-gradient(80deg, #fbbf24, #fb7185, #818cf8, #c084fc)",
      },
    },
  },
  plugins: [],
}

