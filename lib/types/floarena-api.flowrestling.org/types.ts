import { BoutsIncludeAll, FloObjectTypeString, WrestlersIncludeAll } from "./consts";

export * as Responses from "./responses";
export * as Relationships from "./relationships";
export * from "./objects";

export type UUID = string;
export type ObjectIdentifier = {
	type: FloObjectTypeString;
	id: UUID;
}

export type FloBaseObject<Identifier, Attributes> = Identifier & {
	attributes: Attributes;
}

export type BoutsIncludeString = typeof BoutsIncludeAll[number];
export type WrestlersIncludeString = typeof WrestlersIncludeAll[number];

export type NonNullableFields<T> = {
	[P in keyof T]: NonNullable<T[P]>;
};