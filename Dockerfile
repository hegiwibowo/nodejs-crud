FROM node:12.20.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 49160
CMD [ "node", "server.js" ]