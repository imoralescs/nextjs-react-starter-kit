import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => {
    return (
        <Layout>
            <div className='content'>
                <div className='container'>
                    <h1>{props.post.title.rendered}</h1>
                    <div className='post-content' dangerouslySetInnerHTML={{__html: props.post.content.rendered}}></div>
                </div>
            </div>
        </Layout>
    )
    
}

Post.getInitialProps = async ({ query }) => {
    const res = await fetch(`https://about.savvycard.com/wp-json/wp/v2/posts/${query.slug}`)
    const post = await res.json()
    
    return {
        post
    }
}

export default Post