# Blog Backend API Endpoint
Node.js project made with express.js which serves blogs data

### Endpoints
 - [/blogs](https://blog-backend-api-endpoint.herokuapp.com/blogs) - this endpoints serves all the blogs articles
- [/blogs/:id](https://blog-backend-api-endpoint.herokuapp.com/blogs/2rvqpdbpka3n3fhf) - this endpoint serves a specific blog and takes id as an parameter

 ## Example 
 - [/blogs/2rvqpdbpka3n3fhf](https://blog-backend-api-endpoint.herokuapp.com/blogs/2rvqpdbpka3n3fhf) - this outputs a blog article with an id of 2rvqpdbpka3n3fhf

 ## Files and Folder
 ```
├── app.js
├── data
│   └── blogs.json
├── views
│   └── home.ejs
├── config.env
├── package.json
└── README.md
```

## Pre-Requisite
- [Node.js](https://nodejs.org/en/)
-  [npm](https://www.npmjs.com/) - Node Package Manager

## Run The Project 
> npm install 

This installs all the dependencies to your project
>  npm run start 

This starts a server on http://localhost:3000 and you can now [fetch](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) data from the api 

## Deployment using Heroku
[Live-Demo](https://blog-backend-api-endpoint.herokuapp.com/)