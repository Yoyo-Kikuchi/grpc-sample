.PHONY: build run

build:
	docker-compose build --no-cache

up:
	docker-compose up -d

stop:
	docker-compose stop

rm:
	docker-compose rm

down:
	docker-compose down