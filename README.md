
## NestJS-CRUD-API

This project implements a standard CRUD pattern reinforced by access control and automated request filtering.

## Core features

* In-Memory CRUD: Performs Create, Read, Update, and Delete operations using a local mock database (JavaScript Array).

* Data Validation: Uses ValidationPipe and class-validator (DTOs) to enforce strict data types for name, age, and role before processing requests.

* Role Filtering: The GET /users endpoint supports optional query parameters to filter users by their specific roles.

* Exception Handling: Implements built-in NestJS exceptions (like NotFoundException) to return clear HTTP error messages when a user ID does not exist.

* Unique Identification: Automatically generates randomUUID for every new user created to ensure unique indexing.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
