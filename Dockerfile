FROM node:7.8.0

COPY . /code/
WORKDIR /code/

RUN npm install
EXPOSE 8080
CMD npm run dev

