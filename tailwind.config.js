/** @type {import('tailwindcss').Config} */
// This file configures Tailwind CSS for your project
// It tells Tailwind which files to scan for class names
export default {
  // Content array: Tailwind scans these files to generate only the CSS classes you actually use
  content: [
    "./index.html", // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // All JavaScript/TypeScript/React files in src folder
  ],

  // Theme customization (currently using defaults)
  theme: {
    extend: {
      // You can add custom colors, fonts, spacing, etc. here
      // Example: colors: { 'hematrix-blue': '#4F46E5' }
    },
  },

  // Plugins array: Add Tailwind plugins here if needed
  plugins: [],
};
