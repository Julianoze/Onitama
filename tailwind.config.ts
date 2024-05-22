import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'card': '#FFFCF9',
        'cel': '#E8E9E8',
        'black': '#233640',
        'blue': '#0A84BF',
        'red': '#C0091E',
        'green': '#BFB90A',
      },
      borderColor: {
        'cel': '#CCC'
      },
      textColor: {
        'black': '#233640'
      }
    },
  },
  plugins: [],
};
export default config;
