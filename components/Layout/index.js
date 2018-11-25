import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import Header from './Header'
import Footer from './Footer'

Router.onRouteChangeStart = (url) => {
    // eslint-disable-next-line no-console
    console.log(`Loading: ${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title = 'Conf Schedule' }) => (
    <div id='root'>
        <Head>
            <title>{title}</title>
            <link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/>
        </Head>
        <Header />
        { children }
        <Footer />
    </div>
)