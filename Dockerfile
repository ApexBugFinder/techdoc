# Stage 1: Compile and Build Angular codebase: Production
FROM node:latest as build
ENV NODE_ENV=production
RUN npm install -g --upgrade npm
RUN npm install -g @angular/cli

WORKDIR /app
ADD . /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN chown -R node /app
USER node
# EXPOSE 80
CMD ["npm", "start"]

# FROM nginx:latest
# COPY --from=build /app/dist/techdoc /usr/share/nginx/html
# COPY --from=build  /app/src/assets/nginx  /etc/nginx/conf.d

# COPY ./dist/TechDocPage-NgVersion /usr/share/nginx/html
# COPY ./src/assets/nginx  /etc/nginx/conf.d

# CMD ["nginx", "-g", "daemon off;"]