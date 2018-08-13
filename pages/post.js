import { Component } from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => {
    return (
        <Layout>
            <h1>{props.post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: props.post.content.rendered}}></div>
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