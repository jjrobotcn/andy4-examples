// package: speechService
// file: speech.proto

import * as jspb from "google-protobuf";

export class ErrorInfo extends jspb.Message {
  getErrorType(): ErrorTypeMap[keyof ErrorTypeMap];
  setErrorType(value: ErrorTypeMap[keyof ErrorTypeMap]): void;

  getInfo(): string;
  setInfo(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorInfo): ErrorInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorInfo;
  static deserializeBinaryFromReader(message: ErrorInfo, reader: jspb.BinaryReader): ErrorInfo;
}

export namespace ErrorInfo {
  export type AsObject = {
    errorType: ErrorTypeMap[keyof ErrorTypeMap],
    info: string,
    code: string,
  }
}

export class VadInfo extends jspb.Message {
  getVadType(): VadTypeMap[keyof VadTypeMap];
  setVadType(value: VadTypeMap[keyof VadTypeMap]): void;

  getVol(): number;
  setVol(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VadInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VadInfo): VadInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VadInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VadInfo;
  static deserializeBinaryFromReader(message: VadInfo, reader: jspb.BinaryReader): VadInfo;
}

export namespace VadInfo {
  export type AsObject = {
    vadType: VadTypeMap[keyof VadTypeMap],
    vol: number,
  }
}

export class WakeUpInfo extends jspb.Message {
  getAngle(): number;
  setAngle(value: number): void;

  getBeam(): number;
  setBeam(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WakeUpInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WakeUpInfo): WakeUpInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WakeUpInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WakeUpInfo;
  static deserializeBinaryFromReader(message: WakeUpInfo, reader: jspb.BinaryReader): WakeUpInfo;
}

export namespace WakeUpInfo {
  export type AsObject = {
    angle: number,
    beam: number,
  }
}

export class ResultInfo extends jspb.Message {
  clearWordsList(): void;
  getWordsList(): Array<string>;
  setWordsList(value: Array<string>): void;
  addWords(value: string, index?: number): string;

  getSentenceComplete(): boolean;
  setSentenceComplete(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResultInfo): ResultInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultInfo;
  static deserializeBinaryFromReader(message: ResultInfo, reader: jspb.BinaryReader): ResultInfo;
}

export namespace ResultInfo {
  export type AsObject = {
    wordsList: Array<string>,
    sentenceComplete: boolean,
  }
}

export class ListenSpeechEventRequest extends jspb.Message {
  getWithVadVol(): boolean;
  setWithVadVol(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenSpeechEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenSpeechEventRequest): ListenSpeechEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenSpeechEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenSpeechEventRequest;
  static deserializeBinaryFromReader(message: ListenSpeechEventRequest, reader: jspb.BinaryReader): ListenSpeechEventRequest;
}

export namespace ListenSpeechEventRequest {
  export type AsObject = {
    withVadVol: boolean,
  }
}

export class ListenSpeechEventResponse extends jspb.Message {
  getEventType(): SpeechEventMap[keyof SpeechEventMap];
  setEventType(value: SpeechEventMap[keyof SpeechEventMap]): void;

  hasWakeUpInfo(): boolean;
  clearWakeUpInfo(): void;
  getWakeUpInfo(): WakeUpInfo | undefined;
  setWakeUpInfo(value?: WakeUpInfo): void;

  hasVadInfo(): boolean;
  clearVadInfo(): void;
  getVadInfo(): VadInfo | undefined;
  setVadInfo(value?: VadInfo): void;

  hasResultInfo(): boolean;
  clearResultInfo(): void;
  getResultInfo(): ResultInfo | undefined;
  setResultInfo(value?: ResultInfo): void;

  hasErrorInfo(): boolean;
  clearErrorInfo(): void;
  getErrorInfo(): ErrorInfo | undefined;
  setErrorInfo(value?: ErrorInfo): void;

  getSpeechEventOneofCase(): ListenSpeechEventResponse.SpeechEventOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenSpeechEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenSpeechEventResponse): ListenSpeechEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListenSpeechEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenSpeechEventResponse;
  static deserializeBinaryFromReader(message: ListenSpeechEventResponse, reader: jspb.BinaryReader): ListenSpeechEventResponse;
}

