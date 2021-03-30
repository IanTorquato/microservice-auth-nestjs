FROM node:14-alpine

WORKDIR /home/node/app

RUN yarn config set cache /home/node/app/.yarn-cache --global

USER node