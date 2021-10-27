# QA Bootcamp
### Front-end Challenge v1.0

![Wizeline Logo]

##Introduction

The purpose of this challenge is to apply all the techniques and best practices covered during the front-end sessions to a real framework.

## Tech Stack

- Javacript
- Testcafe

## Project Structure
...
|-- pom
|   |-- data
|   |-- pages
|   |-- tests
|__ .env
|__ package-lock.json
|__ package.json

## Pre-requisites

1. Node.js (latest version).
2. Browser used must be installed: Chrome.

## Project Setup

1. Clone this repository.
2. Go to the repository folder.
3. Run npm install.
4. Create a .env file with following variables:
    STANDARD_USER_USERNAME=your@email.com
    STANDARD_USER_PASSWORD=your_password

## Dependencies

- testcafe
- dotenv

## Scripts
- test_Login: Runs all the tests from Login fixture on a chrome instance.
- test_Tasks: Runs all the tests from Tasks fixture on a chrome instance.
- test_Projects: Runs all the tests from Projects fixture on a chrome instance.
- test_Login_Concurrency: Runs all the tests from Login fixture on two chrome instances in headless mode.
- test_Login_Smoke: Runs all the smoke tests from Login fixture on a chrome instance.
- test_Reports_Login: Runs all the tests from Login fixture on a chrome instance and creates an html report under Reports folder.



