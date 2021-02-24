### noosphere Proxy
FROM nginx:1.19-alpine

LABEL "name"="noosphere-proxy" \
  "description"="Noosphere Proxy: Proxy web requests and serve static assets" \
  "version"="1.0.0"

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

EXPOSE 6080
