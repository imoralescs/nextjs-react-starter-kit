import { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

class Index extends Component {
    static getInitialProps = async () => {
        const res = await fetch('https://about.savvycard.com/wp-json/wp/v2/posts')
        const posts = await res.json()
    
        return {
            posts
        }
    }

    render() {
        const { posts } = this.props
        console.log(posts)
        return(
            <Layout>
                <div className='content'>
                    <div className='container'>
                        <h1 className='main-header'>SavvyCard News Blog</h1>
                        <ul className='posts'>
                        { posts.map(post => {
                            return(
                                <li className='post' key={post.id}>
                                    <Link
                                        as={`/post/${post.slug}`} 
                                        href={`/post?slug=${post.id}`}>
                                            <a>{post.title.rendered}</a>
                                    </Link>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <style jsx>
                        {`
                            .main-header {
                                font-size: 3.2em;
                            }

                            .post a {
                                color: #333333;
                                text-decoration: none;
                                padding: .4em 0;
                                display: block;
                                font-weight: bold;
                            }

                            .post a:hover {
                                color: #66B4E8;
                                font-weight: bold;
                            }

                            @media (min-width: 42em) {
                                .content {
                                    padding: 2em 3em;
                                }
                            }
                        `}
                    </style>
                </div>
            </Layout>
        )
    }
}

export default Index
/*
getInitialProps argument object

req - HTTP request object (server only)
res - HTTP response object (server only)
query - query string section of URL parsed as an object
pathname - path section of URL
asPath - String of actual path (including the query) shows in the browser
jsonPageRes - Fetch response object (client only)
err - Error object if any error is encountered during the response


Clean url, make used of as on Link

For this we need the help of a extra server for nextjs, this where express come to play
*/