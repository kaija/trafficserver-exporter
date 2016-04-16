.PHONY:

all:image

image:
	docker build -t kaija/trafficserver-exporter .

run:
	docker run -e PORT=9122 -e ATS_URL='http://10.211.55.40:8080/_stats' -p 9122:9122 kaija/trafficserver-exporter

stop:
	docker stop atsexporter
	docker rm atsexporter
