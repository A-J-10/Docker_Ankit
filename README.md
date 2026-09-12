# Docker Full-Stack Application

A simple full-stack web application built with a **Node.js/Express frontend** and a **Flask backend**, containerized using Docker.

## About

The frontend provides a form for the user and sends the submitted data to the Flask backend for processing.

Both services run in separate Docker containers and are connected using **Docker Compose**.

## Technologies Used

* Node.js
* Express.js
* Python
* Flask
* Docker
* Docker Compose

## How to Run

1. Make sure **Docker Desktop** is installed and running.
2. Clone this repository:

```bash
git clone https://github.com/A-J-10/Docker_Ankit.git
```

3. Open the project folder:

```bash
cd Docker_Ankit
```

4. Start the application:

```bash
docker compose up --build
```

5. Open the frontend in your browser using the port shown by Docker Compose.

6. To stop the application, press `Ctrl + C`.

You can also run it in the background using:

```bash
docker compose up -d
```

To stop the background containers:

```bash
docker compose down
```

## Docker Images

**Backend:**
https://hub.docker.com/r/ankitjain975/docker-backend

**Frontend:**
https://hub.docker.com/r/ankitjain975/docker-frontend
