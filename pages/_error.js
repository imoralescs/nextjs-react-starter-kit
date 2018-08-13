import { Component } from 'react'
import Layout from '../components/Layout'

export default class Error extends Component {
    // getInitialProps
    // Preload the component with properties before its rendered
    static getInitialProps({ res, err }) {
        const statusCode = res
            ? res.statusCode
            : err 
                ? err.statusCode
                : null
        
        return {
            statusCode,
            err: err 
                ? err.message
                : ''
        }
    }

    render() {
        return(
            <Layout>
                <p>{this.props.statusCode} - Oh no - it broke!</p>
            </Layout>
        )
    }
}