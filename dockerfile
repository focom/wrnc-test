FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY server.js .
COPY package.json .
COPY pm2.json .

RUN npm i

EXPOSE 5000
RUN pm2 start server.js


# CMD [ "pm2-runtime", "start", "pm2.json" ]