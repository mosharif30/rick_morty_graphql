# React TypeScript App with GraphQL API Integration

This is a React TypeScript application that integrates with a GraphQL API. This software shows the characters of the Rick and Morty series on separate pages

## Deployed project

You can see the Deployed project Here :

- https://rick-morty.iran.liara.run/

## Prerequisites

Before running the application, ensure that the following software is installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

   - `git clone https://github.com/mosharif30/rick_morty_graphql`

2. Change into the project's directory:
   - `cd rick_morty_graphql`
3. Install the dependencies:
   - `yarn install`

## Usage

To start the development server, run the following command:

- `yarn dev`

Open your browser and navigate to http://127.0.0.1:5173/ to view the application.

## Testing

This project uses Jest for unit testing. To run the tests, use the following command:

- `yarn test`

View and interpret the generated coverage reports.

Test coverage is a metric used to measure the effectiveness of your tests by determining the percentage of your code that is executed during testing. Istanbul is a popular JavaScript code coverage tool that provides detailed reports on how well your tests exercise your codebase.

- **Statement coverage**: The percentage of code statements that are executed during testing.
- **Branch coverage**: The percentage of code branches (if statements, loops, etc.) that are exercised.
- **Line coverage**: The percentage of lines of code executed.

## Folder Structure

The project's folder structure is organized as follows:

- `src/components`: Contains reusable UI components.
- `src/Interfaces`: Contains TypeScript interface definitions for data structures used in the application.
- `src/containers`: Contains page components that represent different routes of the application.
- `src/services`: Contains services responsible for API communication and data fetching.
- `src/main.tsx`: Entry point of the application. The root component that renders different routes.
- `.gitignore`: Specifies files and directories to be ignored by version control.
- `package.json`: Contains project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration file.

## Dependencies

The application utilizes the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Package for React rendering on the web.
- `@mui/material`: Material UI library for beautiful and responsive UI components.
- `react-router-dom`: Library for handling routing in React applications.
- `react-query`: Data fetching and caching library for React.
- `graphql-request`: Minimal GraphQL client supporting Node and browsers for scripts or simple apps.
- `graphql`: JavaScript reference implementation for GraphQL.
- `@types/react`: TypeScript typings for React.
- `@types/react-dom`: TypeScript typings for React DOM.
- `@types/jest`: TypeScript typings for Jest.
- `jest`: Testing framework designed to ensure correctness of any JavaScript codebase.

You can find more details about these dependencies in the `package.json` file.
