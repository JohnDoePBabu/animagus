FROM node:7.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE 3008

CMD [ "npm", "start" ]
