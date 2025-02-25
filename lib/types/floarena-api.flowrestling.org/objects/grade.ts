import type { FloBaseObject, ObjectIdentifier } from "../types";

export type GradeAttributes = {
	name: string;
	numericValue: number;
	sequence: number;
}

export type GradeIdentifier = ObjectIdentifier & {
	type: "grade";
}

export type GradeObject = FloBaseObject<GradeIdentifier, GradeAttributes>;