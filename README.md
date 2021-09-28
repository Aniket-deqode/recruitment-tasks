# Recruitment Task

## Description

Recruitment Task Which Performs CRUD operations on User

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 12.0.0
- Install .[Nest.Js](https://docs.nestjs.com/first-steps) version 8.1.1

# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
 
```
cd <project_name>
 npm i -g @nestjs/cli
 npm install
 touch .env
```


## ENV Sample 
```bash
PORT=3000
MONGO_URL=mongodb+srv:2707//localhost/dbName

```
- Build and run the project
```
npm run start
npm run start:dev (Watch mode)
```
  Navigate to `http://localhost:3000`

# Docker

```bash
# Docker will run on 8080 port
$ docker-compose up --build

```

- API Document endpoints

 swagger UI Endpoint : http://localhost:3000/api 
 postman collection is also present in project directory with name as Recruitment-task.postman_collection.json
