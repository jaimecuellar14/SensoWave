FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/SensoWave /usr/share/nginx/html
EXPOSE 80

