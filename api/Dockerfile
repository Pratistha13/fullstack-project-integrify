FROM node:latest

WORKDIR /app
COPY package*.json .
RUN npm install
RUN npm install -g typescript
COPY . .
EXPOSE 5000

CMD ["npm","run","start:dev"]
