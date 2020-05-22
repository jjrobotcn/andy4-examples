// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var speech_pb = require('./speech_pb.js');

function serialize_speechService_GetVoiceVolumeRequest(arg) {
  if (!(arg instanceof speech_pb.GetVoiceVolumeRequest)) {
    throw new Error('Expected argument of type speechService.GetVoiceVolumeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_GetVoiceVolumeRequest(buffer_arg) {
  return speech_pb.GetVoiceVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_GetVoiceVolumeResponse(arg) {
  if (!(arg instanceof speech_pb.GetVoiceVolumeResponse)) {
    throw new Error('Expected argument of type speechService.GetVoiceVolumeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_GetVoiceVolumeResponse(buffer_arg) {
  return speech_pb.GetVoiceVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_HibernateRequest(arg) {
  if (!(arg instanceof speech_pb.HibernateRequest)) {
    throw new Error('Expected argument of type speechService.HibernateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_HibernateRequest(buffer_arg) {
  return speech_pb.HibernateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_HibernateResponse(arg) {
  if (!(arg instanceof speech_pb.HibernateResponse)) {
    throw new Error('Expected argument of type speechService.HibernateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_HibernateResponse(buffer_arg) {
  return speech_pb.HibernateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_ListenSpeechEventRequest(arg) {
  if (!(arg instanceof speech_pb.ListenSpeechEventRequest)) {
    throw new Error('Expected argument of type speechService.ListenSpeechEventRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_ListenSpeechEventRequest(buffer_arg) {
  return speech_pb.ListenSpeechEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_ListenSpeechEventResponse(arg) {
  if (!(arg instanceof speech_pb.ListenSpeechEventResponse)) {
    throw new Error('Expected argument of type speechService.ListenSpeechEventResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_ListenSpeechEventResponse(buffer_arg) {
  return speech_pb.ListenSpeechEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_SetParamsRequest(arg) {
  if (!(arg instanceof speech_pb.SetParamsRequest)) {
    throw new Error('Expected argument of type speechService.SetParamsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_SetParamsRequest(buffer_arg) {
  return speech_pb.SetParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_SetParamsResponse(arg) {
  if (!(arg instanceof speech_pb.SetParamsResponse)) {
    throw new Error('Expected argument of type speechService.SetParamsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_SetParamsResponse(buffer_arg) {
  return speech_pb.SetParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_SetVoiceVolumeRequest(arg) {
  if (!(arg instanceof speech_pb.SetVoiceVolumeRequest)) {
    throw new Error('Expected argument of type speechService.SetVoiceVolumeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_SetVoiceVolumeRequest(buffer_arg) {
  return speech_pb.SetVoiceVolumeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_SetVoiceVolumeResponse(arg) {
  if (!(arg instanceof speech_pb.SetVoiceVolumeResponse)) {
    throw new Error('Expected argument of type speechService.SetVoiceVolumeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_SetVoiceVolumeResponse(buffer_arg) {
  return speech_pb.SetVoiceVolumeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_SpeechStopRequest(arg) {
  if (!(arg instanceof speech_pb.SpeechStopRequest)) {
    throw new Error('Expected argument of type speechService.SpeechStopRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_SpeechStopRequest(buffer_arg) {
  return speech_pb.SpeechStopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_SpeechStopResponse(arg) {
  if (!(arg instanceof speech_pb.SpeechStopResponse)) {
    throw new Error('Expected argument of type speechService.SpeechStopResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_SpeechStopResponse(buffer_arg) {
  return speech_pb.SpeechStopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_TextToSpeechRequest(arg) {
  if (!(arg instanceof speech_pb.TextToSpeechRequest)) {
    throw new Error('Expected argument of type speechService.TextToSpeechRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_TextToSpeechRequest(buffer_arg) {
  return speech_pb.TextToSpeechRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_TextToSpeechResponse(arg) {
  if (!(arg instanceof speech_pb.TextToSpeechResponse)) {
    throw new Error('Expected argument of type speechService.TextToSpeechResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_TextToSpeechResponse(buffer_arg) {
  return speech_pb.TextToSpeechResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_WakeUpRequest(arg) {
  if (!(arg instanceof speech_pb.WakeUpRequest)) {
    throw new Error('Expected argument of type speechService.WakeUpRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_WakeUpRequest(buffer_arg) {
  return speech_pb.WakeUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechService_WakeUpResponse(arg) {
  if (!(arg instanceof speech_pb.WakeUpResponse)) {
    throw new Error('Expected argument of type speechService.WakeUpResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_speechService_WakeUpResponse(buffer_arg) {
  return speech_pb.WakeUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// speechService.SpeechService 语音服务
//
// 开发管理平台功能参考: http://10.10.10.2/speech
var SpeechServiceService = exports.SpeechServiceService = {
  // ListenSpeechEvent 监听语音事件
  //
  // 语音内容识别支持单句多次返回，请留意完整句标识
  //
  // 详见SpeechEvent
  listenSpeechEvent: {
    path: '/speechService.SpeechService/ListenSpeechEvent',
    requestStream: false,
    responseStream: true,
    requestType: speech_pb.ListenSpeechEventRequest,
    responseType: speech_pb.ListenSpeechEventResponse,
    requestSerialize: serialize_speechService_ListenSpeechEventRequest,
    requestDeserialize: deserialize_speechService_ListenSpeechEventRequest,
    responseSerialize: serialize_speechService_ListenSpeechEventResponse,
    responseDeserialize: deserialize_speechService_ListenSpeechEventResponse,
  },
  // TextToSpeech 文本转语音
  //
  // 新的TTS请求将立即中断当前语音，
  // 需要结束后播放新语音应监听TTS_END事件后再进行新的请求。
  //
  // TTS方法支持在休眠状态下调用
  textToSpeech: {
    path: '/speechService.SpeechService/TextToSpeech',
    requestStream: false,
    responseStream: false,
    requestType: speech_pb.TextToSpeechRequest,
    responseType: speech_pb.TextToSpeechResponse,
    requestSerialize: serialize_speechService_TextToSpeechRequest,
    requestDeserialize: deserialize_speechService_TextToSpeechRequest,
    responseSerialize: serialize_speechService_TextToSpeechResponse,
    responseDeserialize: deserialize_speechService_TextToSpeechResponse,
  },
  // SpeechStop 中止语音
  //
  // 通过此方法进行打断不会产生TTS_END事件
  speechStop: {
    path: '/speechService.SpeechService/SpeechStop',
    requestStream: false,
    responseStream: false,
    requestType: speech_pb.SpeechStopRequest,
    responseType: speech_pb.SpeechStopResponse,
    requestSerialize: serialize_speechService_SpeechStopRequest,
    requestDeserialize: deserialize_speechService_SpeechStopRequest,
    responseSerialize: serialize_speechService_SpeechStopResponse,
    responseDeserialize: deserialize_speechService_SpeechStopResponse,
  },
  // WakeUp 唤醒
  //
  // 唤醒后开始监听语音输入
  wakeUp: {
    path: '/speechService.SpeechService/WakeUp',
    requestStream: false,
    responseStream: false,
    requestType: speech_pb.WakeUpRequest,
    responseType: speech_pb.WakeUpResponse,
    requestSerialize: serialize_speechService_WakeUpRequest,
    requestDeserialize: deserialize_speechService_WakeUpRequest,
    responseSerialize: serialize_speechService_WakeUpResponse,
    responseDeserialize: deserialize_speechService_WakeUpResponse,
  },
  // Hibernate 休眠
  //
  // 休眠后不再监听语音输入
  hibernate: {
    path: '/speechService.SpeechService/Hibernate',
    requestStream: false,
    responseStream: false,
    requestType: speech_pb.HibernateRequest,
    responseType: speech_pb.HibernateResponse,
    requestSerialize: serialize_speechService_HibernateRequest,
    requestDeserialize: deserialize_speechService_HibernateRequest,
    responseSerialize: serialize_speechService_HibernateResponse,
    responseDeserialize: deserialize_speechService_HibernateResponse,
  },
  // SetVoiceVolume 设置语音音量
  setVoiceVolume: {
    path: '/speechService.SpeechService/SetVoiceVolume',
    requestStream: false,
    responseStream: false,
    requestType: speech_pb.SetVoiceVolumeRequest,
    responseType: speech_pb.SetVoiceVolumeResponse,
    requestSerialize: serialize_speechService_SetVoiceVolumeRequest,
    requestDeserialize: deserialize_speechService_SetVoiceVolumeRequest,
    responseSerialize: serialize_speechService_SetVoiceVolumeResponse,
    responseDeserialize: deserialize_speechService_SetVoiceVolumeResponse,
  },
  // GetVoiceVolume 查询语音音量
  getVoiceVolume: {
    path: '/speechService.SpeechService/GetVoiceVolume',
    requestStream: false,
    responseStream: false,
    requestType: speech_pb.GetVoiceVolumeRequest,
    responseType: speech_pb.GetVoiceVolumeResponse,
    requestSerialize: serialize_speechService_GetVoiceVolumeRequest,
    requestDeserialize: deserialize_speechService_GetVoiceVolumeRequest,
    responseSerialize: serialize_speechService_GetVoiceVolumeResponse,
    responseDeserialize: deserialize_speechService_GetVoiceVolumeResponse,
  },
  // SetParams 配置参数
  //
  // 此方法通常为开发用户在开发过程中进行一次性配置
  // 不建议不了解该配置文件的用户进行参数设置
  //
  // AIUI模块参数配置参考:
  //    https://doc.iflyos.cn/aiui/sdk/smart_doc/config_file.html#配置文件
  setParams: {
    path: '/speechService.SpeechService/SetParams',
    requestStream: false,
    responseStream: false,
    requestType: speech_pb.SetParamsRequest,
    responseType: speech_pb.SetParamsResponse,
    requestSerialize: serialize_speechService_SetParamsRequest,
    requestDeserialize: deserialize_speechService_SetParamsRequest,
    responseSerialize: serialize_speechService_SetParamsResponse,
    responseDeserialize: deserialize_speechService_SetParamsResponse,
  },
};

exports.SpeechServiceClient = grpc.makeGenericClientConstructor(SpeechServiceService);
