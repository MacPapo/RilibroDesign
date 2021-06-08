module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "homepage-fixed": "url('assets/images/WP01.jpg')",
        "homepage-phone": "url('assets/images/WP00.jpg')",
        "login-fixed": "url('assets/images/WP04.jpg')",
        "register-fixed": "url('assets/images/WP05.jpg')",
        "sell-fixed": "url('assets/images/WP03.jpg')",
        "team-fixed": "url('assets/images/WPTEAM.jpg')",
        "team-phone": "url('assets/images/WPTEAM2.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
