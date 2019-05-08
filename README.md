# mdb-wrapper

mdb-wrapper encapsulate MDB Api to show info about movies 
[Movie DB Official Doc](https://developers.themoviedb.org/3)

1. [Endpoints](#Endpoints)
2. [Arquiteture](#Arquiteture)
3. [Folder structure](#FolderStructure)
4. [Run locally](#RunLocally)
5. [Testing](#Testing)
6. [Libraries](#Libraries)

## Endpoints

Host: http://ec2-3-84-192-156.compute-1.amazonaws.com/
Query Params: 
- page - Number of the page that you want to see, default is 1
- lang - The language to retrieve, the default is en-US
- query - Value used to filter a list of movies

Request Param: 
- movieId - Id of a movie to be retrieved

- GET /movies/upcoming?language=:language&page=:page - Upcoming movies list
- GET /movies/search?query=:query&language=:language&page=:page - List of movies according with query param
- GET /movies/:movieId - Upcoming movies list - Get a specific movie

## Arquiteture

The backend was developed in TS. Typescript is a javascript superset that adds power to JS.
With TS we can apply some concepts of OOP, SOLID more easily and in an elegant way.

The backend provides REST endpoints to webapp, all of them are triggered via GET.
There is a cache layer, since a request was made on the same day with same parameters, the cache value is returned.
The query result from MDB api is persisted in Redis. Redis is a bank in memory, key value where we can persist data, in our case, we have a TTL of 24 hours.

The frontend was developed with a framework called Vuejs. A component was created to render the lists, once the structure of both endpoints (search and upcoming) is the same. For stylization, a css Framework was used, Bootstrap.

The tests were done with mocha framework.

Main Stack:
- Nodejs / Typescript
- Redis
- Vuejs + Bootstrap

## Folder structure

```
mdb-wrapper
│   README.md
│   configuration files (build, etc)
│
└─── bin (Deployed project)
│
│
└─── src (Source code)
│   │
│   │
│   └─── lib (Every code developed)
│   │
│   │
│   └─── tests (Tests)
│
│
└─── webapp (Vuejs Webapp)
```


## Run locally

Just start the containers with:

```
docker-compose up -d
```

Website is on root: localhost:3000
To call the endpoints: localhost:3000/ + some of the #Endpoints

## Testing

```
docker-compose start redis
yarn test
```

### Libraries

Some of open source projects :

* [NodeJS] - Node.js is an open-source, cross-platform JavaScript run-time 
* [Typescript] -  TypeScript is a superset of JavaScript
* [VueJS] - Framework JS to develop Webapps
* [Express] - fast node.js network app framework
* [Redis] - Redis is an in-memory data structure 
* [Mocha] - JS Test framework
