FROM nginx:alpine
WORKDIR /app
ADD . /app
COPY /build/ /usr/share/nginx/html/
EXPOSE 80