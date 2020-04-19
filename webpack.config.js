module.exports = {
    entry: './main.js', // Arquivo principal
    output: { // Qual arquivo deve conter o código convertido
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [ // Informa como o webpack deve se comportar na importação de novos arquivos .js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};