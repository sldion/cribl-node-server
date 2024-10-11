# Stage 1: Build
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run
FROM node:18

WORKDIR /app

COPY --from=build /app/dist .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]