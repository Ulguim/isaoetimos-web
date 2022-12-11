FROM node:16.12.0-alpine

ENV PORT 4000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn

COPY . /usr/src/app

RUN yarn run codegen

# RUN yarn build
EXPOSE 4000

CMD "npm" "run" "dev"
