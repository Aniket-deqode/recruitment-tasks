# User Persistence Task

## Description

A user persistence management system that exposes an api for performing different operations on user data.

## Prerequisite

- local mongo db instance url or deployment mongo instance url.
- Node JS

## Installation

```bash
$ cd <project-directory>
$ cp .sample.env .env
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

```

# Docker

```bash
# Docker will run on 8080 port
$ docker-compose up --build

```

## Swagger and Postman

- Recruitment-task.postman_collection.json present in project directory can be imported in postman and used to call exposed APIs.
- Swagger UI can be access on this route: http://localhost:3000/api.
- Swagger documentation includes all the required details to call the exposed APIs including examples and sample responses.
