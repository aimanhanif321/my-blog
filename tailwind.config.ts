import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelGreen: '#A8D5BA',
        softBlue: '#B3DFFA',
        deepGreen: '#4CAF50',
        brightBlue: '#2196F3',
        lightYellow: '#FFEB3B',
        darkGray: '#333333',
        softBlack: '#212121',
        lightGray: '#757575',
        vibrantOrange: '#FF5722',
      },
    },
  },
  plugins: [],
} satisfies Config;
