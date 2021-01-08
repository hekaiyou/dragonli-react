FROM node:lts
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build
RUN npm install -g http-server
ENV API_TTS_URL=/api/1.0/tts
CMD ["http-server", "./build", "-p", "6001", "-a"]
EXPOSE 6001