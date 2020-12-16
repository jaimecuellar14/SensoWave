FROM node:10.16.1-alpine AS builder
WORKDIR /SensoWave
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /SensoWave/dist/SensoWave/ /usr/share/nginx/html
