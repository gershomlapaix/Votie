FROM node:18-alpine

WORKDIR /usr/votie-backend

COPY package.json .

RUN npm install
RUN npm install nodemon -g

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start:container"]                                        