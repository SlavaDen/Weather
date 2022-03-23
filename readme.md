# Weather

Demo (https://weather-inky.vercel.app)

Stasus: Finished

Frontend application for viewing the weather in the selected city for 7 days

## Initial task

Create an app to view the weather for 7 days.
With the possibility of choosing a city.
Using a minimum number of dependencies and webpack builder.

## Technologies used

- [React](https://reactjs.org/) single page application
- Routing done using [React Router](https://reactrouter.com)
- State management via [Redux](https://redux.js.org/)
- Library for a bundle React and Redux [React-Redux](https://react-redux.js.org)
- Builder [Webpack](https://webpack.js.org)
- Code Converter to simple JavaScript code [Babel](https://babeljs.io)

## Setup

1. Clone the repository and install the dependencies

```bash
npm install
```

2. Register and get an api key
   https://api.openweathermap.org

3. Create File config.json at the root of the project
   Fill in the file according to the template below, specifying your api key

```
{
"API_KEY": "Enter api key"
}
```

4. Start the frontend application locally

```bash
npm start
```

Available commands
npm start: Start the app locally in your development environment, by default it will be in http://localhost:3000.
npm run build: Run build project
