# rest-api-crud

Test task for iLink company  

# Contents
* [Task](#task)
* [Requirements](#requirements)
* [API Documentation](#api-documentation)
  * [Create a new User](#create-a-new-user)
  * [Get All Users](#get-all-users)
  * [Get User by Id](#get-user-by-id)
  * [Get User by Name](#get-user-by-name)
  * [Update User by Id](#update-user-by-id)
  * [Delete User by Id](#delete-user-by-id)
* [Installing Dependencies](#installing-dependencies)
* [Run](#run)
* [Tests](#tests)  

# Task
* Implementation REST API CRUD with Node.js
* Create *users* entity with fields:
  * id and name
  * email and password
  * createdAt and deletedAt
* Move server settings to .env.
* Upload project to GitHub.
  
# Requirements
The server must be able to...  
* Create new users;
* Get list of all users;
* Get user by id;
* Get user by name;
* Edit user;
* Delete user (soft-delete).

# API Documentation

## Create a new User
POST /users  

### Request  

#### Body parameters:  

**name** `Required`  
*string*  
The name of a user. Text and numbers.  

**email** `Required`  
*string*   
The email of a user. Should be valid email.  

**password** `Required`  
*string*   
The password of a user. Numbers and text and at least 6 characters.  
  
### Example of Response
    {
        "message": "User created successfully.",
        "user": {
            "id": 1,
            "name": "user",
            "email": "test@test.com",
            "password": "qwerty",
            "createdAt": "2021-09-27T16:10:04.192Z",
            "deletedAt": null
        }
    }

## Get All Users
GET /users

### Example of Response
    {
        "message": "Users fetched successfully.",
        "users": [
            {
                "id": 1,
                "name": "user",
                "email": "test@test.com",
                "password": "qwerty",
                "createdAt": "2021-09-27T16:50:59.902Z",
                "deletedAt": null
            },
            {
                "id": 2,
                "name": "user1",
                "email": "test2@test.com",
                "password": "12345678",
                "createdAt": "2021-09-27T16:51:10.158Z",
                "deletedAt": null
            }
        ]
    }

## Get User by Id
GET /users/id/{id}

### Request

#### Path parameters:

**id** `Required`  
*number*  
The ID of a user

### Example of Response
    {
        "message": "User fetched successfully.",
        "user": {
            "id": 1,
            "name": "user",
            "email": "test@test.com",
            "password": "qwerty",
            "createdAt": "2021-09-27T16:50:59.902Z",
            "deletedAt": null
        }
    }

## Get User by Name
GET /users/name/{name}

### Request

#### Path parameters:

**name** `Required`  
*string*  
The name of a user

### Example of Response
    {
        "message": "User fetched successfully.",
        "user": {
            "id": 1,
            "name": "user",
            "email": "test@test.com",
            "password": "qwerty",
            "createdAt": "2021-09-27T16:50:59.902Z",
            "deletedAt": null
        }
    }  

## Update User by Id
PUT /users/{id}

### Request

#### Path parameters:

**id** `Required`  
*number*  
The ID of a user

#### Body parameters:

**name** `Required`  
*string*  
The name of a user. Text and numbers.

**email** `Required`  
*string*  
The email of a user. Should be valid email.

**password** `Required`    
*string*   
The password of a user. Numbers and text and at least 6 characters.

### Example of Response
    {
        "message": "User updated successfully.",
        "user": {
            "id": 2,
            "name": "user2",
            "email": "test2@test.com",
            "password": "123456",
            "createdAt": "2021-09-27T16:51:10.158Z",
            "deletedAt": null
        }
    }    

## Delete User By Id
DELETE /users/{id}

### Request

#### Path parameters:

**id** `Required`  
*number*  
The ID of a user

### Example of Response
    {
        "message": "User deleted successfully."
    }  
  
## Installing Dependencies
    npm install  
 
## Run
    npm run-script run  
  
## Tests
The `/test/test.http` file can be used for tests.
