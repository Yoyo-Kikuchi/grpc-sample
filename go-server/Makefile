.PHONY: build_prot

build_prot:
	protoc -I./src/pd/ \
		--go_out=plugins=grpc:. \
		--go_opt=module=github.com/Yoyo-Kikuchi/grpc-sample/go-server \
		./src/pd/*.proto