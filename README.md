# Recipe FullStack App

## Backend:

The backend of the application consists of a simple `Express JS` REST API server with a single endpoint. The endpoint reads the recipes from a `JSON` file containing recipes with their ingredients and returns an array of said recipes. The results are filtered if it detects the request came in with a query param. The results are filtered by the name of the recipe and by the name of one of the ingredients of the recipe.

A noteworthy trade-off of the logic of the application is that the filter by ingredients functionality works by reciving the full name of the ingredient, meaning that, for example, if it received a query of *chee* it won't match the recipes containing the ingredient *cheese*.


## Frontend:

`React JS` was selected for the implementation of the frontend of the application. The structure of the app consists of two components. One for the search functionality and a presentational component for the information of a given recipe.

The main *App* component lifecycle is used to detect when the app is started and a http request is made to the backend requesting the complete list of recipes that are then rendered using the *Recipe* component.

The *SearchBar* component triggers a function in the main *App* component that sends a request to the backend with the query param to filter the recipe list and the app state is changed to reflect the results of the request.

A notable enhancement to be made in the frontend of the application is that a request to the backend is made on every keystroke. This should be throttle to prevent server and network overload. And also the styling could be improved with a more attractive design and maybe the use of a CSS framework such as Tailwind.


### Running:

To run the application locally two consoles are needed. One for the backend and one for the frontend.

To run the backend run the following commands:

``` shell
    cd backend
    npm install
    npm run start
```

This starts a server running on ``localhost:3001``.

To start the frontend run the following commands:

```shell
    cd frontend
    npm install
    npm run start
```

This starts the application on ``localhost:3000`` which is now reachable in a local browser.


### Testing:

The implementation of the tests are only on the frontend of the application. A note on the testing methodology is that it is linked to the backend server, so if the data changes the tests may fail. To prevent this the tests could use a mock server to return only the data that expected by the tests.

To run the unit tests run the following commands:

```shell
    cd frontend
    npm run test
```

To run the implemented end to end test run the following command with both the backend and frontend running on a separate shell:

```shell
    cd frontend
    npm run test:e2e
```
