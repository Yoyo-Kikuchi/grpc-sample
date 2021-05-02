.PHONY: build run

build:
	docker build --no-cache -t nest-grpc-client \
		--build-arg NODE_ENV="$(NODE_ENV)" \
		--build-arg GRPC_HOST="$(GRPC_HOST)" \
		--build-arg GRPC_PORT="$(GRPC_PORT)" \
	.

run:
	docker run -it -p 3000:3000 -d nest-grpc-client