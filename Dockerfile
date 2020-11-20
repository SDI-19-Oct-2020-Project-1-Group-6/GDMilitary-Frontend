FROM node:current-alpine

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY . /app

CMD ["npm","start"]