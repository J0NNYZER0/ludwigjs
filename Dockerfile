FROM node:11.1

ENV MYSQL_ROOT_PASSWORD ${MYSQL_ROOT_PASSWORD}

ADD . .
RUN npm install
RUN ["chmod", "+x", "scripts/init-db.sh"]

CMD ["node", "server/index.js"]

EXPOSE 3000