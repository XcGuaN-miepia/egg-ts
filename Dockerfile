FROM node

RUN mkdir -p /opt/egg

COPY package*.json /opt/egg/

WORKDIR /opt/egg/

COPY . /opt/egg/

EXPOSE 7001

CMD npm i && npm run tsc && npm start
