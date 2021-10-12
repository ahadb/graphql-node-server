## GraphQL Server

Basic GraphQL Node server that uses Prisma and SQLite to persist data of incoming GraphQL mutations. You build a Hacker News
clone which is fairly easy to model but gives you all the fundamentals to easily build upon.

### Clone & Start

* git clone git@github.com:ahadb/graphql-node-server.git (or https)
* npm install (you'll need Node 12+)
* node `src/index.js` (you can add to npm scripts later)
* point to: `http://localhost:4000/`

### Start with Mutations

You'll need to create a user before posting:

```javascript
mutation {
  signup(name: "You", email: "you@prisma.io", password: "youlovegraphql") {
    token
    user {
      id
    }
  }
}
```

Then set your authorization header with the response above:

```javascript
{
  "Authorization": "YOUR TOKEN"
}
```

Start creating some links:

```javascript
mutation {
  post(url: "www.someurl.com", description: "Some url description") {
    id
  }
}
```

All together now! You can experiment with more queries / mutations, or start writing your own.

```
mutation {
  login(email: "alice@prisma.io", password: "graphql") {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}
```

### Features

Easily build upon these:

* Query
* Mutation
* SQLite DB via Prisma
* Authentication
* Realtime
* Filtering, Pagination & Sorting

### Credits

 The inspiration for this quick, fun project was the need to revise GraphQL with all the fundamentals needed to build real world applications. Thanks to [How to GraphQL](https://www.howtographql.com/), these tutorials are better than most books
 or blog posts you'll read on the subject.