# Sora Cine

## Project Live demo

[https://sora-cine.vercel.app](https://sora-cine.vercel.app/)

## Built with MERN Stack

- <b>MongoDB</b>: A document-based database or NoSQL, to be precise MSQL.
- <b>ExpressJS</b>: A web app framework for Node.js
- <b>React</b>: A Javascript front-end library for building User Interface (UI).
- <b>Node.js</b>: Javascript run-tume environment that executes Javascript code outside of a browser (such as a server).

- and <b>Mongoose</b>: Simple, schemabased solution to model application data.

## Prerequisites

To Run this project in your system you need to install:

- [Node.js](https://nodejs.org/en/download/)
- NPM (it comes with node.js)
- [MongoDB](https://www.mongodb.com/)
  or Just do the Setup.

### Setup

Clone or download this repository

1. `cd https://github.com/matthieuGravy/sora-cine`
2. `npm install` To install dependencies inside the package.JSON

### To Run

To run node server

To run react frontend

## Front

### install pnpm

npm install -g pnpm

### install dependencies

pnpm install

### run the vite server

pnm run dev

## BACK

### .env

- inside sora-cine/server-sora
- create your .env

## API routes

### CRUD

#### ANIME (by genre, all)
- /series : GET request, to get All anime in the database.
- /series/genre (genre = mystery, crime, fantasy, act_adv, comedy) : GET request, to get anime by genre in the database.

#### CONTACT
- /contact : GET request : to get all contact post in the database for the admin panel.
- /contact : POST request, to create a new contact field object in the de database before returning in the admin panel.

#### LOGIN
- /login : GET request, to get user in the database. 
- /login : POST request, to get the user from the users DB and post in the logins DB to assign a token.

#### USER
- /user : GET request, to get user in the database.
- /user/:id : GET request, to get user by user in the database. 
- /user : POST request, to create a new user.
- /user/:id : PUT request, to modify the users by id.
- /user/:id : DELETE request, to delete a user and send him to DELETED USER.

#### DELETED USER
- /deletedUsers : POST request, to create a list of deleted users.

## Technology used:

- [Tailwinds CSS](https://tailwindcss.com/docs/installation "A utility-first CSS framework")
- [NodeJS](https://nodejs.org/en/ " JavaScript runtime built on Chrome's V8 JavaScript engine") &
  [Express](https://expressjs.com/ " Express is a minimal and flexible Node.js web application framework")
- [Mongodb](https://www.mongodb.com/ "Database")
- [Mongoose](https://mongoosejs.com/ "MongoDB framework object modeling for node.js")
- [React ](https://reactjs.org/docs/getting-started.html)

# ▶ How to install?

🚧NodeJS and yarn must already be installed in your system
and have an android device!
🚧

Firstly, you will need to clone the repo locally.

Once you have it ready navigate into the directory and run the following commands:

    Start the Web App<code>yarn start</code>

<div align="center">
<h1>MADE WITH 🧠 BY </h1>

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/iota07"><img src="https://avatars.githubusercontent.com/u/145263906?v=4" width="100px;" alt=""/><br /><sub><b>Hansana Nhouvannasak</b></sub></a><br /><a href="https://github.com/iota07" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/matthieuGravy"><img src="https://avatars.githubusercontent.com/u/86630163?v=4" width="100px;" alt=""/><br /><sub><b>Matthieu Gravy</b></sub></a><br /><a href="https://github.com/matthieuGravy" title="Code">💻</a> </td>
    <td align="center"><a href="https://github.com/BurakTC"><img src="https://avatars.githubusercontent.com/u/106161574?v=4" width="100px;" alt=""/><br /><sub><b>BurakTC</b></sub></a><br /><a href="https://github.com/BurakTC" title="Code">💻</a> </td>
    <td align="center"><a href="https://github.com/Onyx3O6"><img src="https://avatars.githubusercontent.com/u/105912167?v=4" width="100px;" alt=""/><br /><sub><b>Jessy Victor Tibou</b></sub></a><br /><a href="https://github.com/Onyx3O6" title="Code">💻</a>
  </tr>
 </table>
<div align="center">
Do not forget to leave a star! 🤗
</div>
