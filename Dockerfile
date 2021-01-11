FROM node:lts
WORKDIR /app
ADD . /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install && npm run build && npm install -g http-server
CMD ["http-server", "./build", "-p", "6001", "-a"]
EXPOSE 6001