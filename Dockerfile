FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY "api/" "package.json" "app.js" "server.js" ./
EXPOSE 3000
CMD [ "npm", "start" ]