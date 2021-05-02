package main

import (
	"log"
	"net"

	pb "github.com/Yoyo-Kikuchi/grpc-sample/go-server/src/pd"
	"github.com/Yoyo-Kikuchi/grpc-sample/go-server/src/service"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {

	listenPort, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalln(err)
	}
	server := grpc.NewServer()
	catService := &service.MyCatService{}
	// 実行したい実処理をseverに登録する
	reflection.Register(server)
	pb.RegisterCatServer(server, catService)
	server.Serve(listenPort)
}
