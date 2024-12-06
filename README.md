# Recipe Finder Backend

This is the backend of the Recipe Finder app, built with Express.

## Installation

1. Clone the repository:
  ```bash
  git clone <REPOSITORY_URL>
  cd recipe-finder-backend
  ```

2. Install the dependencies:
  ```bash
  yarn install
  ```

3. Create a `.env` file based on `.env.example`:
  ```bash
  cp .env.example .env
  ```

4. Configure the environment variables in the `.env` file.

## Database

1. Start the database:
  ```bash
  yarn db:up
  ```

## Running the Server

1. Start the development server:
  ```bash
  yarn dev
  ```

2. The server will be running at `http://localhost:3000`.

