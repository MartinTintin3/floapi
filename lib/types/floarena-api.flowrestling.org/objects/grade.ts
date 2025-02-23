import { FloBaseObject, ObjectIdentifier } from "../types";

export type Attributes = {
	name: string;
	numericValue: number;
	sequence: number;
}

export type Identifier = ObjectIdentifier & {
	type: "grade";
}

export type Object = FloBaseObject<Identifier, Attributes>;