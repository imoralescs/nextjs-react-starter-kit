const express = require('express')
const next = require('next')
const config = require('./config')

const { dev } = config
const app = next({ dev })
const handle = app.getRequestHandler() 

app 
    .prepare()
    .then(() => {
        const server = express()

        // Custom handlers go here
        server.get('/post/:slug', (req, res) => {
            const { slug } = req.params
            app.render(req, res, '/post', { ...req.query, slug })
        })

        server.get('*', (req, res) => handle(req, res))

        server.listen(3000, err => {
            if(err) throw err
            // eslint-disable-next-line no-console
            console.log(`Ready on http://localhost:3000`)
        })
    })
    .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err.stack)
    })