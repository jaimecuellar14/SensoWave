FROM node:12.16.1-alpine As builde
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/SampleApp/ /usr/share/nginx/html