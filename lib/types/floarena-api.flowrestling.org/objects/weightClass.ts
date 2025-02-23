import type { FloBaseObject, ObjectIdentifier, UUID } from "../types";

export type WeightClassAttributes = {
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

export type WeightClassIdentifier = ObjectIdentifier & {
	type: "weightClass";
}

export type WeightClassObject = FloBaseObject<WeightClassIdentifier, WeightClassAttributes>;