import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = ({ posts }) => (
    <Layout>
        <h1>Welcome to Next.js</h1>
        { posts.map(post => <span>{post.id}</span>)}
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch('https://about.savvycard.com/wp-json/wp/v2/posts')
    const posts = await res.json()

    return {
        posts
    }
}

export default Index