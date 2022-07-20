import {
    EvaluationContext,
    FlagEvaluationOptions,
    Provider, ProviderOptions, ResolutionDetails,
} from '@openfeature/nodejs-sdk'
import {
    IService
} from './service/IService'

export interface FlagdProviderOpions extends ProviderOptions {
    service: IService
}

export class FlagdProvider implements Provider {
    readonly metadata = {
        name: 'flagd Provider',
    } as const

    private readonly service: IService

    constructor(options: FlagdProviderOpions) {
        this.service = options.service
    }

    async resolveBooleanEvaluation(flagKey: string, defaultValue: boolean, transformedContext: EvaluationContext, options: FlagEvaluationOptions | undefined): Promise<ResolutionDetails<boolean>> {
        return this.service.ResolveBoolean(flagKey, defaultValue, transformedContext)
    }

    async resolveNumberEvaluation(flagKey: string, defaultValue: number, transformedContext: EvaluationContext, options: FlagEvaluationOptions | undefined): Promise<ResolutionDetails<number>> {
        return this.service.ResolveNumber(flagKey, defaultValue, transformedContext)
    }

    resolveStringEvaluation(flagKey: string, defaultValue: string, transformedContext: EvaluationContext, options: FlagEvaluationOptions | undefined): Promise<ResolutionDetails<string>> {
        return this.service.ResolveString(flagKey, defaultValue, transformedContext)
    }

    async resolveObjectEvaluation<U extends object>(flagKey: string, defaultValue: U, transformedContext: EvaluationContext, options: FlagEvaluationOptions | undefined): Promise<ResolutionDetails<U>> {
        return this.service.ResolveObject(flagKey, defaultValue, transformedContext)
    }
}