FROM node:lts
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build
RUN npm install -g http-server
CMD ["http-server", "./build", "-p", "6001"]
EXPOSE 6001