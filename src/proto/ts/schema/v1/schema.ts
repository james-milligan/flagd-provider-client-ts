// @generated by protobuf-ts 2.2.2 with parameter long_type_string,generate_dependencies
// @generated from protobuf file "schema/v1/schema.proto" (package "schema.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Struct } from "../../google/protobuf/struct";
/**
 * @generated from protobuf message schema.v1.ErrorResponse
 */
export interface ErrorResponse {
    /**
     * @generated from protobuf field: string error_code = 1;
     */
    errorCode: string;
    /**
     * @generated from protobuf field: string reason = 2;
     */
    reason: string;
}
/**
 * @generated from protobuf message schema.v1.ResolveBooleanRequest
 */
export interface ResolveBooleanRequest {
    /**
     * @generated from protobuf field: string flag_key = 1;
     */
    flagKey: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct context = 2;
     */
    context?: Struct;
}
/**
 * @generated from protobuf message schema.v1.ResolveBooleanResponse
 */
export interface ResolveBooleanResponse {
    /**
     * @generated from protobuf field: bool value = 1;
     */
    value: boolean;
    /**
     * @generated from protobuf field: string reason = 2;
     */
    reason: string;
    /**
     * @generated from protobuf field: string variant = 3;
     */
    variant: string;
}
/**
 * @generated from protobuf message schema.v1.ResolveStringRequest
 */
export interface ResolveStringRequest {
    /**
     * @generated from protobuf field: string flag_key = 1;
     */
    flagKey: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct context = 2;
     */
    context?: Struct;
}
/**
 * @generated from protobuf message schema.v1.ResolveStringResponse
 */
export interface ResolveStringResponse {
    /**
     * @generated from protobuf field: string value = 1;
     */
    value: string;
    /**
     * @generated from protobuf field: string reason = 2;
     */
    reason: string;
    /**
     * @generated from protobuf field: string variant = 3;
     */
    variant: string;
}
/**
 * @generated from protobuf message schema.v1.ResolveNumberRequest
 */
export interface ResolveNumberRequest {
    /**
     * @generated from protobuf field: string flag_key = 1;
     */
    flagKey: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct context = 2;
     */
    context?: Struct;
}
/**
 * @generated from protobuf message schema.v1.ResolveNumberResponse
 */
export interface ResolveNumberResponse {
    /**
     * @generated from protobuf field: float value = 1;
     */
    value: number;
    /**
     * @generated from protobuf field: string reason = 2;
     */
    reason: string;
    /**
     * @generated from protobuf field: string variant = 3;
     */
    variant: string;
}
/**
 * @generated from protobuf message schema.v1.ResolveObjectRequest
 */
export interface ResolveObjectRequest {
    /**
     * @generated from protobuf field: string flag_key = 1;
     */
    flagKey: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct context = 2;
     */
    context?: Struct;
}
/**
 * @generated from protobuf message schema.v1.ResolveObjectResponse
 */
