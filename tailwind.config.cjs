module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			primary: "Poppins",
		},
		container: {
			padding: {
				DEFAULT: "30px",
				lg: "0",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		extend: {
			colors: {
				primary: "#222222",
				secondary: "#F5E6E0",
			},
			backgroundImage: {
				hero: "url('./img/bg_hero.svg')",
			},
		},
	},
	plugins: [],
};
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
});
