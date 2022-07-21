import {
    OpenFeature,
    EvaluationContext
} from '@openfeature/nodejs-sdk'
import {
    GRPCService
} from './src/service/grpc/service'
import {
    FlagdProvider
} from './src/provider'
function run() {
    let evCtx: EvaluationContext = {}
    evCtx.color = "yellow"
    OpenFeature.setProvider(new FlagdProvider({
        service: new GRPCService()
    }))
    async function test() {
        let client = OpenFeature.getClient("test-client")
        console.log(await client.getBooleanDetails("myBoolvvFlag", true, undefined))
        console.log(await client.getStringValue("myStringFlag", "hello", undefined))
        console.log(await client.getNumberDetails("myStringFlag", 12, undefined))
        console.log(await client.getBooleanDetails("isColorYellow", false, evCtx))
    }

    test()
}

run()