FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN RUN apk add --update python make g++\
    && rm -rf /var/cache/apk/* && \
    npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"],




