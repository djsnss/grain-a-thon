import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], 
        mulish: ['Mulish', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'], 
      },
      screens:{
        'sm': {'max': '400px'},
        'md': {'min': '401px','max': '750px'},
        'lg': {'min': '751px','max': '1100px'},
      },
    },
  },
  plugins: [],
};
export default config;
