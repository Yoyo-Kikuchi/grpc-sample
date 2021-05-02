.PHONY: build run build_prot

build:
	docker build --no-cache -t go-grpc-server \
	.

run:
	docker run -d -it -p 50051:50051 go-grpc-server

build_prot:
	protoc -I./src/pd/ \
		--go_out=plugins=grpc:. \
		--go_opt=module=github.com/Yoyo-Kikuchi/grpc-sample/go-server \
		./src/pd/*.proto