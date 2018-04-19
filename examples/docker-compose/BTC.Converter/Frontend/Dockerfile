# https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f

FROM node:alpine as build-deps
WORKDIR /usr/src/app
COPY Frontend/react-app/package.json Frontend/react-app/package-lock.json ./
RUN npm install
COPY Frontend/react-app ./
RUN npm run build

FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
