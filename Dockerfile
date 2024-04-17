# Use the official Node.js image as the base
FROM node:21.6.2-alpine3.18 AS deps

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

RUN npm run build
CMD npm run start