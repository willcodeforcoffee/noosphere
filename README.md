# Noösphere

Noösphere is a personal social server.

## Development Environment

A few things need to be done to setup the development environment.

### Environment for Development

The [dotenv gem](https://github.com/bkeepers/dotenv) is used to manage environment variable configuration. Create or edit the file `.env.development.local` for your setup files.

Settings you might be interested in changing:

| Setting | Default Value | Description |
|---------|---------------|-------------|
| ENABLE_SMTP_SENDING | false | Set `true` to send using SMTP instead of letter_opener |
| SMTP_ADDRESS | | SMTP Server Address |
| SMTP_DOMAIN | | SMTP Domain |
| SMTP_USER_NAME | | SMTP Login User |
| SMTP_PASSWORD | | SMTP Login Password |
| SYSTEM_MAILER_DEFAULT_FROM_ADDRESS | | From email address for SystemMailer emails |
| SYSTEM_MAILER_DEFAULT_RECIPIENT_ADDRESS | | Receiver address for SystemMailer emails |
| PUSHOVER_TOKEN | | Pushover Service Token for Development |
| PUSHOVER_USERKEY | | Pushover Service Userkey for Development |

### Ports Setup

The services are organized to not interrupt any other systems during development.

| Service | Description | Port |
|---------|-------------|------|
| Web | Nginx Web Proxy | 6100 |
| Rails | Rails Server | 6110 |
| Webpacker | Rails Webpacker | 6111 |
| Postgres | Database Server | 6120 |
| Redis | Redis Server | 6121 |


## Running in Production

### Step 1. Build the Application Docker images

First you have to build the Application Docker image:

```
docker build --tag noosphere:1.1.0 --tag noosphere:latest .
```

Second you have to build the Proxy Docker image

```
docker build --file config/docker/proxy/Dockerfile --tag noosphere-proxy:1.1.0 --tag noosphere-proxy:latest .
```

### Step 2. Setup the Environment variables

Anything you aren't passing from the environment should be loaded into `.env.production.local`. Most settings are documented in `.env` also.

- [Pushover](https://pushover.net/) is used to send app notifications
- SMTP is used to send email

### Step 3. Docker Compose to run all services

To run everything use the production compose:

```
docker-compose -f docker-compose.yml -f config/docker/docker-compose.yml up --detach
```

## Stopping in Production

```
docker-compose -f docker-compose.yml -f config/docker/docker-compose.yml down
```
