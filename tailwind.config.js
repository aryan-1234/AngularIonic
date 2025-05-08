/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts,scss}",
      "./MajdooriCount/src/**/*.{html,ts,scss}",
      "./MajdooriCount-e2e/src/**/*.{html,ts,scss}",
      "./libs/**/*.{html,ts,scss}"
    ],
    theme: {
      extend: {},
    },
    corePlugins: {
      preflight: false, // For better Ionic compatibility
    },
    plugins: [],
  }