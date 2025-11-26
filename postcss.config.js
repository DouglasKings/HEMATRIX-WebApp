// PostCSS configuration file
// PostCSS processes your CSS and applies Tailwind classes
export default {
  plugins: {
    // Tailwind CSS plugin - transforms Tailwind directives into actual CSS
    tailwindcss: {},

    // Autoprefixer plugin - automatically adds browser-specific prefixes
    // Example: transforms 'display: flex' to include -webkit-flex for older browsers
    autoprefixer: {},
  },
};
