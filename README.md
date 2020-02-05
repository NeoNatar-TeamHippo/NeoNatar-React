# NeoNatar Frontend

NeoNatar is an advertisement management platform where advertisers can create a campaign and after proper validation its been sent to pipul tv to be displayed across our locations selected.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Development](#development) -[Acknowledgement](#acknowledgement)

## Technologies

- [NodeJS](https://nodejs.org/) - Runtime Environment
- [ExpressJs](https://expressjs.com/) - Web Application Framework
- [NPM](https://www.npmjs.com/) - Dependency Manager
- [Firebase](https://firebase.google.com//) - Firebase helps mobile and web app teams succeed
- [Postman](https://www.postman.com/) - Api testing anf documentation

### Trello

Project is currently being built with the Project Management Tool, Trello.
You can find the template at [https://trello.com/b/h1ttxJgm/team-hippo-board](https://trello.com/b/h1ttxJgm/team-hippo-board)

### Firebase and Serverless

The entire application was done with firebase to utilize the power of a serverless architecture provided out of the box. [Project Firebase Url](https://neonatar.firebaseapp.com/)

### Documentation

Documentation was done with Postman, tapping it its new feature of quick documentation alongside testing apis. [Api Documentation](https://www.getpostman.com/collections/6b16b11fdc18e341e593)

## Requirements

- Node.js v8.x or higher
- npm
- A Complete Firebase account set up.

### Supporting Packages

#### Linter(s)

- [ESLint](https://eslint.org/) - Linter Tool to adhere to standards using eslint:recommended and eslint:promise plugin.

## Features

### Users

- User can sign up and sign in.
- User can change profile picture and update profile.
- User can view profile and logout.
- User can create a campaign and view all campaigns created by him.
- User can view, delete or update a single campaign.
- User can create a commercial and view all commercials created by him.
- User can view, delete or update a single campaign.
- User can view all locations or single location.
- User can get notifications from new locations, commercials and campaigns created and can mark as read.
- User can create a saved location list, update, delete, view list.
- User can add or remove locations from the saved list.
- User can create tickets, retrieve all and single tickets created by them.
- User can view all transactions created automatically after a successful campaign is being created.

### Admin

- User(admin) can create a staff member.
- User(admin) can view all staffs created.
- User(admin) can view a single staff created
- User(admin) can activate and deactivate a staff
- User(admin) can approve and disapprove a campaign
- User(admin) can view all campaigns and commercials.
- User(admin) can create, update or delete a location.
- User(admin) can mark a ticket as resolved.
- User(admin) can mark a transaction as invalid

## API Endpoints

For all endpoints documentation please visit [Api Documentation](https://www.getpostman.com/collections/6b16b11fdc18e341e593).

## Getting Started

### Installation

- git clone
  [NeoNatar-Backend-Service](https://github.com/NeoNatar-TeamHippo/NeoNatar-Backend-Service.git)
- Run - `cd functions` to navigate to the functions folder
- Run - `npm install` to install packages
- Run - `npm run serve` to start the project locally.
- Run npm start to start the server for production
- Navigate to [localhost:8080](http://localhost:8080/) in browser to access the
  application

**NOTE:**

- Create a `.env` file configuration following the `.sample.env`.
- An internet connection is needed

### Testing

#### Prerequisites

- [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

- After installing as shown above
- Navigate to [localhost:5000](http://localhost:5000/) in
  [Postman](https://getpostman.com/) to access the application

### Development

You can use `control c` to stop the server.

## Acknowledgement

- [Busboy](https://www.busboy.com/) - Handle file upload
- [Cloudinary](https://www.cloudinary.com/) - Image and video storage
- [Http-Status-Code](https://www.npmjs.com/package/http-status-codes) - Utilize appriopriate http codes
- [Nodemailer](https://www.npmjs.com/package/Nodemailers) - Email messaging service.
