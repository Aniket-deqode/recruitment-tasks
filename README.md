# Recruitment Task

## Description

Recruitment Task For User Management

# Pre-requisites
- Install [Node.Js](https://nodejs.org/en/) version 12.0.0
- Install [Nest.Js](https://docs.nestjs.com/first-steps) version 8.1.1
- Install [MongoDb](https://docs.mongodb.com/) Localy or connect to cloud [MongoDB](https://account.mongodb.com/account/login?n=%2Fv2%2F61409752355aae578bdee77f&nextHash=%23clusters)

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
- Running & Building the project
```
npm run start
npm run start:dev (Watch mode)
```
  Navigate to `http://localhost:3000`

# Docker

```bash
# Docker will run on 8080 port
 cd <project_name>
 docker-compose up --build

```

- API Document endpoints

 - Swagger UI Endpoint : http://localhost:3000/api 
 - Postman collection is also present in project directory with name as Recruitment-task.postman_collection.json
