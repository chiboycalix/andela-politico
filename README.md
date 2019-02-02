# andela-politico

[![Build Status](https://travis-ci.org/chiboycalix/andela-politico.svg?branch=develop)](https://travis-ci.org/chiboycalix/andela-politico)
[![Coverage Status](https://coveralls.io/repos/github/chiboycalix/andela-politico/badge.svg?branch=develop)](https://coveralls.io/github/chiboycalix/andela-politico?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/28016bbae0df667b9800/maintainability)](https://codeclimate.com/github/chiboycalix/andela-politico/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/28016bbae0df667b9800/test_coverage)](https://codeclimate.com/github/chiboycalix/andela-politico/test_coverage) 


This is an application that lets Users 

- Create an account by signing up
- Login to the account created
- View all registered political parties 
- View all registered candidates under a political party
- View all political candidates running for a government office 
- Register as a political candidate under a party
- Vote for their preffered candidate running for a government office
- View the result of the election after it has been concluded


## Table of Contents

* [Technologies](#technologies)
 * [Features](#features)
 * [API Endpoints](#api-endpoints)
 * [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Testing](#testing)
    * [Development](#development)

### Pivotal Tracker
The Project is being built with the Project Management Tool, Pivotal Tracker.
You can find the template at [https://www.pivotaltracker.com/n/projects/2240402](https://www.pivotaltracker.com/n/projects/2240402)


### API Deployment
API is deployed at [https://my-politico-app.herokuapp.com](https://my-politico-app.herokuapp.com)

## Technologies

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework
* [npm](https://www.npm.com/) - Node Package Manager (Dependency Manager)
* [postgresDatabase][https://postgres.com] - Relational Database Model (SQL Database)


### Supporting Packages

#### Linter(s)

* [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

* [Babel](https://babel.io/) - Compiler for ES6 Javascript

## Test Tools
* Mocha - JavaScript Test Framework for API Tests
* Chai - TDD/BDD Assertion Library for Node

## Features
 
### Users
* View landing page/home route
* Create account
* Login
* View Candidates Manifesto
* View Political all Political Parties 
* View a single Political Party
* Vote for a Candidate Running for a government office
* Register to become a political candidate
* View Election results
* View details of a government office
* Create new Political party (Admin)
* Update a Political party (Admin)
* Delete a Political party (Admin)
* Create new government office (Admin)




## Getting Started

### Installation

* git clone [Politico](https://github.com/chiboycalix/andela-politico.git)
* Run npm install to install packages
* Setup a postgreSQL database and configure the database files accordingly
* Run npm start to migrate all database tables and start the server
* Navigate to [localhost:3000](http://localhost:3000/) in a browser to access the application


### Testing

#### Prerequisites

* [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

* After installing as shown above
* Navigate to [localhost:3000](http://localhost:3000/) in
  [Postman](https://getpostman.com/) to access the application

#### Testing with Coverage Data

* After installation
* Run npm test
* It will lint code, run test and display coverage data as generated by
  [nyc](https://github.com/nyc)

### Development
[Babe-Node](https://babeljs.io) helps to compile es6 codes to es5 before running the server. 


