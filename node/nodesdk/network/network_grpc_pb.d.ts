// GENERATED CODE -- DO NOT EDIT!

// package: networkService
// file: network.proto

import * as network_pb from "./network_pb";
import * as grpc from "grpc";

interface INetworkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listNetworks: grpc.MethodDefinition<network_pb.ListNetworksRequest, network_pb.ListNetworksResponse>;
  connect: grpc.MethodDefinition<network_pb.ConnectRequest, network_pb.ConnectResponse>;
  getStatus: grpc.MethodDefinition<network_pb.GetStatusRequest, network_pb.GetStatusResponse>;
  getNetworkDeviceInfo: grpc.MethodDefinition<network_pb.GetNetworkDeviceInfoRequest, network_pb.GetNetworkDeviceInfoResponse>;
  updateNetworkDeviceInfo: grpc.MethodDefinition<network_pb.UpdateNetworkDeviceInfoRequest, network_pb.UpdateNetworkDeviceInfoResponse>;
}

export const NetworkServiceService: INetworkServiceService;

export class NetworkServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listNetworks(argument: network_pb.ListNetworksRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<network_pb.ListNetworksResponse>;
  listNetworks(argument: network_pb.ListNetworksRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<network_pb.ListNetworksResponse>;
  connect(argument: network_pb.ConnectRequest, callback: grpc.requestCallback<network_pb.ConnectResponse>): grpc.ClientUnaryCall;
  connect(argument: network_pb.ConnectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.ConnectResponse>): grpc.ClientUnaryCall;
  connect(argument: network_pb.ConnectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.ConnectResponse>): grpc.ClientUnaryCall;
  getStatus(argument: network_pb.GetStatusRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<network_pb.GetStatusResponse>;
  getStatus(argument: network_pb.GetStatusRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<network_pb.GetStatusResponse>;
  getNetworkDeviceInfo(argument: network_pb.GetNetworkDeviceInfoRequest, callback: grpc.requestCallback<network_pb.GetNetworkDeviceInfoResponse>): grpc.ClientUnaryCall;
  getNetworkDeviceInfo(argument: network_pb.GetNetworkDeviceInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.GetNetworkDeviceInfoResponse>): grpc.ClientUnaryCall;
  getNetworkDeviceInfo(argument: network_pb.GetNetworkDeviceInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.GetNetworkDeviceInfoResponse>): grpc.ClientUnaryCall;
  updateNetworkDeviceInfo(argument: network_pb.UpdateNetworkDeviceInfoRequest, callback: grpc.requestCallback<network_pb.UpdateNetworkDeviceInfoResponse>): grpc.ClientUnaryCall;
  updateNetworkDeviceInfo(argument: network_pb.UpdateNetworkDeviceInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.UpdateNetworkDeviceInfoResponse>): grpc.ClientUnaryCall;
  updateNetworkDeviceInfo(argument: network_pb.UpdateNetworkDeviceInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.UpdateNetworkDeviceInfoResponse>): grpc.ClientUnaryCall;
}
