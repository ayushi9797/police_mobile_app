# Police Club

The Police Club mobile app is a comprehensive platform that delivers real-time information and news related to law enforcement agencies and police-related events. This app caters to a diverse audience, including journalists, law enforcement professionals, and the general public interested in staying informed about police-related matters.

### Deployed Link

`https://police-app.onrender.com/`

## System-Design -> HLD

![image](https://github.com/ayushi9797/police_mobile_app/assets/112810259/76fea6f6-6f08-42e1-8d40-a236ecbf8c9a)

## LLD -> Typescript

- visit this folder -> cd police_lld
- police.ts

## To run this application in typescript

- `npm install -g typescript`

- `npx ts-node police.ts`

# Tech Stack Used: -

## Backend : -

| Node.js                                                                                                                         | Express.js                                                                                                                      | MongoDB                                                                                                                        |     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --- |
| <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/229164589-4e724000-542d-4deb-9e11-cca7739c2b01.png"> | <img width="75px" src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"> |

# REQUIREMENTS

- User can register with name email and password
- User can login with name email and password
- User can able to get the otp
- User can able to logout

## Getting Started

### Prerequisites

- Node.js - Install Node.js from the official website: [https://nodejs.org](https://nodejs.org)

### Installation

1. Clone the repository:

   git clone `https://github.com/your-username/police-club-app.git`

2. Install the dependencies:
   npm install `express nodemon mongoose jsonwebtoken bcrypt cors nodemailer `

#### Creating Server

- It is not an inbuilt module of node, so we have to install it using `npm`
- Create a node project by `npm init -y` .
- Create a file named `index.js` .
- Initialise a node project and install `nodemon`
- Install `express`
- Install some more dependencies `mongoose,dotenv,express,node-mailer,json-webtoken,bcrypt`by npm install.

* To run Mysql server with Express Node

- `nodemon server`

# User's Schema

```
{
    "name":"chiku",
    "email":"chiku123@gmail.com",
    "password":"1234"
}

```

## Register route

` http://localhost:8080/user/register`

# Register Schema

```
{
    "name":"ayushi soni",
    "email":"soniayushi517@gmail.com",
    "password":"1234"
}

```

## Response status

```
{
    "success": "user registered successfully",
    "newUser": {
        "name": "ayushi soni",
        "email": "soniayushi517@gmail.com",
        "password": "$2b$05$frlTTWFk9V.M6Llek9CsEOWr0NjhANtRNlBYk/l9loxF.7WWFABu.",
        "_id": "64995c98336ee3e5a6e19475",
        "__v": 0
    }
}
```

## Login Routes

`http://localhost:8080/user/login`

## Login Response Status

```
{
    "message": "Login successfully",
    "Normal_Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDk5NWM5ODMzNmVlM2U1YTZlMTk0NzUiLCJpYXQiOjE2ODc3NzU3MTUsImV4cCI6MTY4ODM4MDUxNX0.gffkN2mSqTeSsbww_RTRKDIE86Lr40QwWVddGPRIFF4",
    "Refresh_Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDk5NWM5ODMzNmVlM2U1YTZlMTk0NzUiLCJpYXQiOjE2ODc3NzU3MTUsImV4cCI6MTY4ODM4MDUxNX0.gffkN2mSqTeSsbww_RTRKDIE86Lr40QwWVddGPRIFF4",
    "name": "ayushi soni",
    "email": "soniayushi517@gmail.com",
    "userid": "64995c98336ee3e5a6e19475",
    "otp": 9230
}
```

## Logout Route

- Get Request Logout

  `http://localhost:8080/logout`

## Logout Route Response

`Log Out Successfully`

# All routes

| METHOD | ENDPOINT       | DESCRIPTION                                             | STATUS CODE |
| ------ | -------------- | ------------------------------------------------------- | ----------- |
| Post   | /user/register | User can able to register                               | 200         |
|        |                |
| Post   | /user/login    | This route should allow user to login                   | 200         |
| Get    | /logout        | This endpoint should allow user to logout their account | 200         |
| Post   | /vehicle/add   | This route should allow user to add vehicle             | 201         |
| Get    | /vehicle/get   | This route should allow user to get vehicle             | 200         |
| Get by id | /vehicle/get/:id | This route should allow user to get unique vehicle  | 200         |
| Patch    | /vehicle/update/:id  | This route should allow user to update vehicle     | 200         |
| Delete    | /vehicle/delete/:id   | This route should allow user to delete vehicle             | 200         |
|     |    |              |         |
| post    | /person/add   | This route should allow user to add person             | 200         |
| Get    | /person/get   | This route should allow user to get person             | 200         |
| Get by id  | /person/get/:id   | This route should allow user to get unique person             | 200         |
| Patch    | /person/update/:id   | This route should allow user to update vehicle             | 200         |
| Delete    | /person/delete/"id   | This route should allow user to delete vehicle             | 200         |

## Vehicle Schema

```
({
    vehicle_type: String,
    vehicle_date: Date,
    vehicle_time: Date,
    vehicle_brand: String,
    vehicle_color: String,
    vehicle_location: String,
    vehicle_image: String

})

```

## Vehicle Routes API

## Post Route

`http://localhost:8080/vehicle/add`

## Post Route Model

```
{
    "vehicle_type": "four-wheelers",
    "vehicle_date": "03-12-2000",
    "vehicle_time": "05-16-2004",
    "vehicle_brand": "toyoto",
    "vehicle_color": "pink",
    "vehicle_location": "shimla",
    "vehicle_image": "img.png"
}

```

## Response status of adding a vehicle

```
{
    "message": ":Thanks for adding new vehicle please visit again   🚌",
    "data": {
        "vehicle_type": "four-wheelers",
        "vehicle_date": "2000-03-11T18:30:00.000Z",
        "vehicle_time": "2004-05-15T18:30:00.000Z",
        "vehicle_brand": "toyoto",
        "vehicle_color": "pink",
        "vehicle_location": "shimla",
        "vehicle_image": "img.png",
        "_id": "649d732ef07e6e684a0884ac",
        "__v": 0
    }
}
```

## Get Route API

`http://localhost:8080/vehicle/get`

## response status of getting vehicle

```
{
    "message": ":getting all your vehicles details 🚎  ",
    "data": [
        {
            "_id": "649d62a6f305ad93dafb2466",
            "vehicle_type": "land",
            "vehicle_date": "2000-03-11T18:30:00.000Z",
            "vehicle_time": "2004-05-15T18:30:00.000Z",
            "vehicle_brand": "toyoto",
            "vehicle_color": "red",
            "vehicle_location": "goa",
            "vehicle_image": "img.png",
            "__v": 0
        },


        {
            "_id": "649d732ef07e6e684a0884ac",
            "vehicle_type": "four-wheelers",
            "vehicle_date": "2000-03-11T18:30:00.000Z",
            "vehicle_time": "2004-05-15T18:30:00.000Z",
            "vehicle_brand": "toyoto",
            "vehicle_color": "pink",
            "vehicle_location": "shimla",
            "vehicle_image": "img.png",
            "__v": 0
        }
    ]
}

```

## GET the vehicle by unique id

`http://localhost:8080/vehicle/get/649d62a6f305ad93dafb2466`

## Response status of unique vehicle

```
{
    "message": ":getting all your own  vehicles details 🚎  ",
    "data": {
        "_id": "649d6551b9f9bf131d3f3a9b",
        "vehicle_type": "four-wheelers",
        "vehicle_date": "2000-03-11T18:30:00.000Z",
        "vehicle_time": "2004-05-15T18:30:00.000Z",
        "vehicle_brand": "toyoto",
        "vehicle_color": "pink",
        "vehicle_location": "shimla",
        "vehicle_image": "img.png",
        "__v": 0
    }
}

```

## Patch request for updating vehicle

## API

`http://localhost:8080/vehicle/update/649d6551b9f9bf131d3f3a9b`

## Delete vehicle API

`http://localhost:8080/vehicle/delete/649d6551b9f9bf131d3f3a9b`

# Person's Route

## Adding a person

### Post API

`http://localhost:8080/person/add`

## person's Schema

```
{
     "person_name": "Ayushi",
    "person_aadharNumber": "601133954397",
    "person_date":"09-12-2005",
    "person_time": "08-11-2004",
    "police_station":"shimla"

}

```

## Response status

```
{
    "message": ":Thanks for adding new Person's details  please visit again   🚌",
    "data": {
        "person_name": "Ayushi",
        "person_aadharNumber": "601133954397",
        "person_date": "2005-09-11T18:30:00.000Z",
        "person_time": "2004-08-10T18:30:00.000Z",
        "_id": "649e623e0a426144a63d3da6",
        "__v": 0
    }
}

```

## Get API for getting all Person's details

`http://localhost:8080/person/get`

# Person's schema

```
{
    "message": ":getting all your Person's  details 🚎  ",
    "data": [
        {
            "_id": "649d81839bb3e530efcfa493",
            "person_name": "Ayushi",
            "person_aadharNumber": "601133954397",
            "person_date": "2005-09-11T18:30:00.000Z",
            "person_time": "2004-08-10T18:30:00.000Z",
            "__v": 0
        },
        {
            "_id": "649e623e0a426144a63d3da6",
            "person_name": "Ayushi",
            "person_aadharNumber": "601133954397",
            "person_date": "2005-09-11T18:30:00.000Z",
            "person_time": "2004-08-10T18:30:00.000Z",
            "__v": 0
        }
    ]
}
```
