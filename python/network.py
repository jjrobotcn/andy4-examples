import grpc

from pythonsdk.network.network_pb2_grpc import NetworkServiceStub
from pythonsdk.network.network_pb2 import GetNetworkDeviceInfoRequest


def main():
    channel = grpc.insecure_channel("10.10.10.2:8001")

    stub = NetworkServiceStub(channel)

    f = stub.GetNetworkDeviceInfo.future(
        GetNetworkDeviceInfoRequest(with_credential=True))
    res = f.result()
    print(f'INFO: {res.network_device_info}')
    # INFO: ssid: "JJRobot"
    # credential: "CREDENTIAL"


if __name__ == "__main__":
    main()
