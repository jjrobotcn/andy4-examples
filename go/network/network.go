package main

import (
	"context"
	"fmt"

	networkpb "github.com/jjrobotcn/andy4/gosdk/network"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("10.10.10.2:8001", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	defer func() {
		_ = conn.Close()
	}()

	client := networkpb.NewNetworkServiceClient(conn)

	ctx := context.Background()
	req := &networkpb.GetNetworkDeviceInfoRequest{
		WithCredential: true,
	}
	res, err := client.GetNetworkDeviceInfo(ctx, req)
	if err != nil {
		panic(err)
	}

	fmt.Printf(
		"SSID: %s, CREDENTIAL: SECRET\n",
		res.GetNetworkDeviceInfo().GetSsid(),
		// res.GetNetworkDeviceInfo().GetCredential(),
	)
	// SSID: jinjia-4895EF, CREDENTIAL: SECRET
}
