FROM node:11.1

ENV MYSQL_ROOT_PASSWORD ${MYSQL_ROOT_PASSWORD}

ADD . .
RUN npm install

CMD ["node", "server/index.js"]

EXPOSE 3000