export interface ResolveObjectResponse {
    /**
     * @generated from protobuf field: google.protobuf.Struct value = 1;
     */
    value?: Struct;
    /**
     * @generated from protobuf field: string reason = 2;
     */
    reason: string;
    /**
     * @generated from protobuf field: string variant = 3;
     */
    variant: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ErrorResponse$Type extends MessageType<ErrorResponse> {
    constructor() {
        super("schema.v1.ErrorResponse", [
            { no: 1, name: "error_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ErrorResponse>): ErrorResponse {
        const message = { errorCode: "", reason: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ErrorResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ErrorResponse): ErrorResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string error_code */ 1:
                    message.errorCode = reader.string();
                    break;
                case /* string reason */ 2:
                    message.reason = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ErrorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string error_code = 1; */
        if (message.errorCode !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.errorCode);
        /* string reason = 2; */
        if (message.reason !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.reason);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ErrorResponse
 */
export const ErrorResponse = new ErrorResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveBooleanRequest$Type extends MessageType<ResolveBooleanRequest> {
    constructor() {
        super("schema.v1.ResolveBooleanRequest", [
            { no: 1, name: "flag_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "context", kind: "message", T: () => Struct }
        ]);
    }
    create(value?: PartialMessage<ResolveBooleanRequest>): ResolveBooleanRequest {
        const message = { flagKey: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveBooleanRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveBooleanRequest): ResolveBooleanRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string flag_key */ 1:
                    message.flagKey = reader.string();
                    break;
                case /* google.protobuf.Struct context */ 2:
                    message.context = Struct.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveBooleanRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string flag_key = 1; */
        if (message.flagKey !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.flagKey);
        /* google.protobuf.Struct context = 2; */
        if (message.context)
            Struct.internalBinaryWrite(message.context, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveBooleanRequest
 */
export const ResolveBooleanRequest = new ResolveBooleanRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveBooleanResponse$Type extends MessageType<ResolveBooleanResponse> {
    constructor() {
        super("schema.v1.ResolveBooleanResponse", [
            { no: 1, name: "value", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "variant", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ResolveBooleanResponse>): ResolveBooleanResponse {
        const message = { value: false, reason: "", variant: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveBooleanResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveBooleanResponse): ResolveBooleanResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool value */ 1:
                    message.value = reader.bool();
                    break;
                case /* string reason */ 2:
                    message.reason = reader.string();
                    break;
                case /* string variant */ 3:
                    message.variant = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveBooleanResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool value = 1; */
        if (message.value !== false)
            writer.tag(1, WireType.Varint).bool(message.value);
        /* string reason = 2; */
        if (message.reason !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.reason);
        /* string variant = 3; */
        if (message.variant !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.variant);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveBooleanResponse
 */
export const ResolveBooleanResponse = new ResolveBooleanResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveStringRequest$Type extends MessageType<ResolveStringRequest> {
    constructor() {
        super("schema.v1.ResolveStringRequest", [
            { no: 1, name: "flag_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "context", kind: "message", T: () => Struct }
        ]);
    }
    create(value?: PartialMessage<ResolveStringRequest>): ResolveStringRequest {
        const message = { flagKey: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveStringRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveStringRequest): ResolveStringRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string flag_key */ 1:
                    message.flagKey = reader.string();
                    break;
                case /* google.protobuf.Struct context */ 2:
                    message.context = Struct.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveStringRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string flag_key = 1; */
        if (message.flagKey !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.flagKey);
        /* google.protobuf.Struct context = 2; */
        if (message.context)
            Struct.internalBinaryWrite(message.context, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveStringRequest
 */
export const ResolveStringRequest = new ResolveStringRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveStringResponse$Type extends MessageType<ResolveStringResponse> {
    constructor() {
        super("schema.v1.ResolveStringResponse", [
            { no: 1, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "variant", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ResolveStringResponse>): ResolveStringResponse {
        const message = { value: "", reason: "", variant: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveStringResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveStringResponse): ResolveStringResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string value */ 1:
                    message.value = reader.string();
                    break;
                case /* string reason */ 2:
                    message.reason = reader.string();
                    break;
                case /* string variant */ 3:
                    message.variant = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveStringResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string value = 1; */
        if (message.value !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.value);
        /* string reason = 2; */
        if (message.reason !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.reason);
        /* string variant = 3; */
        if (message.variant !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.variant);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveStringResponse
 */
export const ResolveStringResponse = new ResolveStringResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveNumberRequest$Type extends MessageType<ResolveNumberRequest> {
    constructor() {
        super("schema.v1.ResolveNumberRequest", [
            { no: 1, name: "flag_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "context", kind: "message", T: () => Struct }
        ]);
    }
    create(value?: PartialMessage<ResolveNumberRequest>): ResolveNumberRequest {
        const message = { flagKey: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveNumberRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveNumberRequest): ResolveNumberRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string flag_key */ 1:
                    message.flagKey = reader.string();
                    break;
                case /* google.protobuf.Struct context */ 2:
                    message.context = Struct.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveNumberRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string flag_key = 1; */
        if (message.flagKey !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.flagKey);
        /* google.protobuf.Struct context = 2; */
        if (message.context)
            Struct.internalBinaryWrite(message.context, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveNumberRequest
 */
export const ResolveNumberRequest = new ResolveNumberRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveNumberResponse$Type extends MessageType<ResolveNumberResponse> {
    constructor() {
        super("schema.v1.ResolveNumberResponse", [
            { no: 1, name: "value", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "variant", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ResolveNumberResponse>): ResolveNumberResponse {
        const message = { value: 0, reason: "", variant: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveNumberResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveNumberResponse): ResolveNumberResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* float value */ 1:
                    message.value = reader.float();
                    break;
                case /* string reason */ 2:
                    message.reason = reader.string();
                    break;
                case /* string variant */ 3:
                    message.variant = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveNumberResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* float value = 1; */
        if (message.value !== 0)
            writer.tag(1, WireType.Bit32).float(message.value);
        /* string reason = 2; */
        if (message.reason !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.reason);
        /* string variant = 3; */
        if (message.variant !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.variant);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveNumberResponse
 */
export const ResolveNumberResponse = new ResolveNumberResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveObjectRequest$Type extends MessageType<ResolveObjectRequest> {
    constructor() {
        super("schema.v1.ResolveObjectRequest", [
            { no: 1, name: "flag_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "context", kind: "message", T: () => Struct }
        ]);
    }
    create(value?: PartialMessage<ResolveObjectRequest>): ResolveObjectRequest {
        const message = { flagKey: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveObjectRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveObjectRequest): ResolveObjectRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string flag_key */ 1:
                    message.flagKey = reader.string();
                    break;
                case /* google.protobuf.Struct context */ 2:
                    message.context = Struct.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveObjectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string flag_key = 1; */
        if (message.flagKey !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.flagKey);
        /* google.protobuf.Struct context = 2; */
        if (message.context)
            Struct.internalBinaryWrite(message.context, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveObjectRequest
 */
export const ResolveObjectRequest = new ResolveObjectRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResolveObjectResponse$Type extends MessageType<ResolveObjectResponse> {
    constructor() {
        super("schema.v1.ResolveObjectResponse", [
            { no: 1, name: "value", kind: "message", T: () => Struct },
            { no: 2, name: "reason", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "variant", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ResolveObjectResponse>): ResolveObjectResponse {
        const message = { reason: "", variant: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ResolveObjectResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResolveObjectResponse): ResolveObjectResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Struct value */ 1:
                    message.value = Struct.internalBinaryRead(reader, reader.uint32(), options, message.value);
                    break;
                case /* string reason */ 2:
                    message.reason = reader.string();
                    break;
                case /* string variant */ 3:
                    message.variant = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ResolveObjectResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Struct value = 1; */
        if (message.value)
            Struct.internalBinaryWrite(message.value, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string reason = 2; */
        if (message.reason !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.reason);
        /* string variant = 3; */
        if (message.variant !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.variant);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message schema.v1.ResolveObjectResponse
 */
export const ResolveObjectResponse = new ResolveObjectResponse$Type();
/**
 * @generated ServiceType for protobuf service schema.v1.Service
 */
export const Service = new ServiceType("schema.v1.Service", [
    { name: "ResolveBoolean", options: { "google.api.http": { post: "/flags/{flag_key}/resolve/boolean", body: "context" } }, I: ResolveBooleanRequest, O: ResolveBooleanResponse },
    { name: "ResolveString", options: { "google.api.http": { post: "/flags/{flag_key}/resolve/string", body: "context" } }, I: ResolveStringRequest, O: ResolveStringResponse },
    { name: "ResolveNumber", options: { "google.api.http": { post: "/flags/{flag_key}/resolve/number", body: "context" } }, I: ResolveNumberRequest, O: ResolveNumberResponse },
    { name: "ResolveObject", options: { "google.api.http": { post: "/flags/{flag_key}/resolve/object", body: "context" } }, I: ResolveObjectRequest, O: ResolveObjectResponse }
]);
