FROM node:16.15.1-alpine as dev

WORKDIR /app

COPY package*.json ./

RUN npm install --only=development

COPY . .

#RUN npm install --production=false
RUN npm run build
