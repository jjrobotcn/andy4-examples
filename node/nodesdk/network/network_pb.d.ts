// package: networkService
// file: network.proto

import * as jspb from "google-protobuf";

export class NetworkInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMac(): string;
  setMac(value: string): void;

  getChannel(): number;
  setChannel(value: number): void;

  getRssi(): number;
  setRssi(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkInfo): NetworkInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkInfo;
  static deserializeBinaryFromReader(message: NetworkInfo, reader: jspb.BinaryReader): NetworkInfo;
}

export namespace NetworkInfo {
  export type AsObject = {
    name: string,
    mac: string,
    channel: number,
    rssi: number,
  }
}

export class ListNetworksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNetworksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNetworksRequest): ListNetworksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNetworksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNetworksRequest;
  static deserializeBinaryFromReader(message: ListNetworksRequest, reader: jspb.BinaryReader): ListNetworksRequest;
}

export namespace ListNetworksRequest {
  export type AsObject = {
  }
}

export class ListNetworksResponse extends jspb.Message {
  clearNetworksInfoList(): void;
  getNetworksInfoList(): Array<NetworkInfo>;
  setNetworksInfoList(value: Array<NetworkInfo>): void;
  addNetworksInfo(value?: NetworkInfo, index?: number): NetworkInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNetworksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNetworksResponse): ListNetworksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNetworksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNetworksResponse;
  static deserializeBinaryFromReader(message: ListNetworksResponse, reader: jspb.BinaryReader): ListNetworksResponse;
}

export namespace ListNetworksResponse {
  export type AsObject = {
    networksInfoList: Array<NetworkInfo.AsObject>,
  }
}

export class ConnectRequest extends jspb.Message {
  hasNetworkInfo(): boolean;
  clearNetworkInfo(): void;
  getNetworkInfo(): NetworkInfo | undefined;
  setNetworkInfo(value?: NetworkInfo): void;

  getSsid(): string;
  setSsid(value: string): void;

  getPwd(): string;
  setPwd(value: string): void;

  getKeepAlive(): boolean;
  setKeepAlive(value: boolean): void;

  getKeepAliveInterval(): number;
  setKeepAliveInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectRequest): ConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectRequest;
  static deserializeBinaryFromReader(message: ConnectRequest, reader: jspb.BinaryReader): ConnectRequest;
}

export namespace ConnectRequest {
  export type AsObject = {
    networkInfo?: NetworkInfo.AsObject,
    ssid: string,
    pwd: string,
    keepAlive: boolean,
    keepAliveInterval: number,
  }
}

export class NetworkStatus extends jspb.Message {
  getStatus(): StatusMap[keyof StatusMap];
  setStatus(value: StatusMap[keyof StatusMap]): void;

  getName(): string;
  setName(value: string): void;

  getPublicIp(): string;
  setPublicIp(value: string): void;

  getRssi(): number;
  setRssi(value: number): void;

  getUpload(): number;
  setUpload(value: number): void;

  getDownload(): number;
  setDownload(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkStatus.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkStatus): NetworkStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkStatus;
  static deserializeBinaryFromReader(message: NetworkStatus, reader: jspb.BinaryReader): NetworkStatus;
}

export namespace NetworkStatus {
  export type AsObject = {
    status: StatusMap[keyof StatusMap],
    name: string,
    publicIp: string,
    rssi: number,
    upload: number,
    download: number,
  }
}

export class ConnectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectResponse): ConnectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectResponse;
  static deserializeBinaryFromReader(message: ConnectResponse, reader: jspb.BinaryReader): ConnectResponse;
}

export namespace ConnectResponse {
  export type AsObject = {
  }
}

export class GetStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
  static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
  export type AsObject = {
  }
}

export class GetStatusResponse extends jspb.Message {
  hasNetworkStatus(): boolean;
  clearNetworkStatus(): void;
  getNetworkStatus(): NetworkStatus | undefined;
  setNetworkStatus(value?: NetworkStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
  static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
  export type AsObject = {
    networkStatus?: NetworkStatus.AsObject,
  }
}

export class NetworkDeviceInfo extends jspb.Message {
  getSsid(): string;
  setSsid(value: string): void;

  getCredential(): string;
  setCredential(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkDeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkDeviceInfo): NetworkDeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkDeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkDeviceInfo;
  static deserializeBinaryFromReader(message: NetworkDeviceInfo, reader: jspb.BinaryReader): NetworkDeviceInfo;
}

export namespace NetworkDeviceInfo {
  export type AsObject = {
    ssid: string,
    credential: string,
  }
}

export class GetNetworkDeviceInfoRequest extends jspb.Message {
  getWithCredential(): boolean;
  setWithCredential(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkDeviceInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkDeviceInfoRequest): GetNetworkDeviceInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkDeviceInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkDeviceInfoRequest;
  static deserializeBinaryFromReader(message: GetNetworkDeviceInfoRequest, reader: jspb.BinaryReader): GetNetworkDeviceInfoRequest;
}

export namespace GetNetworkDeviceInfoRequest {
  export type AsObject = {
    withCredential: boolean,
  }
}

export class GetNetworkDeviceInfoResponse extends jspb.Message {
  hasNetworkDeviceInfo(): boolean;
  clearNetworkDeviceInfo(): void;
  getNetworkDeviceInfo(): NetworkDeviceInfo | undefined;
  setNetworkDeviceInfo(value?: NetworkDeviceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkDeviceInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkDeviceInfoResponse): GetNetworkDeviceInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkDeviceInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkDeviceInfoResponse;
  static deserializeBinaryFromReader(message: GetNetworkDeviceInfoResponse, reader: jspb.BinaryReader): GetNetworkDeviceInfoResponse;
}

export namespace GetNetworkDeviceInfoResponse {
  export type AsObject = {
    networkDeviceInfo?: NetworkDeviceInfo.AsObject,
  }
}

export class UpdateNetworkDeviceInfoRequest extends jspb.Message {
  hasNetworkDeviceInfo(): boolean;
  clearNetworkDeviceInfo(): void;
  getNetworkDeviceInfo(): NetworkDeviceInfo | undefined;
  setNetworkDeviceInfo(value?: NetworkDeviceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNetworkDeviceInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNetworkDeviceInfoRequest): UpdateNetworkDeviceInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNetworkDeviceInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNetworkDeviceInfoRequest;
  static deserializeBinaryFromReader(message: UpdateNetworkDeviceInfoRequest, reader: jspb.BinaryReader): UpdateNetworkDeviceInfoRequest;
}

export namespace UpdateNetworkDeviceInfoRequest {
  export type AsObject = {
    networkDeviceInfo?: NetworkDeviceInfo.AsObject,
  }
}

export class UpdateNetworkDeviceInfoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNetworkDeviceInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNetworkDeviceInfoResponse): UpdateNetworkDeviceInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNetworkDeviceInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNetworkDeviceInfoResponse;
  static deserializeBinaryFromReader(message: UpdateNetworkDeviceInfoResponse, reader: jspb.BinaryReader): UpdateNetworkDeviceInfoResponse;
}

export namespace UpdateNetworkDeviceInfoResponse {
  export type AsObject = {
  }
}

export interface StatusMap {
  UNKNOWN: 0;
  DISCONNECTED: 1;
  CONNECTING: 2;
  CONNECTED: 3;
}

export const Status: StatusMap;

