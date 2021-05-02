FROM node:14.15-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14.15-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG GRPC_HOST=127.0.0.1
ENV GRPC_HOST=${GRPC_HOST}
ARG GRPC_PORT=50051
ENV GRPC_PORT=${GRPC_PORT}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main"]