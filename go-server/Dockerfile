FROM golang:1.15 as builder

WORKDIR /go/src/grpc-server
COPY ./ /go/src/grpc-server
ENV GO111MODULE=on

## Build
RUN go build -o ./bin/server ./src/main.go

FROM alpine:latest

WORKDIR /go/bin/
COPY --from=builder /go/src/grpc-server/bin/server /go/bin/server

# Helper setting
RUN mkdir /lib64 && \
    ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2

ENTRYPOINT ["/go/bin/server"]