// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var network_pb = require('./network_pb.js');

function serialize_networkService_ConnectRequest(arg) {
  if (!(arg instanceof network_pb.ConnectRequest)) {
    throw new Error('Expected argument of type networkService.ConnectRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_ConnectRequest(buffer_arg) {
  return network_pb.ConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_ConnectResponse(arg) {
  if (!(arg instanceof network_pb.ConnectResponse)) {
    throw new Error('Expected argument of type networkService.ConnectResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_ConnectResponse(buffer_arg) {
  return network_pb.ConnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_GetNetworkDeviceInfoRequest(arg) {
  if (!(arg instanceof network_pb.GetNetworkDeviceInfoRequest)) {
    throw new Error('Expected argument of type networkService.GetNetworkDeviceInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_GetNetworkDeviceInfoRequest(buffer_arg) {
  return network_pb.GetNetworkDeviceInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_GetNetworkDeviceInfoResponse(arg) {
  if (!(arg instanceof network_pb.GetNetworkDeviceInfoResponse)) {
    throw new Error('Expected argument of type networkService.GetNetworkDeviceInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_GetNetworkDeviceInfoResponse(buffer_arg) {
  return network_pb.GetNetworkDeviceInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_GetStatusRequest(arg) {
  if (!(arg instanceof network_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type networkService.GetStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_GetStatusRequest(buffer_arg) {
  return network_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_GetStatusResponse(arg) {
  if (!(arg instanceof network_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type networkService.GetStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_GetStatusResponse(buffer_arg) {
  return network_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_ListNetworksRequest(arg) {
  if (!(arg instanceof network_pb.ListNetworksRequest)) {
    throw new Error('Expected argument of type networkService.ListNetworksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_ListNetworksRequest(buffer_arg) {
  return network_pb.ListNetworksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_ListNetworksResponse(arg) {
  if (!(arg instanceof network_pb.ListNetworksResponse)) {
    throw new Error('Expected argument of type networkService.ListNetworksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_ListNetworksResponse(buffer_arg) {
  return network_pb.ListNetworksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_UpdateNetworkDeviceInfoRequest(arg) {
  if (!(arg instanceof network_pb.UpdateNetworkDeviceInfoRequest)) {
    throw new Error('Expected argument of type networkService.UpdateNetworkDeviceInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_UpdateNetworkDeviceInfoRequest(buffer_arg) {
  return network_pb.UpdateNetworkDeviceInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_networkService_UpdateNetworkDeviceInfoResponse(arg) {
  if (!(arg instanceof network_pb.UpdateNetworkDeviceInfoResponse)) {
    throw new Error('Expected argument of type networkService.UpdateNetworkDeviceInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_networkService_UpdateNetworkDeviceInfoResponse(buffer_arg) {
  return network_pb.UpdateNetworkDeviceInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// networkService.NetworkService 网络管理
//
// 管理内部路由设备
//
// 开发管理平台功能参考: http://10.10.10.2/network
var NetworkServiceService = exports.NetworkServiceService = {
  // ListNetworks 扫描附近无线信息
  //
  // 此方法在同一扫描时刻中为单例
  //
  // 360路由设备：
  //    由于持续扫描可能造成内部网络的断流，因此该类型路由不会进行后续的自动持续扫描，
  //    但持续监听支持后续新请求结果的同步返回
  listNetworks: {
    path: '/networkService.NetworkService/ListNetworks',
    requestStream: false,
    responseStream: true,
    requestType: network_pb.ListNetworksRequest,
    responseType: network_pb.ListNetworksResponse,
    requestSerialize: serialize_networkService_ListNetworksRequest,
    requestDeserialize: deserialize_networkService_ListNetworksRequest,
    responseSerialize: serialize_networkService_ListNetworksResponse,
    responseDeserialize: deserialize_networkService_ListNetworksResponse,
  },
  // Connect 路由设备连接无线网络
  //
  // 连接失败将立即返回错误
  // 若30秒后成功获取状态将返回超时失败
  connect: {
    path: '/networkService.NetworkService/Connect',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.ConnectRequest,
    responseType: network_pb.ConnectResponse,
    requestSerialize: serialize_networkService_ConnectRequest,
    requestDeserialize: deserialize_networkService_ConnectRequest,
    responseSerialize: serialize_networkService_ConnectResponse,
    responseDeserialize: deserialize_networkService_ConnectResponse,
  },
  // GetStatus 获取路由连接状态
  getStatus: {
    path: '/networkService.NetworkService/GetStatus',
    requestStream: false,
    responseStream: true,
    requestType: network_pb.GetStatusRequest,
    responseType: network_pb.GetStatusResponse,
    requestSerialize: serialize_networkService_GetStatusRequest,
    requestDeserialize: deserialize_networkService_GetStatusRequest,
    responseSerialize: serialize_networkService_GetStatusResponse,
    responseDeserialize: deserialize_networkService_GetStatusResponse,
  },
  // GetNetworkDeviceInfo 获取路由设备相关信息
  getNetworkDeviceInfo: {
    path: '/networkService.NetworkService/GetNetworkDeviceInfo',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.GetNetworkDeviceInfoRequest,
    responseType: network_pb.GetNetworkDeviceInfoResponse,
    requestSerialize: serialize_networkService_GetNetworkDeviceInfoRequest,
    requestDeserialize: deserialize_networkService_GetNetworkDeviceInfoRequest,
    responseSerialize: serialize_networkService_GetNetworkDeviceInfoResponse,
    responseDeserialize: deserialize_networkService_GetNetworkDeviceInfoResponse,
  },
  // UpdateNetworkDeviceInfo 修改网络设备相关信息
  updateNetworkDeviceInfo: {
    path: '/networkService.NetworkService/UpdateNetworkDeviceInfo',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.UpdateNetworkDeviceInfoRequest,
    responseType: network_pb.UpdateNetworkDeviceInfoResponse,
    requestSerialize: serialize_networkService_UpdateNetworkDeviceInfoRequest,
    requestDeserialize: deserialize_networkService_UpdateNetworkDeviceInfoRequest,
    responseSerialize: serialize_networkService_UpdateNetworkDeviceInfoResponse,
    responseDeserialize: deserialize_networkService_UpdateNetworkDeviceInfoResponse,
  },
};

exports.NetworkServiceClient = grpc.makeGenericClientConstructor(NetworkServiceService);
