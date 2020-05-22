package main

import (
	"context"
	"errors"
	"fmt"
	"io"

	speechpb "github.com/jjrobotcn/andy4/gosdk/speech"
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

	client := speechpb.NewSpeechServiceClient(conn)

	stream, err := client.ListenSpeechEvent(context.Background(), &speechpb.ListenSpeechEventRequest{})
	if err != nil {
		panic(err)
	}

	for {
		res, err := stream.Recv()
		if err != nil {
			if errors.Is(err, io.EOF) {
				break
			}
			panic(err)
		}

		switch res.GetSpeechEventOneof().(type) {
		case *speechpb.ListenSpeechEventResponse_WakeUpInfo:
			wakeupInfo := res.GetWakeUpInfo()
			fmt.Printf("ANGLE: %d, BEAM: %d\n", wakeupInfo.GetAngle(), wakeupInfo.GetBeam())
			// ANGLE: 36, BEAM: 1

		case *speechpb.ListenSpeechEventResponse_ResultInfo:
			resultInfo := res.GetResultInfo()
			fmt.Printf("WORDS: %#v, COMPLETE: %t\n", resultInfo.GetWords(), resultInfo.GetSentenceComplete())
			// WORDS: []string{"我", "想", "看看"}, COMPLETE: false
			// WORDS: []string{"今天", "的", "天气预报", ""}, COMPLETE: true
		}
	}

}
