import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: '#161C24',
        primary: '#212B36',
        componentGreen: '#33FF00'
      },
      boxShadow: {
        'custom': '0px 6px 10px 0px rgba(130, 130, 130, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
