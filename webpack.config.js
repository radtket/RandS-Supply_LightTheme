const path = require("path");

module.exports = {
	mode: "production",
	entry: {
		theme: "./src/js/theme.js",
		map: "./src/js/map.js"
	},
	output: {
		filename: "[name].min.js"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [path.resolve(__dirname, "./assets/js")],
				loader: "babel-loader"
			}
		]
	}
};
