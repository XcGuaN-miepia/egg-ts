FROM node

RUN mkdir -p /opt/egg

COPY package*.json /opt/egg/

WORKDIR /opt/egg/

RUN npm i

COPY . /opt/egg/

EXPOSE 7001

CMD npm run dev
