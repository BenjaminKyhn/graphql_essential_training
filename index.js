import express from 'express';
import schema from "./schema";
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { friend: () => {
    return {
        "id": 354654,
        "firstName": "Benjamin",
        "lastName": "Kyhn",
        "gender": "Male",
        "email": [
            { email: "meme@me.dk" },
            { email: "me@me.dk" }
        ]
    }
    }};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));