module.exports = {
  mode: 'development',
  entry: [
    './index.ts'
  ],
  module: {
    rules: [
      {
        // enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // 'flow'
              ]
            }
          },
        ]
      }
    ]
  }
};
