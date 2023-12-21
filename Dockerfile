
FROM node:20


WORKDIR /application


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build

EXPOSE 80


CMD ["npm", "start"]
