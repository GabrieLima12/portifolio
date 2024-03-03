import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'light-blue' : '#3f21db',
        'dark-blue' : '#2f18b0',
        'middle-blue' : '#201085',
        'deep-blue' : '#10085a',
        'midnight-blue' : '#00002f'
      },
    },
  },
  plugins: [],
};
export default config;
