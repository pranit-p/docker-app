FROM node:current-alpine3.16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:current-alpine3.16 as prod
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD node index.js










# FROM node:current-alpine3.16 AS development
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm install nodemon
# COPY . .
# CMD node index.js

# FROM node:12.19.0-alpine3.9 as production
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# COPY --from=development /usr/src/app/dist ./dist
# CMD node dist/main
