import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <link rel="shortcut icon" href="/static/favicon.ico"/>
                    <link rel='stylesheet' href='/static/styles.css' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}