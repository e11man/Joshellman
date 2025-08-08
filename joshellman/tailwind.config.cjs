/** tailwind.config.cjs */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#FF4A4A",
        muted: "#F5F5F5",
        border: "#E6E6E6"
      },
      borderRadius: { none: "0" }
    }
  },
  corePlugins: {
    gradientColorStops: false,
    boxShadow: true
  },
  plugins: []
}