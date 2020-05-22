const grpc = require("grpc");
const { NetworkServiceClient } = require("./nodesdk/network/network_grpc_pb");
const { GetNetworkDeviceInfoRequest } = require("./nodesdk/network/network_pb");

const client = new NetworkServiceClient(
  "10.10.10.2:8001",
  grpc.credentials.createInsecure()
);

const req = new GetNetworkDeviceInfoRequest();
req.setWithCredential(true);
res = client.getNetworkDeviceInfo(req, (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res.getNetworkDeviceInfo().toObject());
  // { ssid: 'JJRobot', credential: 'CREDENTIAL' }
});
