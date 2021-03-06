FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install && mkdir uploads
COPY "package.json" "app.js" "server.js" ./
COPY "api/" ./api
EXPOSE 3000
CMD [ "npm", "start" ]