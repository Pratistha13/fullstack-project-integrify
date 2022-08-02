FROM node:latest as builder

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

# FROM node:alpine
# COPY --from=builder /app/build ./build
# RUN npm install -g serve

CMD ["npm","start"]