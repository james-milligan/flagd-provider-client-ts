import {IService} from '../IService'
import {ServiceClient} from '../../proto/ts/schema/v1/schema.client'
import {
    EvaluationContext,
    ResolutionDetails
} from '@openfeature/nodejs-sdk'
import {
    ResolveBooleanResponse,
    ResolveBooleanRequest,
    ResolveStringRequest,
    ResolveStringResponse,
    ResolveNumberResponse,
    ResolveNumberRequest,
    ResolveObjectResponse, 
    ResolveObjectRequest
} from '../../proto/ts/schema/v1/schema'
import { RpcError } from '@protobuf-ts/runtime-rpc'
import { FileOptions_OptimizeMode } from '../../proto/ts/google/protobuf/descriptor'
import { Struct } from '../../proto/ts/google/protobuf/struct'
import client from './client'
export class GRPCService implements IService {
    client: ServiceClient;
    constructor() {
        this.client = client
    }
    async ResolveBoolean(flagKey: string, defaultValue: boolean, context: EvaluationContext): Promise<ResolutionDetails<boolean>> {
        let res: ResolutionDetails<boolean> = {
            value: defaultValue
        }
        let req: ResolveBooleanRequest = {
            flagKey,
            context: Struct.fromJsonString(JSON.stringify(context)),
        }
        await this.client.resolveBoolean(req, undefined).response.then(callRes => {
            res.reason = callRes.reason
            res.value = callRes.value
            res.variant = callRes.variant
        }).catch((err: RpcError) => {
            res.reason = "ERROR"
            res.errorCode = err.code // TO DO => GET CUSTOM FIELDS FROM THIS ERROR
            res.variant = "default_value"
        })
        return res
    }
    async ResolveString(flagKey: string, defaultValue: string, context: EvaluationContext): Promise<ResolutionDetails<string>> {
        let res: ResolutionDetails<string> = {
            value: defaultValue
        }
        let req: ResolveStringRequest = {
            flagKey,
            context: Struct.fromJsonString(JSON.stringify(context)),
        }
        await this.client.resolveString(req, undefined).response.then(callRes => {
            res.reason = callRes.reason
            res.value = callRes.value
            res.variant = callRes.variant
        }).catch((err: RpcError) => {
            res.reason = "ERROR"
            res.errorCode = err.code // TO DO => GET CUSTOM FIELDS FROM THIS ERROR
            res.variant = "default_value"
        })
        return res
    }
    async ResolveNumber(flagKey: string, defaultValue: number, context: EvaluationContext): Promise<ResolutionDetails<number>> {
        let res: ResolutionDetails<number> = {
            value: defaultValue
        }
        let req: ResolveNumberRequest = {
            flagKey,
            context: Struct.fromJsonString(JSON.stringify(context)),
        }
        await this.client.resolveNumber(req, undefined).response.then(callRes => {
            res.reason = callRes.reason
            res.value = callRes.value
            res.variant = callRes.variant
        }).catch((err: RpcError) => {
            res.reason = "ERROR"
            res.errorCode = err.code // TO DO => GET CUSTOM FIELDS FROM THIS ERROR
            res.variant = "default_value"
        })
        return res
    }
    async ResolveObject<T extends object>(flagKey: string, defaultValue: T, context: EvaluationContext): Promise<ResolutionDetails<T>> {
        let res: ResolutionDetails<T> = {
            value: defaultValue
        }
        let req: ResolveObjectRequest = {
            flagKey,
            context: Struct.fromJsonString(JSON.stringify(context)),
        }
        await this.client.resolveObject(req, undefined).response.then(callRes => {
            res.reason = callRes.reason
            res.value = callRes.value as T
            res.variant = callRes.variant
        }).catch((err: RpcError) => {
            res.reason = "ERROR"
            res.errorCode = err.code // TO DO => GET CUSTOM FIELDS FROM THIS ERROR
            res.variant = "default_value"
        })
        return res
    }
}