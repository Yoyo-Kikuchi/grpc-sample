# go grpc server

## grpcurl

- Show services
```
grpcurl -plaintext localhost:50051 list
```

- Show methods
```
grpcurl -plaintext localhost:50051 list <SERVICE NAME>
```

- Call a service
```
grpcurl -plaintext localhost:50051 <SERVICE NAME>/<METHOD NAME>

or with params

grpcurl -plaintext -d '{"hog":"fuga"}' localhost:50051 <SERVICE NAME>/<METHOD NAME>
```
