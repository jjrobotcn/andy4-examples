const grpc = require("grpc");
const { SpeechServiceClient } = require("./nodesdk/speech/speech_grpc_pb");
const {
  ListenSpeechEventRequest,
  ListenSpeechEventResponse,
} = require("./nodesdk/speech/speech_pb");

const client = new SpeechServiceClient(
  "10.10.10.2:8001",
  grpc.credentials.createInsecure()
);

const req = new ListenSpeechEventRequest();
stream = client.listenSpeechEvent(req);

stream.on("data", (e) => {
  switch (e.getSpeechEventOneofCase()) {
    case ListenSpeechEventResponse.SpeechEventOneofCase.RESULT_INFO:
      const resultInfo = e.getResultInfo();
      const words = resultInfo.getWordsList();
      const complete = resultInfo.getSentenceComplete();

      console.log(`WORDS: ${words}, COMPLETE: ${complete}`);
      // WORDS: 我,想,看一看, COMPLETE: false
      // WORDS: 今天,的,天气预报,, COMPLETE: true
      break;
    case ListenSpeechEventResponse.SpeechEventOneofCase.WAKE_UP_INFO:
      const wakeUpInfo = e.getWakeUpInfo();
      const angle = wakeUpInfo.getAngle();
      const beam = wakeUpInfo.getBeam();
      console.log(`ANGLE: ${angle}, BEAM: ${beam}`);
      // ANGLE: 144, BEAM: 2
      break;
  }
});