export namespace ListenSpeechEventResponse {
  export type AsObject = {
    eventType: SpeechEventMap[keyof SpeechEventMap],
    wakeUpInfo?: WakeUpInfo.AsObject,
    vadInfo?: VadInfo.AsObject,
    resultInfo?: ResultInfo.AsObject,
    errorInfo?: ErrorInfo.AsObject,
  }

  export enum SpeechEventOneofCase {
    SPEECH_EVENT_ONEOF_NOT_SET = 0,
    WAKE_UP_INFO = 2,
    VAD_INFO = 3,
    RESULT_INFO = 4,
    ERROR_INFO = 5,
  }
}

export class TextToSpeechRequest extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextToSpeechRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TextToSpeechRequest): TextToSpeechRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextToSpeechRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextToSpeechRequest;
  static deserializeBinaryFromReader(message: TextToSpeechRequest, reader: jspb.BinaryReader): TextToSpeechRequest;
}

export namespace TextToSpeechRequest {
  export type AsObject = {
    text: string,
  }
}

export class TextToSpeechResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextToSpeechResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TextToSpeechResponse): TextToSpeechResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextToSpeechResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextToSpeechResponse;
  static deserializeBinaryFromReader(message: TextToSpeechResponse, reader: jspb.BinaryReader): TextToSpeechResponse;
}

export namespace TextToSpeechResponse {
  export type AsObject = {
  }
}

export class SpeechStopRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechStopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechStopRequest): SpeechStopRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechStopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechStopRequest;
  static deserializeBinaryFromReader(message: SpeechStopRequest, reader: jspb.BinaryReader): SpeechStopRequest;
}

export namespace SpeechStopRequest {
  export type AsObject = {
  }
}

export class SpeechStopResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechStopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechStopResponse): SpeechStopResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechStopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechStopResponse;
  static deserializeBinaryFromReader(message: SpeechStopResponse, reader: jspb.BinaryReader): SpeechStopResponse;
}

export namespace SpeechStopResponse {
  export type AsObject = {
  }
}

export class WakeUpRequest extends jspb.Message {
  getAfterWakeUpSpeechText(): string;
  setAfterWakeUpSpeechText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WakeUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WakeUpRequest): WakeUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WakeUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WakeUpRequest;
  static deserializeBinaryFromReader(message: WakeUpRequest, reader: jspb.BinaryReader): WakeUpRequest;
}

export namespace WakeUpRequest {
  export type AsObject = {
    afterWakeUpSpeechText: string,
  }
}

export class WakeUpResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WakeUpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WakeUpResponse): WakeUpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WakeUpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WakeUpResponse;
  static deserializeBinaryFromReader(message: WakeUpResponse, reader: jspb.BinaryReader): WakeUpResponse;
}

export namespace WakeUpResponse {
  export type AsObject = {
  }
}

export class HibernateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HibernateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HibernateRequest): HibernateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HibernateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HibernateRequest;
  static deserializeBinaryFromReader(message: HibernateRequest, reader: jspb.BinaryReader): HibernateRequest;
}

export namespace HibernateRequest {
  export type AsObject = {
  }
}

export class HibernateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HibernateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HibernateResponse): HibernateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HibernateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HibernateResponse;
  static deserializeBinaryFromReader(message: HibernateResponse, reader: jspb.BinaryReader): HibernateResponse;
}

export namespace HibernateResponse {
  export type AsObject = {
  }
}

export class VoiceVolumeInfo extends jspb.Message {
  getVol(): number;
  setVol(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceVolumeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceVolumeInfo): VoiceVolumeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoiceVolumeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceVolumeInfo;
  static deserializeBinaryFromReader(message: VoiceVolumeInfo, reader: jspb.BinaryReader): VoiceVolumeInfo;
}

export namespace VoiceVolumeInfo {
  export type AsObject = {
    vol: number,
  }
}

