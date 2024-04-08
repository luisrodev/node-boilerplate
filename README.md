# Node Boilerplate

Node ready to use code structure with some lib included.

- CORS
- Express
- Typescript
- Nodemon
- DotEnv

## Getting Started

Install all dependecies with the next command on terminal
```
npm install
```

Setup env variables, copy the content of the file `.env.example` and paste inside a file in the root of the project called `.env`

Execute project on development mode
```
npm run dev
```

## Install new dependencies

Always use the flag `-E` to install the exact version of the library, ex: `npm install -E express`


## Prepare for production

Change property `NODE_ENV` from `.env` file to `production` and setup all the other properties to point to production env vars.

Generate a new build for production 
```
npm run build
```

Run builded code in production mode
```
npm start
```
