
# Buggy Cars Rating

Buggy Rating allows users to view and vote on their favourite cars. This repo contains some example tests using Cypress.

Some API responses have been mocked to encourage test reproducibility on a live product.

[Buggy Cars Rating Website](https://buggy.justtestit.org/)


## Prerequisites
- node.js (v16.2.0)
- npm (7.13.0)
- Chrome browser


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd buggycarsrating
```

Install dependencies

```bash
  npm install
```

Run the tests

```bash
  npm run test
```

## Known Issues

#### Opening Lancia Stratos causes app to become unresponsive

```
  Navigate to the Lancia Stratos page https://buggy.justtestit.org/model/c4u1mqnarscc72is013g%7Cc4u1mqnarscc72is0170
  Attempt to navigate to Profile 

  Expected:
  User is navigated to Profile

  Actual:
  User is shown blank page

  Note:
  Refreshing the page will resolve the issue
```

#### User cannot return home from make screens 

```
  Navigate to a make page e.g. https://buggy.justtestit.org/make/c4u1mqnarscc72is00e0
  Click 'Buggy Rating' in the header 

  Expected:
  User is returned to the home page

  Actual:
  User remains on the make page
```


#### Author is not saved against comments for some models

```
  Navigate to the Lamborghini Diablo page https://buggy.justtestit.org/model/c4u1mqnarscc72is00e0%7Cc4u1mqnarscc72is00kg
  Submit a Vote with comment or view previous comments

  Expected:
  Author is populated with username of commenter

  Actual:
  Author is missing in response and is not displayed

  {"user":"","datePosted":"2022-03-14T04:37:32.060053429Z","text":"Great!"}

```

## Test Approach

The objective was to rapidly explore the app, identifying key functionality and any critical issues.
Non-functional tests were not considered.

Main features/flows include:
- Login
- Registration
- Admin panel
- View vehicle make details
- View vehicle model details
- Submit and view user comments
- Edit profile
- Rank and sort vehicles

