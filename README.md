# **SREasy**

## Frontend of SREasy project

SREasy Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
SREasy project developed with Typescript and Chakra UI framework

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Test is using Jest. Maybe it's better to add Cypress for E2E testing.

### `npm audit --production`

Run this script to check whether there is vulnerabilities in this project. `npm audit` has false positive that is explained [here](https://github.com/facebook/create-react-app/issues/11174) by Dan Abramov.

## How to push to prod manually?

The CI/CD pipeline will push right the code right away to server if it pass the pipeline process.
This guide is for when you want to deploy SAMT manually.

### 1. Build the project 

#### 1.1 `npm run build-prod`
Use this command when you want to deploy to `production` PCF.

#### 1.2 `npm run build-np`
Use this command when you want to deploy to `non-production` PCF.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 2. Deploying to PCF

1. Go to the build directory (`cd build`)
2. `cf login` to your PCF API endpoint (this is the deployment target)
3. `cf push -f manifest.yml`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Credits


