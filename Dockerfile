FROM node:13.7-alpine as develop-stage

# clone repo directory
WORKDIR /usr/src/boardgames-frontend
COPY package*.json ./

# install and build the image
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.17.5-alpine as production-stage
COPY --from=develop-stage /usr/src/boardgames-frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]