import { FloBaseObject, ObjectIdentifier, UUID } from "../types";

namespace WeightClass {
	export type Attributes = {
		createdByUserId: number;
		createdDateTimeUtc: string;
		divisionId: UUID;
		eventId: UUID;
		maxWeight: number;
		maxWrestlerCount: number | null;
		minWeight: number;
		modifiedByUserId: number;
		modifiedDateTimeUtc: string;
		name: string;
		sequence: number;
	}
	
	export type Identifier = ObjectIdentifier & {
		type: "weightClass";
	}
	
	export type Object = FloBaseObject<Identifier, Attributes>;
}

export default WeightClass;