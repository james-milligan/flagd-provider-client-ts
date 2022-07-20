import * as grpc from '@grpc/grpc-js';
import {ServiceClient} from '../../proto/ts/schema/v1/schema.client'
import { GrpcTransport } from "@protobuf-ts/grpc-transport";

const transport = new GrpcTransport({
    host: "localhost:8080",
    channelCredentials: grpc.credentials.createInsecure()
})

export default new ServiceClient(transport);
