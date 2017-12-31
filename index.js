import express from 'express'
import graphqlHTTP from 'express-graphql'

import schema from './src/schema'

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

const port = 8080
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})