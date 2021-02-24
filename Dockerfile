FROM ruby:2.7.2-buster

LABEL "name"="noosphere" \
  "description"="Noosphere: A personal social server" \
  "version"="1.0.0"

RUN curl -sL https://deb.nodesource.com/setup_14.x | /bin/bash - \
  && apt-get update -qq \
  && apt-get install -y build-essential libpq-dev apt-transport-https ca-certificates tzdata nodejs \
  && npm install -g yarn \
  && gem install rails \
  && gem install rake \
  && gem install bundler

RUN mkdir /app
ENV RAILS_ROOT /app
WORKDIR /app
COPY Gemfile Gemfile.lock package.json yarn.lock /app/
RUN cd /app \
  && bundle install \
  && yarn install
COPY . /app
RUN bin/rails assets:clean assets:precompile

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

EXPOSE 6040
