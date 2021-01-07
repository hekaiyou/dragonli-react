FROM nginx:alpine
WORKDIR /app
ADD . /app
COPY /app/build /usr/share/nginx/html/
EXPOSE 6001