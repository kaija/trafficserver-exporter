FROM node:4.4.3-wheezy
RUN mkdir -p /trafficserver-exporter
COPY trafficserver-exporter/package.json /trafficserver-exporter/package.json
COPY trafficserver-exporter /trafficserver-exporter
WORKDIR /trafficserver-exporter
RUN npm install
CMD [ "npm", "start" ]
