FROM node:11.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY . /usr/src/app
RUN npm rebuild node-sass
RUN npm install
RUN npm run build

RUN ["chmod", "+x", "/usr/src/app/scripts/init-db.sh"]

CMD ["node", "usr/src/app/server/index.js"]

EXPOSE 3000