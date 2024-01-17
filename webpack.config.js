const path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.js', // Ruta de tu punto de entrada
	output: {
		path: path.resolve(__dirname, 'dist'), // Carpeta de salida
		filename: 'bundle.js', // Nombre del archivo de salida
		libraryTarget: 'umd', // O el formato que desees
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],
	},
};
