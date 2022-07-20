import { ResolveNumberRequest } from './src/proto/ts/schema/v1/schema'
import {GRPCService} from './src/service/grpc/service'
import Client from './src/service/grpc/client'
import {
    EvaluationContext,
} from '@openfeature/nodejs-sdk'
function run() {
    let evCtx: EvaluationContext = {}
    evCtx.color = "yellow"
    let srv = new GRPCService(
        Client
    )
    async function test() {
        console.log(await srv.ResolveBoolean("myBoolvvFlag", true, evCtx))
        console.log(await srv.ResolveString("myStringFlag", "hello", evCtx))
        console.log(await srv.ResolveNumber("myStringFlag", 12, evCtx))
        console.log(await srv.ResolveBoolean("isColorYellow", false, evCtx))
    }

    test()
}

run()