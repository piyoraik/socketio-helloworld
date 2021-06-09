FROM node:16.3.0-stretch
ENV APP_ROOT /frontend/

WORKDIR $APP_ROOT

COPY ./package*.json $APP_ROOT
RUN yarn install

COPY ./ $APP_ROOT