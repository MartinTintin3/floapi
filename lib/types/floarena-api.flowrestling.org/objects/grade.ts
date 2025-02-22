import { FloBaseObject, ObjectIdentifier } from "../types";

namespace Grade {
	export type Attributes = {
		name: string;
		numericValue: number;
		sequence: number;
	}
	
	export type Identifier = ObjectIdentifier & {
		type: "grade";
	}
	
	export type Object = FloBaseObject<Identifier, Attributes>;
}

export default Grade;