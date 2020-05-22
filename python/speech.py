import grpc

from pythonsdk.speech.speech_pb2_grpc import SpeechServiceStub
from pythonsdk.speech.speech_pb2 import ListenSpeechEventRequest


def main():
    channel = grpc.insecure_channel("10.10.10.2:8001")

    stub = SpeechServiceStub(channel)

    stream = stub.ListenSpeechEvent(ListenSpeechEventRequest())

    for res in stream:
        speech_event_oneof = res.WhichOneof("speech_event_oneof")

        if speech_event_oneof == 'result_info':
            print(
                f"WORDS: {res.result_info.words}, COMPLETE: {res.result_info.sentence_complete}")
            # WORDS: ['我', '想', '看一看', '今天', '的'], COMPLETE: False
            # WORDS: ['天气预报', ''], COMPLETE: True

        elif speech_event_oneof == 'wake_up_info':
            print(
                f"ANGLE: {res.wake_up_info.angle}, BEAM: {res.wake_up_info.beam}")
            # ANGLE: 132, BEAM: 2


if __name__ == "__main__":
    main()
