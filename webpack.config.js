module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules  : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
					}, {
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]__[hash:base64:5]'
						}
					}
				]
			}
    ]
  }
}