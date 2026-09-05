# Hanif Maritime

Next.js application for the Hanif Maritime website.

## Requirements

- Node.js 22 or newer
- npm
- Docker, optional for containerized runs

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

By default, the app runs on port `3000`. To use another port:

```bash
PORT=4871 npm run start
```

## Run With Docker

Build the Docker image:

```bash
docker build -t hanif-maritime:local .
```

Run the container:

```bash
docker run --rm -p 3000:3000 hanif-maritime:local
```

Open the app at:

```text
http://localhost:3000
```

## Run With Docker Compose

Build and start the app:

```bash
docker compose up --build
```

Stop the app:

```bash
docker compose down
```

## Useful Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production Next.js build.
- `npm run start` starts the production Next.js server.