export class SetVoiceVolumeRequest extends jspb.Message {
  hasVoiceVolumeInfo(): boolean;
  clearVoiceVolumeInfo(): void;
  getVoiceVolumeInfo(): VoiceVolumeInfo | undefined;
  setVoiceVolumeInfo(value?: VoiceVolumeInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetVoiceVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetVoiceVolumeRequest): SetVoiceVolumeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetVoiceVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetVoiceVolumeRequest;
  static deserializeBinaryFromReader(message: SetVoiceVolumeRequest, reader: jspb.BinaryReader): SetVoiceVolumeRequest;
}

export namespace SetVoiceVolumeRequest {
  export type AsObject = {
    voiceVolumeInfo?: VoiceVolumeInfo.AsObject,
  }
}

export class SetVoiceVolumeResponse extends jspb.Message {
  hasVoiceVolumeInfo(): boolean;
  clearVoiceVolumeInfo(): void;
  getVoiceVolumeInfo(): VoiceVolumeInfo | undefined;
  setVoiceVolumeInfo(value?: VoiceVolumeInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetVoiceVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetVoiceVolumeResponse): SetVoiceVolumeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetVoiceVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetVoiceVolumeResponse;
  static deserializeBinaryFromReader(message: SetVoiceVolumeResponse, reader: jspb.BinaryReader): SetVoiceVolumeResponse;
}

export namespace SetVoiceVolumeResponse {
  export type AsObject = {
    voiceVolumeInfo?: VoiceVolumeInfo.AsObject,
  }
}

export class GetVoiceVolumeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoiceVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoiceVolumeRequest): GetVoiceVolumeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoiceVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoiceVolumeRequest;
  static deserializeBinaryFromReader(message: GetVoiceVolumeRequest, reader: jspb.BinaryReader): GetVoiceVolumeRequest;
}

export namespace GetVoiceVolumeRequest {
  export type AsObject = {
  }
}

export class GetVoiceVolumeResponse extends jspb.Message {
  hasVoiceVolumeInfo(): boolean;
  clearVoiceVolumeInfo(): void;
  getVoiceVolumeInfo(): VoiceVolumeInfo | undefined;
  setVoiceVolumeInfo(value?: VoiceVolumeInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoiceVolumeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoiceVolumeResponse): GetVoiceVolumeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVoiceVolumeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoiceVolumeResponse;
  static deserializeBinaryFromReader(message: GetVoiceVolumeResponse, reader: jspb.BinaryReader): GetVoiceVolumeResponse;
}

export namespace GetVoiceVolumeResponse {
  export type AsObject = {
    voiceVolumeInfo?: VoiceVolumeInfo.AsObject,
  }
}

export class SetParamsRequest extends jspb.Message {
  getParams(): Uint8Array | string;
  getParams_asU8(): Uint8Array;
  getParams_asB64(): string;
  setParams(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetParamsRequest): SetParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetParamsRequest;
  static deserializeBinaryFromReader(message: SetParamsRequest, reader: jspb.BinaryReader): SetParamsRequest;
}

export namespace SetParamsRequest {
  export type AsObject = {
    params: Uint8Array | string,
  }
}

export class SetParamsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetParamsResponse): SetParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetParamsResponse;
  static deserializeBinaryFromReader(message: SetParamsResponse, reader: jspb.BinaryReader): SetParamsResponse;
}

export namespace SetParamsResponse {
  export type AsObject = {
  }
}

export interface SpeechEventMap {
  UNKNOWN_EVENT: 0;
  WAKE_UP: 1;
  HIBERNATE: 2;
  ERROR: 3;
  VAD: 4;
  RESULT: 5;
  TTS_START: 6;
  TTS_END: 7;
}

export const SpeechEvent: SpeechEventMap;

export interface ErrorTypeMap {
  UNKNOWN_ERROR_TYPE: 0;
  ERR_TIMEOUT: 1;
  ERR_PARAMS: 2;
  ERR_AUTH: 3;
  ERR_NETWORK: 4;
  ERR_NOT_READY: 5;
  ERR_CONFIG: 6;
}

export const ErrorType: ErrorTypeMap;

export interface VadTypeMap {
  UNKNOWN_VAD_TYPE: 0;
  START: 1;
  END: 2;
  TIMEOUT: 3;
  VOLUME_CHANGE: 4;
}

export const VadType: VadTypeMap;

