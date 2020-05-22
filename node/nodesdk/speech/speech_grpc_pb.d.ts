// GENERATED CODE -- DO NOT EDIT!

// package: speechService
// file: speech.proto

import * as speech_pb from "./speech_pb";
import * as grpc from "grpc";

interface ISpeechServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listenSpeechEvent: grpc.MethodDefinition<speech_pb.ListenSpeechEventRequest, speech_pb.ListenSpeechEventResponse>;
  textToSpeech: grpc.MethodDefinition<speech_pb.TextToSpeechRequest, speech_pb.TextToSpeechResponse>;
  speechStop: grpc.MethodDefinition<speech_pb.SpeechStopRequest, speech_pb.SpeechStopResponse>;
  wakeUp: grpc.MethodDefinition<speech_pb.WakeUpRequest, speech_pb.WakeUpResponse>;
  hibernate: grpc.MethodDefinition<speech_pb.HibernateRequest, speech_pb.HibernateResponse>;
  setVoiceVolume: grpc.MethodDefinition<speech_pb.SetVoiceVolumeRequest, speech_pb.SetVoiceVolumeResponse>;
  getVoiceVolume: grpc.MethodDefinition<speech_pb.GetVoiceVolumeRequest, speech_pb.GetVoiceVolumeResponse>;
  setParams: grpc.MethodDefinition<speech_pb.SetParamsRequest, speech_pb.SetParamsResponse>;
}

export const SpeechServiceService: ISpeechServiceService;

export class SpeechServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listenSpeechEvent(argument: speech_pb.ListenSpeechEventRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<speech_pb.ListenSpeechEventResponse>;
  listenSpeechEvent(argument: speech_pb.ListenSpeechEventRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<speech_pb.ListenSpeechEventResponse>;
  textToSpeech(argument: speech_pb.TextToSpeechRequest, callback: grpc.requestCallback<speech_pb.TextToSpeechResponse>): grpc.ClientUnaryCall;
  textToSpeech(argument: speech_pb.TextToSpeechRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.TextToSpeechResponse>): grpc.ClientUnaryCall;
  textToSpeech(argument: speech_pb.TextToSpeechRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.TextToSpeechResponse>): grpc.ClientUnaryCall;
  speechStop(argument: speech_pb.SpeechStopRequest, callback: grpc.requestCallback<speech_pb.SpeechStopResponse>): grpc.ClientUnaryCall;
  speechStop(argument: speech_pb.SpeechStopRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.SpeechStopResponse>): grpc.ClientUnaryCall;
  speechStop(argument: speech_pb.SpeechStopRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.SpeechStopResponse>): grpc.ClientUnaryCall;
  wakeUp(argument: speech_pb.WakeUpRequest, callback: grpc.requestCallback<speech_pb.WakeUpResponse>): grpc.ClientUnaryCall;
  wakeUp(argument: speech_pb.WakeUpRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.WakeUpResponse>): grpc.ClientUnaryCall;
  wakeUp(argument: speech_pb.WakeUpRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.WakeUpResponse>): grpc.ClientUnaryCall;
  hibernate(argument: speech_pb.HibernateRequest, callback: grpc.requestCallback<speech_pb.HibernateResponse>): grpc.ClientUnaryCall;
  hibernate(argument: speech_pb.HibernateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.HibernateResponse>): grpc.ClientUnaryCall;
  hibernate(argument: speech_pb.HibernateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.HibernateResponse>): grpc.ClientUnaryCall;
  setVoiceVolume(argument: speech_pb.SetVoiceVolumeRequest, callback: grpc.requestCallback<speech_pb.SetVoiceVolumeResponse>): grpc.ClientUnaryCall;
  setVoiceVolume(argument: speech_pb.SetVoiceVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.SetVoiceVolumeResponse>): grpc.ClientUnaryCall;
  setVoiceVolume(argument: speech_pb.SetVoiceVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.SetVoiceVolumeResponse>): grpc.ClientUnaryCall;
  getVoiceVolume(argument: speech_pb.GetVoiceVolumeRequest, callback: grpc.requestCallback<speech_pb.GetVoiceVolumeResponse>): grpc.ClientUnaryCall;
  getVoiceVolume(argument: speech_pb.GetVoiceVolumeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.GetVoiceVolumeResponse>): grpc.ClientUnaryCall;
  getVoiceVolume(argument: speech_pb.GetVoiceVolumeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.GetVoiceVolumeResponse>): grpc.ClientUnaryCall;
  setParams(argument: speech_pb.SetParamsRequest, callback: grpc.requestCallback<speech_pb.SetParamsResponse>): grpc.ClientUnaryCall;
  setParams(argument: speech_pb.SetParamsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.SetParamsResponse>): grpc.ClientUnaryCall;
  setParams(argument: speech_pb.SetParamsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speech_pb.SetParamsResponse>): grpc.ClientUnaryCall;
}
