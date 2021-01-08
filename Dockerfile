FROM node:lts
WORKDIR /app
ADD . /app
RUN apt-get update
RUN apt-get install -y nginx
RUN service nginx start
RUN npm install
RUN npm run build
RUN npm install -g http-server
CMD ["http-server", "./build", "-p", "6001", "-a"]
EXPOSE 6001