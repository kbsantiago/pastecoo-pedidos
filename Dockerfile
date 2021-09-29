FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"],




