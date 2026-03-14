const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.ts', // Cambiado a .ts si renombraste el archivo
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'umd', // UMD es más compatible con diferentes entornos que commonjs2
		globalObject: 'this',
		clean: true, // Limpia la carpeta build antes de cada compilación
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json',
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom', // Añadido para evitar conflictos de versiones
	},
};
